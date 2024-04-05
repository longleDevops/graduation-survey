"use client"

import { Home, NotebookPen, SquareActivity, PieChart } from "lucide-react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/admin"
  },
  {
    name: "Survey",
    icon: NotebookPen,
    href: "/survey"
  },
  {
    name: "Activity",
    icon: SquareActivity,
    href: "/"
  },
  {
    name: "Reports",
    icon: PieChart,
    href: "/"
  },
]


export const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="fixed h-full w-[280px] rounded-r-[80px] shadow-xl z-10 border-r bg-white">
      <div className="w-full rounded-tr-[70px] ">
        <p className="mx-auto w-[130px] px-3 py-12 ">MyCWU</p>
      </div>
      <div className="space-y-2">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn("w-full text-sm  hover:text-[#413df7] flex",
              pathName === item.href && " text-[#413df7] font-medium")}>
            {item.href === pathName &&
              <div className={cn("min-w-[5px] rounded-r-[80px] bg-blue-600")}>

              </div>
            }
            <div className="w-[130px] p-3 flex gap-2 mx-auto items-start my-3">
              <item.icon size={18} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}