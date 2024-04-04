"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { SchoolSelection } from "./school-selection"
import { useState } from "react"
import { useRouter } from "next/navigation"

export const TabsContainer = () => {
  const [schoolName, setSchoolName] = useState('')
  const [name, setName] = useState('')

  const router = useRouter()
  const onConfirmed = () => {
    router.push("/student")
  }
  const onAdminConfirmed = () => {
    router.push("/admin")
  }
  return (
    <Tabs defaultValue="student" className="mx-auto">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="student">Student</TabsTrigger>
        <TabsTrigger value="advisors">Advisors</TabsTrigger>
      </TabsList>
      <TabsContent value="student">
        <Card>
          <CardHeader>
            <CardTitle>Student</CardTitle>
            <CardDescription>
              Take online survey sent by advisors to access career placement
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="text-muted-foreground" />
            </div>

            <div className="space-y-1">
              <Label htmlFor="name">What school are you enrolled in?</Label>
            </div>
            <SchoolSelection schoolName={schoolName} setSchoolName={setSchoolName} />

            <div className="space-y-1">
              <Label htmlFor="username">SID</Label>
              <Input id="username" placeholder="Enter your student ID" />
            </div>

          </CardContent>
          <CardFooter>
            <Button
              className="ml-auto"
              onClick={onConfirmed}
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="advisors">
        <Card>
          <CardHeader>
            <CardTitle>Advisors</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={onAdminConfirmed}
            >
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}