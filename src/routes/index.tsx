import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter } from "react-router";
import { UserSidebar } from "./sidebar/UserSidebar";
import { AgentSidebar } from "./sidebar/AgentSidebar";
import Analytics from "@/pages/admin/Analytics";
import { checkAuth } from "@/utils/checkAuth";
import { role } from "@/constants";
import type { TRole } from "@/types";
import { UserAgentCommonSidebar } from "./sidebar/UserAgentSidebar";

export const router = createBrowserRouter([
  {
    Component: App,
    path: "/",
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },

  {
    Component: checkAuth(DashboardLayout, ...(Object.values(role) as [TRole])),
    path: "/my-wallet",
    children: [
      ...generateRoutes(
        ...UserAgentCommonSidebar,
        ...UserSidebar,
        ...AgentSidebar
      ),
    ],
  },

  {
    Component: DashboardLayout,
    path: "/dashboard",
    children: [{ index: true, Component: Analytics }],
  },
]);
