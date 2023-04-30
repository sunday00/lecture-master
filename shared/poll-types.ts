export type Participants ={
  [participantID: string]: string;
}

export type Nomination = {
  userID: string;
  text: string;
}

export type NominationID = string;

export type Nominations = {
  [nominationID: NominationID]: Nomination;
}

export type Rankings= {
  [userID: string]: NominationID[];
}

export type Results = Array<{
  nominationID: NominationID;
  nominationText: string;
  score: number;
}>

export class Poll {
  id: string;
  topic: string;
  votesPerVoter: number;
  participants: Participants;
  adminID: string;
  nominations: Nominations;
  rankings: Rankings;
  results: Results;
  hasStarted: boolean;

  constructor(pollID: string, topic: string, votesPerVoter: number, userID: string) {
    this.id = pollID;
    this.topic = topic;
    this.votesPerVoter = votesPerVoter;
    this.participants = {};
    this.adminID = userID;
    this.nominations = {};
    this.rankings = {};
    this.results = [];
    this.hasStarted = false;
  }
}