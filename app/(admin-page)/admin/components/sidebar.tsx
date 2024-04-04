"use client"

import { Home } from "lucide-react"
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/"
  },
  {
    name: "Inbox",
    icon: Home,
    href: "/"
  },
  {
    name: "Activity",
    icon: Home,
    href: "/"
  },
]


export const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="fixed h-full w-[280px] border-r z-10 ">
      <div className="w-full">
        <p className="mx-auto w-[130px] px-3 py-12">MyCWU</p>
      </div>
      <div className="">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn("w-full text-sm  hover:text-[#413df7]",
              pathName === item.href && "border-r-[4px] border-[#413df7] text-[#413df7] font-medium")}>
            <div className="w-[130px] p-3 flex gap-2 mx-auto items-start my-6">
              <item.icon size={18} />
              <p>{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}