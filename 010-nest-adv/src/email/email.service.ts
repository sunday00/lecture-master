import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { Video } from '../video/entity/video.entity';

@Injectable()
export class EmailService {
  constructor(private readonly mailerService: MailerService) {}

  async send(videos: Video[]) {
    const data = videos.map(({ id, title, downloadCnt }) => {
      return `<tr>
            <td style="border: 1px solid black; text-align: center;">${id}</td>
            <td style="border: 1px solid black; text-align: center;">${title}</td>
            <td style="border: 1px solid black; text-align: center;">${downloadCnt}</td>
          </tr>`;
    });

    await this.mailerService.sendMail({
      from: 'nestPracServer@gamil.com',
      to: 'sunday0000@nate.com',
      subject: 'facam analyze summary',
      html: `<table style="width:60%; margin: auto;">
            <tr><th>id</th><th>title</th><th>downloadCtn</th></tr>
            ${data}
        </table>`,
    });
  }
}
