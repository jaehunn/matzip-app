import {UseMutationOptions, UseQueryOptions, QueryKey} from '@tanstack/react-query';

type CustomError = {
  statusCode: string;
  message: string;
  error: string;
};

export type UseMutationCustomOptions<TData = unknown, TVariables = unknown> = Omit<
  UseMutationOptions<TData, CustomError, TVariables>,
  'mutationFn'
>;

export type UseQueryCustomOptions<TQueryFnData = unknown, TData = TQueryFnData> = Omit<
  UseQueryOptions<TQueryFnData, CustomError, TData, QueryKey>,
  'queryKey'
>;
