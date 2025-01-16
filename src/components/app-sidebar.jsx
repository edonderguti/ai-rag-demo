"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { PlusIcon } from "@/components/icons";
import { SidebarHistory } from "@/components/sidebar-history";
import { SidebarUserNav } from "@/components/sidebar-user-nav";
import { Button } from "@/components/ui/button";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  useSidebar,
} from "@/components/ui/sidebar";
import { BetterTooltip } from "@/components/ui/tooltip";

export function AppSidebar({ user }) {
  const router = useRouter();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar className="group-data-[side=left] bg-black">
      <SidebarHeader>
        <SidebarMenu>
          <div className="flex flex-row items-center justify-between">
            <Link
              href="/"
              onClick={() => {
                setOpenMobile(false);
              }}
              className="flex flex-row items-center gap-3"
            >
              <span className="cursor-pointer rounded-md px-2 text-lg font-semibold hover:bg-muted">
                Chatbot
              </span>
            </Link>
            <BetterTooltip content="New Chat" align="start">
              <Button
                variant="ghost"
                type="button"
                className="h-fit p-2"
                onClick={() => {
                  setOpenMobile(false);
                  router.push("/");
                  router.refresh();
                }}
              >
                <PlusIcon />
              </Button>
            </BetterTooltip>
          </div>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup className="-mx-2">
          <SidebarHistory user={user} />
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="-mx-2 gap-0">
        {user && (
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarUserNav user={user} />
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
