import { role } from "@/constants";
import { AdminSidebar } from "@/routes/sidebar/AdminSidebar";
import { AgentSidebar } from "@/routes/sidebar/AgentSidebar";
import { UserSidebar } from "@/routes/sidebar/UserSidebar";
import type { TRole } from "@/types";

export const getRoleSpecificSidebar = (userRole: TRole) => {
  switch (userRole) {
    case role.user:
      return [...UserSidebar];
    case role.agent:
      return [...AgentSidebar];
    case role.admin:
      return [...AdminSidebar];
    case role.superAdmin:
      return [...AdminSidebar];

    default:
      return [];
  }
};