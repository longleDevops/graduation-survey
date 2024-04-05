import { ProgressBar } from "./progress-bar"
import { Menu } from "./menu"

export const Survey = () => {
  return (
    <div className="flex justify-between p-6 border border-muted-foreground/10 mt-8 rounded-xl shadow-lg">
      <div className="">
        <p>Post Career Survey 2024</p>
        <p className="text-muted-foreground text-sm">English | 20 questions</p>
      </div>
      <div className="flex gap-2 items-center">
        <div className="w-[40px] h-[40px] flex justify-center items-center bg-yellow-400 rounded-xl p-3 text-xs text-white font-semibold">AM</div>
        <p className="text-sm text-muted-foreground">Angela</p>
      </div>
      <ProgressBar />
      <Menu />
    </div>
  )
}