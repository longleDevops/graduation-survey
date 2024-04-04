import { SideBar } from "./admin/components/sidebar"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <SideBar />
      <div className="pl-[280px] h-full">
        {children}
      </div>
    </div>
  )
}