/* eslint-disable */
import { type CheckSelect, fetcher, marshal, makeUrl } from '@roq/client';
import type { Prisma, hashtag, startup, trend, user, video, video_trend } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';

export type RequestOptions = Record<string, any>;

interface HashtagSDK {
  create: <
    T extends Prisma.hashtagCreateArgs,
    R extends CheckSelect<T, hashtag, Prisma.hashtagGetPayload<T>>,
    U extends Omit<Prisma.hashtagCreateArgs, 'data'> & {
      data: Prisma.hashtagUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.hashtagCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hashtagCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.hashtagUpdateArgs,
    R extends Prisma.hashtagGetPayload<T>,
    U extends Omit<Prisma.hashtagUpdateArgs, 'data'> & {
      data: Prisma.hashtagUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.hashtagUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hashtagUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.hashtagUpsertArgs, R extends Prisma.hashtagGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.hashtagUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.hashtagDeleteArgs, R extends Prisma.hashtagGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.hashtagDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.hashtagDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.hashtagDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.hashtagFindManyArgs, R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.hashtagCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.hashtagCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.hashtagFindManyArgs,
    R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.hashtagFindFirstArgs, R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.hashtagFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface StartupSDK {
  create: <
    T extends Prisma.startupCreateArgs,
    R extends CheckSelect<T, startup, Prisma.startupGetPayload<T>>,
    U extends Omit<Prisma.startupCreateArgs, 'data'> & {
      data: Omit<Prisma.startupUncheckedCreateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.startupCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.startupUpdateArgs,
    R extends Prisma.startupGetPayload<T>,
    U extends Omit<Prisma.startupUpdateArgs, 'data'> & {
      data: Omit<Prisma.startupUncheckedUpdateInput, 'user'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.startupUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.startupUpsertArgs, R extends Prisma.startupGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.startupUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.startupDeleteArgs, R extends Prisma.startupGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.startupDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.startupDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.startupDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.startupFindManyArgs, R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.startupCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.startupFindManyArgs,
    R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.startupFindFirstArgs, R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface TrendSDK {
  create: <
    T extends Prisma.trendCreateArgs,
    R extends CheckSelect<T, trend, Prisma.trendGetPayload<T>>,
    U extends Omit<Prisma.trendCreateArgs, 'data'> & {
      data: Omit<Prisma.trendUncheckedCreateInput, 'video_trend'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.trendCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.trendCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.trendUpdateArgs,
    R extends Prisma.trendGetPayload<T>,
    U extends Omit<Prisma.trendUpdateArgs, 'data'> & {
      data: Omit<Prisma.trendUncheckedUpdateInput, 'video_trend'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.trendUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.trendUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.trendUpsertArgs, R extends Prisma.trendGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.trendUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.trendDeleteArgs, R extends Prisma.trendGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.trendDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.trendDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.trendDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.trendFindManyArgs, R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.trendCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.trendCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.trendFindManyArgs,
    R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.trendFindFirstArgs, R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.trendFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface UserSDK {
  create: <
    T extends Prisma.userCreateArgs,
    R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
    U extends Omit<Prisma.userCreateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedCreateInput, 'video'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.userUpdateArgs,
    R extends Prisma.userGetPayload<T>,
    U extends Omit<Prisma.userUpdateArgs, 'data'> & {
      data: Omit<Prisma.userUncheckedUpdateInput, 'video'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.userFindManyArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.userCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.userFindManyArgs,
    R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.userFindFirstArgs, R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface VideoSDK {
  create: <
    T extends Prisma.videoCreateArgs,
    R extends CheckSelect<T, video, Prisma.videoGetPayload<T>>,
    U extends Omit<Prisma.videoCreateArgs, 'data'> & {
      data: Omit<Prisma.videoUncheckedCreateInput, 'hashtag' | 'video_trend'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.videoCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.videoCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.videoUpdateArgs,
    R extends Prisma.videoGetPayload<T>,
    U extends Omit<Prisma.videoUpdateArgs, 'data'> & {
      data: Omit<Prisma.videoUncheckedUpdateInput, 'hashtag' | 'video_trend'>;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.videoUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.videoUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.videoUpsertArgs, R extends Prisma.videoGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.videoUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.videoDeleteArgs, R extends Prisma.videoGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.videoDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.videoDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.videoDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <T extends Prisma.videoFindManyArgs, R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[]>(
    args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.videoCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.videoCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.videoFindManyArgs,
    R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <T extends Prisma.videoFindFirstArgs, R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>>(
    args?: Prisma.SelectSubset<T, Prisma.videoFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

interface Video_trendSDK {
  create: <
    T extends Prisma.video_trendCreateArgs,
    R extends CheckSelect<T, video_trend, Prisma.video_trendGetPayload<T>>,
    U extends Omit<Prisma.video_trendCreateArgs, 'data'> & {
      data: Prisma.video_trendUncheckedCreateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  createMany: <T extends Prisma.video_trendCreateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.video_trendCreateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  update: <
    T extends Prisma.video_trendUpdateArgs,
    R extends Prisma.video_trendGetPayload<T>,
    U extends Omit<Prisma.video_trendUpdateArgs, 'data'> & {
      data: Prisma.video_trendUncheckedUpdateInput;
    },
  >(
    data: Prisma.SelectSubset<U, T>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  updateMany: <T extends Prisma.video_trendUpdateManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.video_trendUpdateManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  upsert: <T extends Prisma.video_trendUpsertArgs, R extends Prisma.video_trendGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.video_trendUpsertArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  delete: <T extends Prisma.video_trendDeleteArgs, R extends Prisma.video_trendGetPayload<T>>(
    data: Prisma.SelectSubset<T, Prisma.video_trendDeleteArgs>,
    options?: RequestOptions,
  ) => Promise<R | undefined>;

  deleteMany: <T extends Prisma.video_trendDeleteManyArgs, R extends Prisma.BatchPayload>(
    args: Prisma.SelectSubset<T, Prisma.video_trendDeleteManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findMany: <
    T extends Prisma.video_trendFindManyArgs,
    R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[],
  >(
    args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  count: <T extends Prisma.video_trendCountArgs, R extends number>(
    args?: Prisma.SelectSubset<T, Prisma.video_trendCountArgs>,
    options?: RequestOptions,
  ) => Promise<R>;

  findManyWithCount: <
    T extends Prisma.video_trendFindManyArgs,
    R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[],
    C extends number,
  >(
    args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>,
    options?: RequestOptions,
  ) => Promise<{ data: R; count: C }>;

  findFirst: <
    T extends Prisma.video_trendFindFirstArgs,
    R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>,
  >(
    args?: Prisma.SelectSubset<T, Prisma.video_trendFindFirstArgs>,
    options?: RequestOptions,
  ) => Promise<R>;
}

export class RoqBaasSdk {
  private endpoint: string;
  private baseOptions: RequestOptions;

  public hashtag!: HashtagSDK;

  public startup!: StartupSDK;

  public trend!: TrendSDK;

  public user!: UserSDK;

  public video!: VideoSDK;

  public video_trend!: Video_trendSDK;

  constructor(backendHost: string, baseOptions: RequestOptions = {}) {
    this.endpoint = backendHost;
    this.baseOptions = baseOptions;
    this.initSDK();
  }

  private initSDK() {
    const ctx = this;

    this.hashtag = {
      create: async function createHashtag<
        T extends Prisma.hashtagCreateArgs,
        R extends CheckSelect<T, hashtag, Prisma.hashtagGetPayload<T>>,
        U extends Omit<Prisma.hashtagCreateArgs, 'data'> & {
          data: Prisma.hashtagUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hashtag/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyHashtag<
        T extends Prisma.hashtagCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hashtagCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/hashtag/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateHashtag<
        T extends Prisma.hashtagUpdateArgs,
        R extends Prisma.hashtagGetPayload<T>,
        U extends Omit<Prisma.hashtagUpdateArgs, 'data'> & {
          data: Prisma.hashtagUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hashtag/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyHashtag<
        T extends Prisma.hashtagUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hashtagUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/hashtag/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertHashtag<T extends Prisma.hashtagUpsertArgs, R extends Prisma.hashtagGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.hashtagUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/hashtag/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteHashtag<T extends Prisma.hashtagDeleteArgs, R extends Prisma.hashtagGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.hashtagDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/hashtag/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyHashtag<
        T extends Prisma.hashtagDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.hashtagDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hashtag/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyHashtag<
        T extends Prisma.hashtagFindManyArgs,
        R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hashtag/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countHashtag<T extends Prisma.hashtagCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.hashtagCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/hashtag/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountHashtag<
        T extends Prisma.hashtagFindManyArgs,
        R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.hashtag.findMany(args, options),
          ctx.hashtag.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstHashtag<
        T extends Prisma.hashtagFindFirstArgs,
        R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.hashtagFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/hashtag/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.startup = {
      create: async function createStartup<
        T extends Prisma.startupCreateArgs,
        R extends CheckSelect<T, startup, Prisma.startupGetPayload<T>>,
        U extends Omit<Prisma.startupCreateArgs, 'data'> & {
          data: Omit<Prisma.startupUncheckedCreateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyStartup<
        T extends Prisma.startupCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/startup/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateStartup<
        T extends Prisma.startupUpdateArgs,
        R extends Prisma.startupGetPayload<T>,
        U extends Omit<Prisma.startupUpdateArgs, 'data'> & {
          data: Omit<Prisma.startupUncheckedUpdateInput, 'user'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyStartup<
        T extends Prisma.startupUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/startup/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertStartup<T extends Prisma.startupUpsertArgs, R extends Prisma.startupGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.startupUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/startup/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteStartup<T extends Prisma.startupDeleteArgs, R extends Prisma.startupGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.startupDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/startup/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyStartup<
        T extends Prisma.startupDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.startupDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyStartup<
        T extends Prisma.startupFindManyArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countStartup<T extends Prisma.startupCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/startup/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountStartup<
        T extends Prisma.startupFindManyArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.startup.findMany(args, options),
          ctx.startup.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstStartup<
        T extends Prisma.startupFindFirstArgs,
        R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/startup/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.trend = {
      create: async function createTrend<
        T extends Prisma.trendCreateArgs,
        R extends CheckSelect<T, trend, Prisma.trendGetPayload<T>>,
        U extends Omit<Prisma.trendCreateArgs, 'data'> & {
          data: Omit<Prisma.trendUncheckedCreateInput, 'video_trend'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/trend/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyTrend<T extends Prisma.trendCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.trendCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/trend/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateTrend<
        T extends Prisma.trendUpdateArgs,
        R extends Prisma.trendGetPayload<T>,
        U extends Omit<Prisma.trendUpdateArgs, 'data'> & {
          data: Omit<Prisma.trendUncheckedUpdateInput, 'video_trend'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/trend/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyTrend<T extends Prisma.trendUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.trendUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/trend/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertTrend<T extends Prisma.trendUpsertArgs, R extends Prisma.trendGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.trendUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/trend/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteTrend<T extends Prisma.trendDeleteArgs, R extends Prisma.trendGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.trendDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/trend/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyTrend<T extends Prisma.trendDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.trendDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/trend/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyTrend<
        T extends Prisma.trendFindManyArgs,
        R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/trend/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countTrend<T extends Prisma.trendCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.trendCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/trend/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountTrend<
        T extends Prisma.trendFindManyArgs,
        R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.trend.findMany(args, options),
          ctx.trend.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstTrend<
        T extends Prisma.trendFindFirstArgs,
        R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.trendFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/trend/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.user = {
      create: async function createUser<
        T extends Prisma.userCreateArgs,
        R extends CheckSelect<T, user, Prisma.userGetPayload<T>>,
        U extends Omit<Prisma.userCreateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedCreateInput, 'video'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyUser<T extends Prisma.userCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateUser<
        T extends Prisma.userUpdateArgs,
        R extends Prisma.userGetPayload<T>,
        U extends Omit<Prisma.userUpdateArgs, 'data'> & {
          data: Omit<Prisma.userUncheckedUpdateInput, 'video'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyUser<T extends Prisma.userUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/user/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertUser<T extends Prisma.userUpsertArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/user/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteUser<T extends Prisma.userDeleteArgs, R extends Prisma.userGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyUser<T extends Prisma.userDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.userDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countUser<T extends Prisma.userCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/user/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountUser<
        T extends Prisma.userFindManyArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.user.findMany(args, options),
          ctx.user.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstUser<
        T extends Prisma.userFindFirstArgs,
        R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/user/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.video = {
      create: async function createVideo<
        T extends Prisma.videoCreateArgs,
        R extends CheckSelect<T, video, Prisma.videoGetPayload<T>>,
        U extends Omit<Prisma.videoCreateArgs, 'data'> & {
          data: Omit<Prisma.videoUncheckedCreateInput, 'hashtag' | 'video_trend'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyVideo<T extends Prisma.videoCreateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.videoCreateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/video/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateVideo<
        T extends Prisma.videoUpdateArgs,
        R extends Prisma.videoGetPayload<T>,
        U extends Omit<Prisma.videoUpdateArgs, 'data'> & {
          data: Omit<Prisma.videoUncheckedUpdateInput, 'hashtag' | 'video_trend'>;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyVideo<T extends Prisma.videoUpdateManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.videoUpdateManyArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/video/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertVideo<T extends Prisma.videoUpsertArgs, R extends Prisma.videoGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.videoUpsertArgs>,
        options?: RequestOptions,
      ) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteVideo<T extends Prisma.videoDeleteArgs, R extends Prisma.videoGetPayload<T>>(
        data: Prisma.SelectSubset<T, Prisma.videoDeleteArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/video/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyVideo<T extends Prisma.videoDeleteManyArgs, R extends Prisma.BatchPayload>(
        data: Prisma.SelectSubset<T, Prisma.videoDeleteManyArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/video/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyVideo<
        T extends Prisma.videoFindManyArgs,
        R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countVideo<T extends Prisma.videoCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.videoCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/video/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountVideo<
        T extends Prisma.videoFindManyArgs,
        R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.video.findMany(args, options),
          ctx.video.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstVideo<
        T extends Prisma.videoFindFirstArgs,
        R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.videoFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };

    this.video_trend = {
      create: async function createVideo_trend<
        T extends Prisma.video_trendCreateArgs,
        R extends CheckSelect<T, video_trend, Prisma.video_trendGetPayload<T>>,
        U extends Omit<Prisma.video_trendCreateArgs, 'data'> & {
          data: Prisma.video_trendUncheckedCreateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video_trend/create`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      createMany: async function createManyVideo_trend<
        T extends Prisma.video_trendCreateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.video_trendCreateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/video_trend/createMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      update: async function updateVideo_trend<
        T extends Prisma.video_trendUpdateArgs,
        R extends Prisma.video_trendGetPayload<T>,
        U extends Omit<Prisma.video_trendUpdateArgs, 'data'> & {
          data: Prisma.video_trendUncheckedUpdateInput;
        },
      >(data: Prisma.SelectSubset<U, T>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video_trend/update`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      updateMany: async function updateManyVideo_trend<
        T extends Prisma.video_trendUpdateManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.video_trendUpdateManyArgs>, options?: RequestOptions) {
        const response = await fetcher<R, false>(
          `${ctx.endpoint}/api/model/video_trend/updateMany`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'PUT',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          false,
        );
        return response;
      },
      upsert: async function upsertVideo_trend<
        T extends Prisma.video_trendUpsertArgs,
        R extends Prisma.video_trendGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.video_trendUpsertArgs>, options?: RequestOptions) {
        const response = await fetcher<R, true>(
          `${ctx.endpoint}/api/model/video_trend/upsert`,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'POST',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
            body: marshal(data),
          },
          fetch,
          true,
        );
        return response;
      },
      delete: async function deleteVideo_trend<
        T extends Prisma.video_trendDeleteArgs,
        R extends Prisma.video_trendGetPayload<T>,
      >(data: Prisma.SelectSubset<T, Prisma.video_trendDeleteArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video_trend/delete`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, true>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          true,
        );
        return response;
      },
      deleteMany: async function deleteManyVideo_trend<
        T extends Prisma.video_trendDeleteManyArgs,
        R extends Prisma.BatchPayload,
      >(data: Prisma.SelectSubset<T, Prisma.video_trendDeleteManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video_trend/deleteMany`;
        const reqUrl = makeUrl(url, data);
        const response = await fetcher<R, false>(
          reqUrl,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'DELETE',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findMany: async function findManyVideo_trend<
        T extends Prisma.video_trendFindManyArgs,
        R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[],
      >(args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video_trend/findMany`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      count: async function countVideo_trend<T extends Prisma.video_trendCountArgs, R extends number>(
        args?: Prisma.SelectSubset<T, Prisma.video_trendCountArgs>,
        options?: RequestOptions,
      ) {
        const url = `${ctx.endpoint}/api/model/video_trend/count`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
      findManyWithCount: async function findManyWithCountVideo_trend<
        T extends Prisma.video_trendFindManyArgs,
        R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[],
        C extends number,
      >(args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>, options?: RequestOptions) {
        const { distinct, orderBy, where } = args || {};
        const [data, count] = await Promise.all([
          ctx.video_trend.findMany(args, options),
          ctx.video_trend.count(
            {
              orderBy,
              where,
            },
            options,
          ),
        ]);
        return { data, count } as { data: R; count: C };
      },
      findFirst: async function findFirstVideo_trend<
        T extends Prisma.video_trendFindFirstArgs,
        R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>,
      >(args?: Prisma.SelectSubset<T, Prisma.video_trendFindFirstArgs>, options?: RequestOptions) {
        const url = `${ctx.endpoint}/api/model/video_trend/findFirst`;
        const urlWithArgs = makeUrl(url, args);
        const response = await fetcher<R, false>(
          urlWithArgs,
          {
            ...ctx?.baseOptions,
            ...options,
            method: 'GET',
            headers: {
              ...ctx?.baseOptions?.headers,
              ...options?.headers,
              'content-type': 'application/json',
            },
          },
          fetch,
          false,
        );
        return response;
      },
    };
  }
}
