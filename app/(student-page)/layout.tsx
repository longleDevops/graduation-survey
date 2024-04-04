import { SideBar } from "./student/components/sidebar";

export default function StudentLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen">
      <SideBar />
      <div className="pl-[250px] h-full">
        {children}
      </div>
    </div>
  )
}