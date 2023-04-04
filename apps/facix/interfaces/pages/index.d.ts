import type { NextComponentType, NextPage, NextPageContext } from "next";
import type { FC, ReactNode } from "react";

export interface PageProps {
  children: ReactNode;
}

export interface NextPages {
  Component?: NextComponentType<NextPageContext, any, any>;
  children?: ReactNode;
}

export type NextPageProps<T = {}> = NextPage<PageProps & T> & {
  Layout: FC<NextPages>;
};
