import { LeftSection } from "./left-section"
import { RightSection } from "./right-section"

export const Content = () => {
  return (
    <div className="flex flex-1 ">
      <LeftSection />
      <RightSection />
    </div>
  )
}