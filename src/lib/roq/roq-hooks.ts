/* eslint-disable */
import useSWR from 'swr';
import type { Prisma } from './types';
import { DefaultArgs, GetFindResult } from './types/runtime/library';
import { useRoqClient } from './roq-client-provider';
import { SWRRequestOptions } from './roq-client';
import { RequestOptions } from './roq-baas-sdk';
import {
  FileCategoriesQuery,
  FileCategoriesQueryVariables,
  FileCategoryContentGroupQuery,
  FileCategoryContentGroupQueryVariables,
  FileCategoryContentGroupsQuery,
  FileCategoryContentGroupsQueryVariables,
  FileCategoryContentTypesQuery,
  FileCategoryContentTypesQueryVariables,
  FileCategoryQuery,
  FileCategoryQueryVariables,
  FileQuery,
  FileQueryVariables,
  FilesQuery,
  FilesQueryVariables,
  RoleQuery,
  RoleQueryVariables,
  RolesQuery,
  RolesQueryVariables,
  TenantQuery,
  TenantQueryVariables,
  UserInviteQuery,
  UserInviteQueryVariables,
  UserInvitesQuery,
  UserInvitesQueryVariables,
  UserProfileQuery,
  UserProfileQueryVariables,
  UserProfilesQuery,
  UserProfilesQueryVariables,
} from '@roq/client';

export function useHashtagFindMany<
  T extends Prisma.hashtagFindManyArgs,
  R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHashtagFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.hashtag.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHashtagCount<T extends Prisma.hashtagCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.hashtagCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHashtagCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.hashtag.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHashtagFindManyWithCount<
  T extends Prisma.hashtagFindManyArgs,
  R extends { data: GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.hashtagFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHashtagFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.hashtag.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useHashtagFindFirst<
  T extends Prisma.hashtagFindFirstArgs,
  R extends GetFindResult<Prisma.$hashtagPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.hashtagFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useHashtagFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.hashtag.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindMany<
  T extends Prisma.startupFindManyArgs,
  R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupCount<T extends Prisma.startupCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.startupCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindManyWithCount<
  T extends Prisma.startupFindManyArgs,
  R extends { data: GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useStartupFindFirst<
  T extends Prisma.startupFindFirstArgs,
  R extends GetFindResult<Prisma.$startupPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.startupFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useStartupFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.startup.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTrendFindMany<
  T extends Prisma.trendFindManyArgs,
  R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTrendFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.trend.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTrendCount<T extends Prisma.trendCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.trendCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTrendCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.trend.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTrendFindManyWithCount<
  T extends Prisma.trendFindManyArgs,
  R extends { data: GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.trendFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTrendFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.trend.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useTrendFindFirst<
  T extends Prisma.trendFindFirstArgs,
  R extends GetFindResult<Prisma.$trendPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.trendFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useTrendFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.trend.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindMany<
  T extends Prisma.userFindManyArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[],
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserCount<T extends Prisma.userCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.userCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindManyWithCount<
  T extends Prisma.userFindManyArgs,
  R extends { data: GetFindResult<Prisma.$userPayload<DefaultArgs>, T>[]; count: number },
>(args?: Prisma.SelectSubset<T, Prisma.userFindManyArgs>, options?: RequestOptions, swrOptions?: SWRRequestOptions<R>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useUserFindFirst<
  T extends Prisma.userFindFirstArgs,
  R extends GetFindResult<Prisma.$userPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.userFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useUserFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.user.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoFindMany<
  T extends Prisma.videoFindManyArgs,
  R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoCount<T extends Prisma.videoCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.videoCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoFindManyWithCount<
  T extends Prisma.videoFindManyArgs,
  R extends { data: GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.videoFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoFindFirst<
  T extends Prisma.videoFindFirstArgs,
  R extends GetFindResult<Prisma.$videoPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.videoFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoTrendFindMany<
  T extends Prisma.video_trendFindManyArgs,
  R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[],
>(
  args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoTrendFindMany', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video_trend.findMany(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoTrendCount<T extends Prisma.video_trendCountArgs, R extends number>(
  args?: Prisma.SelectSubset<T, Prisma.video_trendCountArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoTrendCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video_trend.count(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoTrendFindManyWithCount<
  T extends Prisma.video_trendFindManyArgs,
  R extends { data: GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>[]; count: number },
>(
  args?: Prisma.SelectSubset<T, Prisma.video_trendFindManyArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoTrendFindManyWithCount', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video_trend.findManyWithCount(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useVideoTrendFindFirst<
  T extends Prisma.video_trendFindFirstArgs,
  R extends GetFindResult<Prisma.$video_trendPayload<DefaultArgs>, T>,
>(
  args?: Prisma.SelectSubset<T, Prisma.video_trendFindFirstArgs>,
  options?: RequestOptions,
  swrOptions?: SWRRequestOptions<R>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useVideoTrendFindFirst', args || {}]);
  return useSWR<R, Error>(
    key,
    async () => {
      const result = await roq.video_trend.findFirst(args, options);
      return result as R;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfiles(
  args?: UserProfilesQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfilesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfiles', args || {}]);
  return useSWR<UserProfilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfiles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserProfile(
  args: UserProfileQueryVariables,
  swrOptions?: SWRRequestOptions<UserProfileQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserProfile', args || {}]);
  return useSWR<UserProfileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userProfile(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRoles(args?: RolesQueryVariables, swrOptions?: SWRRequestOptions<RolesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRoles', args || {}]);
  return useSWR<RolesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.roles(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformRole(args: RoleQueryVariables, swrOptions?: SWRRequestOptions<RoleQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformRole', args || {}]);
  return useSWR<RoleQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.role(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvites(
  args?: UserInvitesQueryVariables,
  swrOptions?: SWRRequestOptions<UserInvitesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvites', args || {}]);
  return useSWR<UserInvitesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvites(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformUserInvite(
  args: UserInviteQueryVariables,
  swrOptions?: SWRRequestOptions<UserInviteQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformUserInvite', args || {}]);
  return useSWR<UserInviteQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.userInvite(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFiles(args?: FilesQueryVariables, swrOptions?: SWRRequestOptions<FilesQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFiles', args || {}]);
  return useSWR<FilesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.files(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFile(args: FileQueryVariables, swrOptions?: SWRRequestOptions<FileQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFile', args || {}]);
  return useSWR<FileQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.file(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentTypes(
  args?: FileCategoryContentTypesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentTypesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentTypes', args || {}]);
  return useSWR<FileCategoryContentTypesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentTypes(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroup(
  args: FileCategoryContentGroupQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroup', args || {}]);
  return useSWR<FileCategoryContentGroupQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroup(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategoryContentGroups(
  args?: FileCategoryContentGroupsQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryContentGroupsQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategoryContentGroups', args || {}]);
  return useSWR<FileCategoryContentGroupsQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategoryContentGroups(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategories(
  args?: FileCategoriesQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoriesQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategories', args || {}]);
  return useSWR<FileCategoriesQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategories(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformFileCategory(
  args: FileCategoryQueryVariables,
  swrOptions?: SWRRequestOptions<FileCategoryQuery>,
) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformFileCategory', args || {}]);
  return useSWR<FileCategoryQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.fileCategory(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}

export function useRoqPlatformTenant(args: TenantQueryVariables, swrOptions?: SWRRequestOptions<TenantQuery>) {
  const roq = useRoqClient();
  const key = JSON.stringify(['useRoqPlatformTenant', args || {}]);
  return useSWR<TenantQuery, Error>(
    key,
    async () => {
      const result = await roq.roqPlatform.tenant(args);
      return result;
    },
    {
      ...swrOptions,
      fallbackData: swrOptions?.initialData ?? swrOptions?.fallbackData,
    },
  );
}
