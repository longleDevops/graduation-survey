import { Progress } from "@/components/ui/progress"

export const ProgressBar = () => {
  return (
    <div className="w-[150px] my-auto">
      <div className="text-xs text-muted-foreground ml-auto w-full flex justify-end text-[#5f0aef]">
        5/10
      </div>
      <Progress
        className="w-full h-[6px] "
        value={33}
      />
    </div>

  )
}