export type Item = {
  id: number;
  title: string;
  points: number | null;
  user: string | null;
  time: number;
  // eslint-disable-next-line camelcase
  time_ago: string;
  content: string;
  deleted?: boolean;
  dead?: boolean;
  type: string;
  url?: string;
  domain?: string;
  comments: Item[]; // Comments are items too
  level: number;
  // eslint-disable-next-line camelcase
  comments_count: number;
}
