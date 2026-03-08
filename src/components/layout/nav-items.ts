import {
  LayoutDashboard,
  Megaphone,
  FolderOpen,
  Database,
  Settings,
  ScrollText,
  Component,
} from "lucide-react"

/** 서브 메뉴 아이템 */
export interface NavSubItem {
  title: string
  url: string
}

/** 메인 메뉴 아이템 */
export interface NavItem {
  title: string
  url: string
  icon: React.ComponentType<{ className?: string }>
  items?: NavSubItem[]
}

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "공지사항",
    url: "/notice",
    icon: Megaphone,
  },
  {
    title: "자료실",
    url: "#",
    icon: FolderOpen,
    items: [
      { title: "문서 자료", url: "/archive/documents" },
      { title: "표준 절차", url: "/archive/procedures" },
    ],
  },
  {
    title: "기준 정보",
    url: "#",
    icon: Database,
    items: [
      { title: "시스템 코드", url: "/master/system-code" },
      { title: "사용자 코드", url: "/master/user-code" },
      { title: "계층형 코드그룹", url: "/master/code-group" },
      { title: "계층형 코드항목", url: "/master/code-item" },
      { title: "측정 단위", url: "/master/unit" },
    ],
  },
  {
    title: "시스템 관리",
    url: "#",
    icon: Settings,
    items: [
      { title: "부서 관리", url: "/system/department" },
      { title: "사용자 관리", url: "/system/user" },
      { title: "사용자 그룹", url: "/system/user-group" },
      { title: "메뉴 권한", url: "/system/menu-auth" },
      { title: "메뉴 관리", url: "/system/menu" },
    ],
  },
  {
    title: "로그 관리",
    url: "#",
    icon: ScrollText,
    items: [
      { title: "접속 로그", url: "/log/access" },
      { title: "메뉴 로그", url: "/log/menu-log" },
      { title: "시스템 로그", url: "/log/system-log" },
    ],
  },
  {
    title: "컴포넌트 데모",
    url: "#",
    icon: Component,
    items: [
      { title: "디자인 시스템", url: "/demo/design-system" },
    ],
  },
]
