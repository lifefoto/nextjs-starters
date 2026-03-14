"use client"

import { createContext, useCallback, useContext, useState } from "react"

/** 멀티탭 단일 탭 */
export interface Tab {
  /** 고유 식별자 (URL 기반) */
  id: string
  /** 탭에 표시될 라벨 */
  label: string
  /** 탭 클릭 시 이동할 URL */
  url: string
}

/** TabContext 상태 & 액션 */
export interface TabContextValue {
  tabs: Tab[]
  activeTabId: string | null
  openTab: (tab: Tab) => void
  closeTab: (id: string) => void
  setActiveTabId: (id: string) => void
  closeOtherTabs: (id: string) => void
  closeLeftTabs: (id: string) => void
  closeRightTabs: (id: string) => void
}

/** Sidebar 열림/닫힘 상태 */
export interface SidebarStateContextValue {
  isOpen: boolean
  toggle: () => void
  open: () => void
  close: () => void
}

// TabContext
const TabContext = createContext<TabContextValue | null>(null)

export function TabProvider({ children }: { children: React.ReactNode }) {
  const [tabs, setTabs] = useState<Tab[]>([])
  const [activeTabId, setActiveTabId] = useState<string | null>(null)

  const openTab = useCallback((tab: Tab) => {
    setTabs(prev => {
      if (prev.find(t => t.id === tab.id)) return prev
      return [...prev, tab]
    })
    setActiveTabId(tab.id)
  }, [])

  const closeTab = useCallback((id: string) => {
    setTabs(prev => {
      const idx = prev.findIndex(t => t.id === id)
      const next = prev.filter(t => t.id !== id)
      if (activeTabId === id) {
        const nextTab = next[idx] ?? next[idx - 1] ?? null
        setActiveTabId(nextTab?.id ?? null)
      }
      return next
    })
  }, [activeTabId])

  /** 지정 탭만 남기고 나머지 모두 제거 */
  const closeOtherTabs = useCallback((id: string) => {
    setTabs(prev => prev.filter(t => t.id === id))
    setActiveTabId(id)
  }, [])

  /** 지정 탭 기준 왼쪽 탭 모두 제거 */
  const closeLeftTabs = useCallback((id: string) => {
    setTabs(prev => {
      const idx = prev.findIndex(t => t.id === id)
      const next = prev.slice(idx)
      if (activeTabId && !next.find(t => t.id === activeTabId)) {
        setActiveTabId(id)
      }
      return next
    })
  }, [activeTabId])

  /** 지정 탭 기준 오른쪽 탭 모두 제거 */
  const closeRightTabs = useCallback((id: string) => {
    setTabs(prev => {
      const idx = prev.findIndex(t => t.id === id)
      const next = prev.slice(0, idx + 1)
      if (activeTabId && !next.find(t => t.id === activeTabId)) {
        setActiveTabId(id)
      }
      return next
    })
  }, [activeTabId])

  return (
    <TabContext.Provider value={{
      tabs, activeTabId, openTab, closeTab, setActiveTabId,
      closeOtherTabs, closeLeftTabs, closeRightTabs
    }}>
      {children}
    </TabContext.Provider>
  )
}

export function useTab(): TabContextValue {
  const ctx = useContext(TabContext)
  if (!ctx) throw new Error("useTab must be used within TabProvider")
  return ctx
}

// SidebarStateContext
const SidebarStateContext = createContext<SidebarStateContextValue | null>(null)

export function SidebarStateProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true)
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])
  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])

  return (
    <SidebarStateContext.Provider value={{ isOpen, toggle, open, close }}>
      {children}
    </SidebarStateContext.Provider>
  )
}

export function useSidebarState(): SidebarStateContextValue {
  const ctx = useContext(SidebarStateContext)
  if (!ctx) throw new Error("useSidebarState must be used within SidebarStateProvider")
  return ctx
}
