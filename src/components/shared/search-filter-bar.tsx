"use client"

import { useState } from "react"
import { ChevronUp, ChevronDown, Search, RotateCcw } from "lucide-react"
import { Button } from "@/components/ui/button"

interface SearchFilterBarProps {
  /** 검색 실행 콜백 */
  onSearch?: () => void
  /** 초기화 콜백 */
  onReset?: () => void
  /** 기본 펼침 상태 (default: true) */
  defaultExpanded?: boolean
  /** 검색조건 입력 요소들 (슬롯) */
  children?: React.ReactNode
}

/** 검색조건 영역 공통 컴포넌트 */
export function SearchFilterBar({
  onSearch,
  onReset,
  defaultExpanded = true,
  children,
}: SearchFilterBarProps) {
  const [expanded, setExpanded] = useState(defaultExpanded)

  return (
    <div className="border rounded-md bg-muted/30 mb-4">
      <div
        className="flex items-center justify-between px-4 py-2 cursor-pointer"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <span className="text-sm font-medium text-muted-foreground">
          검색조건
        </span>
        {expanded ? (
          <ChevronUp className="h-4 w-4 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        )}
      </div>
      {expanded && (
        <div className="px-4 pb-3">
          {children && (
            <div className="flex flex-wrap gap-3 items-end">{children}</div>
          )}
          <div className="flex justify-end gap-2 mt-3">
            {onReset && (
              <Button variant="outline" size="sm" onClick={onReset}>
                <RotateCcw className="h-3.5 w-3.5 mr-1" />
                초기화
              </Button>
            )}
            <Button variant="default" size="sm" onClick={onSearch}>
              <Search className="h-3.5 w-3.5 mr-1" />
              검색
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
