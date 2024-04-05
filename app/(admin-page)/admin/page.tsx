import { Chart } from "./components/chart"
import { SideBar } from "../../../components/sidebar"
import { Submission } from "./components/submission"

const charts = [
  {
    name: "Taken survey",

  },
  {
    name: "students"
  },
  {
    name: "Results"
  }
]

const AdminPage = () => {
  return (
    <div className="p-8">
      <p className="text-xl font-semibold">
        Dashboard
      </p>
      <p className="text-sm text-muted-foreground">Welcome back, Mrs. Angela</p>
      <div className="flex gap-4">
        {charts.map((item) => (
          <Chart key={item.name} />
        ))
        }
      </div>
      <Submission />
    </div>
  )
}

export default AdminPage