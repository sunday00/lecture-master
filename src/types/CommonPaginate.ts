import {
  FindManyOptions,
  QueryRunner,
  Repository,
  SelectQueryBuilder,
} from 'typeorm';

export type PaginateReq = {
  per?: number;
  page?: number;
  search?: string;
};

export function applyPaginate(req: PaginateReq): {
  take: number;
  page: number;
  skip: number;
} {
  const take = req.per || 10;
  const page = req.page || 1;

  return {
    take,
    page,
    skip: take * (page - 1),
  };
}

export type Paginate<Entity> = {
  results: [Entity[], number];
  req: PaginateReq;
};

export class PaginateRes<Entity> {
  public results: Entity[];
  public total: number;
  public current: number;
  public last: number;

  constructor(raw: Paginate<Entity>) {
    const { page, take } = applyPaginate(raw.req);

    const hasRemain = raw.results[1] % take;
    const filledPages = raw.results[1] / take;

    this.results = raw.results[0];
    this.total = raw.results[1];
    this.current = page ? parseInt(String(page)) : 1;
    this.last = hasRemain ? Math.floor(filledPages) + 1 : filledPages;
  }
}

export class PaginateRepository<Entity> extends Repository<Entity> {
  public page: number;
  public take: number;

  whereLike(where: string, search?: string): [string, { search: string }] {
    return [
      `${where} ${search ? 'LIKE :search' : 'IS NOT NULL'}`,
      { search: `%${search}%` },
    ];
  }

  paginateFindAndCount(options: FindManyOptions<Entity>, req?: PaginateReq) {
    const { page, take, skip } = applyPaginate(req);

    options.skip = skip;
    options.take = take;

    this.page = page;
    this.take = take;

    return this.findAndCount(options);
  }

  createPaginateQueryBuilder(
    alias?: string,
    req?: PaginateReq,
    queryRunner?: QueryRunner,
  ): SelectQueryBuilder<Entity> {
    const { page, take, skip } = applyPaginate(req);

    this.page = page;
    this.take = take;

    return this.createQueryBuilder(alias, queryRunner).skip(skip).take(take);
  }
}
