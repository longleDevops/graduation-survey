import { cn } from "@/lib/utils"

type props = {
  className?: string
}

export const Card = ({ className }: props) => {
  return (
    <div className="w-[200px] h-[280px] rounded-xl bg-white relative shadow-lg">
      {className &&
        <div className={cn("absolute w-full h-full rounded-xl", className)}>

        </div>
      }
      <div className="bg-yellow-400 h-[40%] rounded-t-xl">

      </div>
      <div className="p-3 space-y-3">
        <h1 className="text-xs text-blue-500">Survey</h1>
        <h2 className="text-sm">Take this survey to get your post-graduation career advice!</h2>
        <button className="bg-[#ebf2fd] text-[#4588ed] p-2 w-full rounded-lg text-xs">
          {!className ? "Take survey" : "Completed"}
        </button>
      </div>
    </div>
  )
}