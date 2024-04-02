"use client"

import { useState } from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const schools = [
  {
    schoolVal: "001",
    label: "Central Washington University",
  },
  {
    schoolVal: "002",
    label: "Seattle University",
  },
  {
    schoolVal: "003",
    label: "University of Washington",
  },
  {
    schoolVal: "004",
    label: "Parcific University",
  },
  {
    schoolVal: "005",
    label: "Highline College",
  },
]

type Props = {
  schoolName: string,
  setSchoolName: (schoolName: string) => void
}

export const SchoolSelection = ({ schoolName, setSchoolName }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[250px] justify-between"
        >
          {schoolName
            ? schools.find((school) => school.schoolVal === schoolName)?.label
            : "Select school..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="max-w-[250px] p-0">
        <Command>
          <CommandInput placeholder="Search colleges..." />
          <CommandList>
            <CommandEmpty>No school found.</CommandEmpty>
            <CommandGroup>
              {schools.map((school) => (
                <CommandItem
                  key={school.schoolVal}
                  value={school.schoolVal}
                  onSelect={(currentschoolVal) => {
                    setSchoolName(currentschoolVal === schoolName ? "" : currentschoolVal)
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      schoolName === school.schoolVal ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {school.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
