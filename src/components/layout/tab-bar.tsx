"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { useTab } from "@/context/tab-context"
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuSeparator,
  ContextMenuTrigger,
} from "@/components/ui/context-menu"

export function TabBar() {
  const {
    tabs, activeTabId, setActiveTabId,
    closeTab, closeOtherTabs, closeLeftTabs, closeRightTabs
  } = useTab()
  const router = useRouter()

  /** 활성 탭 변경 시 라우터 동기화 (일괄 닫기 포함) */
  useEffect(() => {
    if (!activeTabId) return
    const activeTab = tabs.find(t => t.id === activeTabId)
    if (activeTab) {
      router.push(activeTab.url)
    }
  }, [activeTabId, tabs, router])

  if (tabs.length === 0) return null

  function handleTabClick(id: string) {
    setActiveTabId(id)
  }

  function handleTabClose(e: React.MouseEvent, id: string) {
    e.stopPropagation()
    closeTab(id)
  }

  return (
    <div className="flex border-b overflow-x-auto flex-shrink-0" style={{ paddingTop: "2px" }}>
      {tabs.map((tab, index) => (
        <ContextMenu key={tab.id}>
          <ContextMenuTrigger asChild>
            <button
              onClick={() => handleTabClick(tab.id)}
              className={[
                "flex items-center gap-1 px-3 py-1.5 text-sm border-r flex-shrink-0 transition-colors",
                tab.id === activeTabId
                  ? "bg-background text-foreground font-medium border-b-2 border-b-primary"
                  : "bg-muted text-muted-foreground hover:bg-muted/80",
              ].join(" ")}
            >
              <span>{tab.label}</span>
              <span
                role="button"
                tabIndex={0}
                onClick={(e) => handleTabClose(e, tab.id)}
                onKeyDown={(e) => { if (e.key === "Enter") handleTabClose(e as unknown as React.MouseEvent, tab.id) }}
                className="ml-1 rounded-sm hover:bg-foreground/20 p-0.5"
                aria-label={`${tab.label} 탭 닫기`}
              >
                <X className="h-3 w-3" />
              </span>
            </button>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem onClick={() => closeTab(tab.id)}>
              현재 탭 닫기
            </ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuItem
              onClick={() => closeOtherTabs(tab.id)}
              disabled={tabs.length <= 1}
            >
              다른 탭 닫기
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => closeLeftTabs(tab.id)}
              disabled={index === 0}
            >
              왼쪽 탭 닫기
            </ContextMenuItem>
            <ContextMenuItem
              onClick={() => closeRightTabs(tab.id)}
              disabled={index === tabs.length - 1}
            >
              오른쪽 탭 닫기
            </ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      ))}
    </div>
  )
}
