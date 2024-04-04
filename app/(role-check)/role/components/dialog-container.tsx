"use client"

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { TabsContainer } from "./tabs-container";

export const DialogContainer = () => {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (!open) {
      setOpen(true)
    }
  }, [open])
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Choose account type</DialogTitle>
        </DialogHeader>

        {/*Tabs container*/}
        <TabsContainer />

      </DialogContent>
    </Dialog>
  )
}