"use client"

import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { BreadcrumbNav } from "@/components/layout/breadcrumb-nav"
import { useSidebarState } from "@/context/tab-context"

export function AppHeader() {
  const { toggle } = useSidebarState()

  return (
    <header className="flex h-14 shrink-0 items-center gap-2 border-b px-4">
      <Button
        variant="ghost"
        size="icon"
        onClick={toggle}
        className="-ml-1"
        aria-label="사이드바 토글"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <Separator orientation="vertical" className="h-4" />
      <BreadcrumbNav />
      <div className="flex flex-1 items-center justify-end gap-2">
        <ThemeToggle />
      </div>
    </header>
  )
}
