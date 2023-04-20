import { IoAdapter } from '@nestjs/platform-socket.io';
import { INestApplicationContext, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Server, ServerOptions } from "socket.io";
import { JwtService } from "@nestjs/jwt";
import { SocketWithAuth } from "./polls/types";

export class SocketIoAdaptor extends IoAdapter {
  private readonly logger = new Logger(SocketIoAdaptor.name);

  constructor(
    private app: INestApplicationContext,
    private configService: ConfigService,
  ) {
    super(app);
  }

  createIOServer(port: number, options?: ServerOptions): any {
    const clientPort = parseInt(this.configService.get('CLIENT_PORT'));

    const cors = {
      origin: [
        `http://localhost:${clientPort}`,
        new RegExp(`/http:\/\/192\.168\.1\.([1-9]|[1-9]\d):${clientPort}/`),
      ],
    };

    this.logger.log('configure SocketIO Server with custom CORS options', {
      cors,
    });

    const optionsWithCors: ServerOptions = { ...options, cors };

    const jwtService = this.app.get(JwtService);

    const server: Server = super.createIOServer(port, optionsWithCors);

    server.of('polls').use(createTokenMiddleware(jwtService, this.logger));

    return server;
  }
}

const createTokenMiddleware =
  (jwtService: JwtService, logger: Logger) =>
  (socket: SocketWithAuth, next) => {
    const token =
      socket.handshake.auth.token || socket.handshake.headers['token'];

    logger.debug(`Validating auth token before connection: ${token}`);

    try {
      const payload = jwtService.verify(token);
      socket.userID = payload.sub;
      socket.pollID = payload.pollID;
      socket.name = payload.name;
      next();
    } catch {
      next(new Error('FORBIDDEN'));
    }
  };
