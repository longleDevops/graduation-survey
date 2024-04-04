"use client"

import { Home } from "lucide-react"
import { Logo } from "./logo"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

const sidebarItems = [
  {
    name: "Dashboard",
    icon: Home,
    href: "/student"
  },
  {
    name: "Inbox",
    icon: Home,
    href: "/inbox"
  },
  {
    name: "Activity",
    icon: Home,
    href: "/activity"
  },
]

export const SideBar = () => {
  const pathName = usePathname();

  return (
    <div className="w-[250px] h-full fixed rounded-tr-[16px] shadow-lg z-10">
      <Logo />
      <div className="space-y-3">
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={cn("px-3 py-2 flex gap-2  ml-4 mr-0 text-sm  items-start hover:text-[#413df7]",
              pathName === item.href && "border-r-[4px] border-[#413df7] text-[#413df7] font-medium")}>
            <item.icon size={18} />
            <p>{item.name}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}