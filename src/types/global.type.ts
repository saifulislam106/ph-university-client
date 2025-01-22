import { BaseQueryApi } from '@reduxjs/toolkit/query/react';
export type TError = {
  data: {
    message: string;
    stack: string;
    success: boolean;
  };
  status: number;
};

export type TMeta = {
  limit: number;
  page: number;
  total: number;
  totalPage: number;
};

export type TResponse<T> = {
  data?: T;
  error?: TError;
  meta?:TMeta;
  message:string;
  success:boolean
};

export type TResponseRedux<T> = TResponse<T> & BaseQueryApi