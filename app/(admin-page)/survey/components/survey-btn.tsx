import { Plus } from "lucide-react"
export const SurveyBtn = () => {
  return (
    <button className='absolute top-8 right-8 pl-2 pr-3 py-3 flex gap-1 bg-[#413df7] text-white text-sm rounded-lg justify-center items-center'>
      <Plus size={20} />
      <p>Create Survey</p>
    </button>
  )
}