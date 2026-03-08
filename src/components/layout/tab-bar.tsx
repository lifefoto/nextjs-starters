"use client"

import { useRouter } from "next/navigation"
import { X } from "lucide-react"
import { useTab } from "@/context/tab-context"

export function TabBar() {
  const { tabs, activeTabId, setActiveTabId, closeTab } = useTab()
  const router = useRouter()

  if (tabs.length === 0) return null

  function handleTabClick(id: string, url: string) {
    setActiveTabId(id)
    router.push(url)
  }

  function handleTabClose(e: React.MouseEvent, id: string) {
    e.stopPropagation()
    closeTab(id)
  }

  return (
    <div className="flex border-b overflow-x-auto flex-shrink-0" style={{ paddingTop: "2px" }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => handleTabClick(tab.id, tab.url)}
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
      ))}
    </div>
  )
}
