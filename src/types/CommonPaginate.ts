export type PaginateReq = {
  per?: number;
  page?: number;
  search?: string;
};

export type Paginate<Entity> = {
  results: Entity[];
  total: number;
  current: number;
  last: number;
};

export class PaginateRes<Entity> {
  public results: Entity[];
  public total: number;
  public current: number;
  public last: number;

  constructor(raw: Paginate<Entity>) {
    this.results = raw.results;
    this.total = raw.total;
    this.current = raw.current;
    this.last = raw.last;
  }
}
