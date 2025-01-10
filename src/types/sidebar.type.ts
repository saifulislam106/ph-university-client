import { ReactNode } from "react";

export type TSidebarItem = {
  key: string;
  label: ReactNode;
  children?: TSidebarItem[];
};

export type TUserRoute = {
  name: string;
  path?: string;
  element?: ReactNode;
  children?: TUserRoute[];
};

export type TRoute = {
  path: string;
  element: ReactNode;
};
