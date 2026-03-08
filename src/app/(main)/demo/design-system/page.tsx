"use client"

import { useState } from "react"
import { toast } from "sonner"
import { PageHeader } from "@/components/shared/page-header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { AlertCircle, Info } from "lucide-react"
import { Input } from "@/components/ui/input"
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  ResponsiveContainer,
} from "recharts"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold mb-4 pb-2 border-b">{title}</h2>
      <div className="flex flex-wrap gap-3">{children}</div>
    </section>
  )
}

const chartData = [
  { name: "1월", value: 400 },
  { name: "2월", value: 300 },
  { name: "3월", value: 600 },
  { name: "4월", value: 800 },
  { name: "5월", value: 500 },
  { name: "6월", value: 900 },
]

export default function DesignSystemPage() {
  const [notifyChecked, setNotifyChecked] = useState(true)

  return (
    <div>
      <PageHeader
        title="디자인 시스템"
        description="ShadcnUI 컴포넌트 쇼케이스"
      />

      <div className="space-y-10">
        {/* Buttons */}
        <Section title="Buttons - Variants">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </Section>

        <Section title="Buttons - Sizes">
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="icon" aria-label="icon">
            <Info className="h-4 w-4" />
          </Button>
        </Section>

        {/* Badge */}
        <Section title="Badge">
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </Section>

        {/* Card */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Card</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>카드 제목</CardTitle>
                <CardDescription>카드 설명 텍스트입니다.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">카드 본문 내용이 여기에 들어갑니다.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm">액션</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>통계 카드</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold">1,234</div>
                <p className="text-xs text-muted-foreground mt-1">+12% 전월 대비</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Alert */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Alert</h2>
          <div className="space-y-3">
            <Alert>
              <Info className="h-4 w-4" />
              <AlertTitle>안내</AlertTitle>
              <AlertDescription>
                기본 알림 메시지입니다. 사용자에게 유용한 정보를 제공합니다.
              </AlertDescription>
            </Alert>
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>오류</AlertTitle>
              <AlertDescription>
                오류가 발생했습니다. 다시 시도해 주세요.
              </AlertDescription>
            </Alert>
          </div>
        </section>

        {/* Skeleton */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Skeleton</h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-2">카드형</p>
              <Skeleton className="h-32 w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-1/2" />
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-2">목록형</p>
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground mb-2">프로필형</p>
              <div className="flex items-center gap-3">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-1 flex-1">
                  <Skeleton className="h-4 w-2/3" />
                  <Skeleton className="h-3 w-1/2" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Separator */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Separator</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">가로 구분선</p>
              <Separator />
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">텍스트 + 구분선</p>
              <div className="flex items-center gap-4">
                <Separator className="flex-1" />
                <span className="text-xs text-muted-foreground">OR</span>
                <Separator className="flex-1" />
              </div>
            </div>
          </div>
        </section>

        {/* Avatar */}
        <Section title="Avatar">
          <Avatar className="h-8 w-8">
            <AvatarFallback className="text-xs">SM</AvatarFallback>
          </Avatar>
          <Avatar className="h-10 w-10">
            <AvatarFallback>MD</AvatarFallback>
          </Avatar>
          <Avatar className="h-12 w-12">
            <AvatarFallback className="text-lg">LG</AvatarFallback>
          </Avatar>
          <Avatar className="h-16 w-16">
            <AvatarFallback className="text-xl">XL</AvatarFallback>
          </Avatar>
        </Section>

        {/* Tooltip */}
        <Section title="Tooltip">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">위쪽</Button>
            </TooltipTrigger>
            <TooltipContent side="top">위쪽 툴팁</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">아래쪽</Button>
            </TooltipTrigger>
            <TooltipContent side="bottom">아래쪽 툴팁</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">왼쪽</Button>
            </TooltipTrigger>
            <TooltipContent side="left">왼쪽 툴팁</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="sm">오른쪽</Button>
            </TooltipTrigger>
            <TooltipContent side="right">오른쪽 툴팁</TooltipContent>
          </Tooltip>
        </Section>

        {/* Toast */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Toast / Sonner</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              onClick={() => toast.success("저장되었습니다.", { description: "변경사항이 성공적으로 저장되었습니다." })}
            >
              성공 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.error("오류가 발생했습니다.", { description: "다시 시도해 주세요." })}
            >
              오류 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.info("새로운 업데이트가 있습니다.")}
            >
              정보 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() => toast.warning("주의가 필요합니다.")}
            >
              경고 Toast
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                toast.promise(new Promise((res) => setTimeout(res, 2000)), {
                  loading: "처리 중...",
                  success: "완료되었습니다!",
                  error: "실패했습니다.",
                })
              }
            >
              Promise Toast
            </Button>
          </div>
        </section>

        {/* Input */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Input</h2>
          <div className="grid gap-3 max-w-sm">
            <Input placeholder="기본 입력" />
            <Input placeholder="비활성화" disabled />
            <Input type="email" placeholder="이메일 주소" />
            <Input type="password" placeholder="비밀번호" />
          </div>
        </section>

        {/* Sheet */}
        <Section title="Sheet">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">왼쪽 패널 열기</Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>왼쪽 패널</SheetTitle>
                <SheetDescription>Sheet 컴포넌트 - side="left" 예시</SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-muted-foreground">패널 내용이 여기에 들어갑니다.</div>
            </SheetContent>
          </Sheet>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline">오른쪽 패널 열기</Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>오른쪽 패널</SheetTitle>
                <SheetDescription>Sheet 컴포넌트 - side="right" 예시</SheetDescription>
              </SheetHeader>
              <div className="py-4 text-sm text-muted-foreground">패널 내용이 여기에 들어갑니다.</div>
            </SheetContent>
          </Sheet>
        </Section>

        {/* Dropdown Menu */}
        <Section title="Dropdown Menu">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">메뉴 열기</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-48">
              <DropdownMenuLabel>내 계정</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>프로필</DropdownMenuItem>
              <DropdownMenuItem>설정</DropdownMenuItem>
              <DropdownMenuItem disabled>비활성 항목</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked={notifyChecked} onCheckedChange={setNotifyChecked}>
                알림 받기
              </DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="text-destructive">로그아웃</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </Section>

        {/* Breadcrumb */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Breadcrumb</h2>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground mb-2">1단계</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbPage>대시보드</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">2단계</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">자료실</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>문서 자료</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">3단계 (생략 포함)</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="#">홈</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbEllipsis />
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>현재 페이지</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </section>

        {/* Chart */}
        <section>
          <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Chart (recharts)</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Bar Chart</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Bar dataKey="value" fill="var(--color-chart-1)" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Line Chart</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Line type="monotone" dataKey="value" stroke="var(--color-chart-2)" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground mb-2">Area Chart</p>
              <div className="h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />
                    <RechartsTooltip />
                    <Area type="monotone" dataKey="value" stroke="var(--color-chart-3)" fill="var(--color-chart-3)" fillOpacity={0.2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
