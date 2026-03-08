"use client"

import { usePathname } from "next/navigation"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { navItems } from "@/components/layout/nav-items"

/** pathname에서 브레드크럼 경로를 탐색하여 반환 */
function resolveBreadcrumb(pathname: string): { parent: string | null; current: string } {
  for (const item of navItems) {
    if (item.items) {
      const sub = item.items.find(s => s.url === pathname)
      if (sub) return { parent: item.title, current: sub.title }
    }
    if (item.url === pathname) {
      return { parent: null, current: item.title }
    }
  }
  return { parent: null, current: pathname }
}

export function BreadcrumbNav() {
  const pathname = usePathname()
  const { parent, current } = resolveBreadcrumb(pathname)

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parent && (
          <>
            <BreadcrumbItem>
              <span className="text-muted-foreground text-sm">{parent}</span>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        )}
        <BreadcrumbItem>
          <BreadcrumbPage>{current}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  )
}
