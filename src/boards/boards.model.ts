export interface Board {
  id: number;
  title: string;
  description: string;
  status: BoardsStatus;
}

export enum BoardsStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
