import { AlertCircle, DollarSign, FolderOpen, Users } from "lucide-react"
import { PageHeader } from "@/components/shared/page-header"
import { StatsCard } from "@/features/dashboard/components/stats-card"
import { ChartCard } from "@/features/dashboard/components/chart-card"

const monthlyRevenue = [
  { month: "1월", revenue: 4000 },
  { month: "2월", revenue: 3000 },
  { month: "3월", revenue: 5000 },
  { month: "4월", revenue: 4500 },
  { month: "5월", revenue: 6000 },
  { month: "6월", revenue: 5500 },
  { month: "7월", revenue: 7000 },
  { month: "8월", revenue: 6500 },
  { month: "9월", revenue: 8000 },
  { month: "10월", revenue: 7500 },
  { month: "11월", revenue: 9000 },
  { month: "12월", revenue: 12500 },
]

const userGrowth = [
  { month: "1월", users: 800 },
  { month: "2월", users: 850 },
  { month: "3월", users: 920 },
  { month: "4월", users: 980 },
  { month: "5월", users: 1050 },
  { month: "6월", users: 1100 },
  { month: "7월", users: 1150 },
  { month: "8월", users: 1180 },
  { month: "9월", users: 1200 },
  { month: "10월", users: 1220 },
  { month: "11월", users: 1230 },
  { month: "12월", users: 1234 },
]

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="대시보드" description="오늘의 현황을 확인하세요" />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatsCard
          title="총 사용자"
          value="1,234"
          icon={Users}
          trend="up"
          trendValue="+12%"
          description="지난 달 대비"
        />
        <StatsCard
          title="월 매출"
          value="₩12.5M"
          icon={DollarSign}
          trend="up"
          trendValue="+8%"
          description="지난 달 대비"
        />
        <StatsCard
          title="활성 프로젝트"
          value="24"
          icon={FolderOpen}
          trend="neutral"
          description="변동 없음"
        />
        <StatsCard
          title="처리 중인 티켓"
          value="8"
          icon={AlertCircle}
          trend="down"
          trendValue="-3"
          description="지난 주 대비"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <ChartCard
          title="월별 매출"
          description="2026년 월별 매출 현황"
          type="bar"
          data={monthlyRevenue}
          dataKey="revenue"
          xAxisKey="month"
        />
        <ChartCard
          title="사용자 증가"
          description="2026년 누적 사용자 수"
          type="line"
          data={userGrowth}
          dataKey="users"
          xAxisKey="month"
          color="var(--color-chart-2)"
        />
      </div>
    </div>
  )
}
