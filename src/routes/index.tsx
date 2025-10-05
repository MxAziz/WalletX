import App from "@/App";
import DashboardLayout from "@/components/layout/DashboardLayout";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import { generateRoutes } from "@/utils/generateRoutes";
import { createBrowserRouter, Navigate } from "react-router";
import { UserSidebar } from "./sidebar/UserSidebar";
import { AgentSidebar } from "./sidebar/AgentSidebar";
import { checkAuth } from "@/utils/checkAuth";
import { role } from "@/constants";
import type { TRole } from "@/types";
import { UserAgentCommonSidebar } from "./sidebar/UserAgentSidebar";
import { AdminSidebar } from "./sidebar/AdminSidebar";
import SingleViewModal from "@/components/modules/admin/singleView/SingleWallet.tsx";

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
    Component: checkAuth(DashboardLayout, ...(Object.values(role) as [TRole])),
    path: "/dashboard",
    children: [
      { index: true, element: <Navigate to="/dashboard/overview" /> },
      ...generateRoutes(...AdminSidebar),
      { Component: SingleViewModal, path: "/dashboard/agents/:id" },
      { Component: SingleViewModal, path: "/dashboard/wallets/:id" },
      { Component: SingleViewModal, path: "/dashboard/transactions/:id" },
    ],
  },
]);
