import {UseMutationOptions} from '@tanstack/react-query';

type CustomError = {
  statusCode: string;
  message: string;
  error: string;
};

export type UseMutationCustomOptions<
  TData = unknown,
  TVariables = unknown,
> = Omit<UseMutationOptions<TData, CustomError, TVariables>, 'mutationFn'>;
