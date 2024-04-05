import { Search } from "lucide-react"
import { SurveyBtn } from "./components/survey-btn"
import { Menu } from "./components/menu"
import { ProgressBar } from "./components/progress-bar"
import { Survey } from "./components/survey"


const SurveyPage = () => {
  return (
    <div className="w-full h-full p-16">
      <SurveyBtn />
      <p className="text-lg font-medium">Recent surveys</p>
      <Survey />
    </div>
  )
}

export default SurveyPage