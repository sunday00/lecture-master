import { Request } from '@nestjs/common';
import { Socket } from "socket.io";

// service types
export type CreatePollFields = {
  topic: string;
  votesPerVoter: number;
  name: string;
};

export type JoinPollFields = {
  pollID: string;
  name: string;
};

export type RejoinPollFields = {
  pollID: string;
  userID: string;
  name: string;
};

// repository types
export type CreatePollData = {
  pollID: string;
  topic: string;
  votesPerVoter: number;
  userID: string;
};

export type AddParticipantData = {
  pollID: string;
  userID: string;
  name: string;
};

export type AuthPayload = {
  userID: string;
  pollID: string;
  name: string;
};

type AccessTokenIncludeRequest = { body: { accessToken: string } };

export type RequestWithAuth = Request & AuthPayload & AccessTokenIncludeRequest;
export type SocketWithAuth = Socket & AuthPayload & AccessTokenIncludeRequest;