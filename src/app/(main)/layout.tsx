"use client"

import { TabProvider, SidebarStateProvider, useSidebarState } from "@/context/tab-context"
import { AppSidebar } from "@/components/layout/app-sidebar"
import { AppHeader } from "@/components/layout/app-header"
import { TabBar } from "@/components/layout/tab-bar"

function MainLayoutInner({ children }: { children: React.ReactNode }) {
  const { isOpen } = useSidebarState()

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Left: Sidebar */}
      <aside
        className={[
          "flex-shrink-0 overflow-hidden transition-all duration-200",
          isOpen ? "w-60" : "w-0",
        ].join(" ")}
      >
        <AppSidebar />
      </aside>

      {/* Right: Main-Content */}
      <div className="flex flex-col flex-1 overflow-hidden border-l">
        <AppHeader />
        <TabBar />
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  )
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <TabProvider>
      <SidebarStateProvider>
        <MainLayoutInner>{children}</MainLayoutInner>
      </SidebarStateProvider>
    </TabProvider>
  )
}
