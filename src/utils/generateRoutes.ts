/* eslint-disable @typescript-eslint/no-explicit-any */
import type { ISidebarItem } from "@/types";

export const generateRoutes = (...sidebarData: ISidebarItem[]) => {
  return sidebarData.map((item: any) => ({
    path: item.url,
    Component: item.Component,
  }));
};