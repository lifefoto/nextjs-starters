"use client"

import { usePathname, useRouter } from "next/navigation"
import { Building2, ChevronRight } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@radix-ui/react-collapsible"
import { navItems } from "./nav-items"
import { UserMenu } from "@/components/shared/user-menu"
import { useTab } from "@/context/tab-context"

export function AppSidebar() {
  const { openTab } = useTab()
  const pathname = usePathname()
  const router = useRouter()

  /** 탭 열기 + 페이지 이동 */
  function handleNavClick(title: string, url: string) {
    if (url === "#") return
    openTab({ id: url, label: title, url })
    router.push(url)
  }

  return (
    <div className="flex flex-col h-full bg-sidebar border-r">
      {/* App-Header */}
      <div className="h-14 flex items-center px-4 border-b gap-2 flex-shrink-0">
        <Building2 className="h-5 w-5 text-sidebar-foreground" />
        <span className="font-semibold text-sidebar-foreground">Biz Web App</span>
      </div>

      {/* Nav-Menu */}
      <nav className="flex-1 overflow-y-auto p-2">
        {navItems.map((item) => {
          if (item.items && item.items.length > 0) {
            const isGroupActive = item.items.some(sub => pathname.startsWith(sub.url))
            return (
              <Collapsible key={item.title} defaultOpen={isGroupActive}>
                <CollapsibleTrigger asChild>
                  <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-colors">
                    <item.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="flex-1 text-left">{item.title}</span>
                    <ChevronRight className="h-4 w-4 transition-transform duration-200 data-[state=open]:rotate-90" />
                  </button>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((sub) => (
                      <button
                        key={sub.url}
                        onClick={() => handleNavClick(sub.title, sub.url)}
                        className={[
                          "flex w-full items-center rounded-md px-3 py-1.5 text-sm transition-colors",
                          pathname === sub.url
                            ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                            : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                        ].join(" ")}
                      >
                        {sub.title}
                      </button>
                    ))}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            )
          }

          return (
            <button
              key={item.title}
              onClick={() => handleNavClick(item.title, item.url)}
              className={[
                "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
                pathname === item.url
                  ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                  : "text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              ].join(" ")}
            >
              <item.icon className="h-4 w-4 flex-shrink-0" />
              <span>{item.title}</span>
            </button>
          )
        })}
      </nav>

      {/* UserMenu - 하단 고정 */}
      <div className="border-t p-2 flex-shrink-0">
        <UserMenu />
      </div>
    </div>
  )
}
