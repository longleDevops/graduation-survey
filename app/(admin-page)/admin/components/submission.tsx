import { cn } from "@/lib/utils"

const items = [
  {
    name: "Kelvin",
    survey: "Post graduation survey",
    status: "completed",
    date: "04/10/2024"
  },
  {
    name: "Kelvin J",
    survey: "Post graduation survey",
    status: "completed",
    date: "04/10/2024"
  }
]

export const Submission = () => {
  return (
    <div>
      <p>Recent submissions</p>
      <div className="border rounded-lg">
        <div className="p-4">
          {items.map((item, index) => (
            <div
              key={item.name}
              className={cn("flex  gap-4 p-4 justify-between", index !== items.length - 1 && "border-b")}>
              <p className="w-[120px] -mr-4">{item.name}</p>
              <p>{item.survey}</p>
              <p>{item.status}</p>
              <p>{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>

  )
}