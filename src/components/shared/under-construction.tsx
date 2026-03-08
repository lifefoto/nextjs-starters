import { Construction } from "lucide-react"

interface UnderConstructionProps {
  title?: string
  description?: string
}

export function UnderConstruction({
  title = "구현중입니다",
  description = "이 페이지는 현재 개발 중입니다.",
}: UnderConstructionProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] gap-4 text-muted-foreground">
      <Construction className="h-16 w-16" />
      <div className="text-center">
        <h2 className="text-xl font-semibold text-foreground">{title}</h2>
        <p className="text-sm mt-1">{description}</p>
      </div>
    </div>
  )
}
