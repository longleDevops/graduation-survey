import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"


export const LeftSection = () => {
  return (
    <div className="w-[50%] flex flex-col justify-center px-8 pb-24">
      <p className="font-semibold text-4xl">
        Post-career evaluations for college students
      </p>
      <p className="text-muted-foreground mt-20 mb-6">
        Navigate your career journey with confidence by leveraging our comprehensive post-career evaluations tailored specifically for college students.
      </p>
      <div className="flex gap-4">
        <ClerkLoading>
          <Skeleton
            className="w-[90px] h-[50px]"
          />
        </ClerkLoading>
        <ClerkLoaded>
          <SignInButton
            mode="modal"
            afterSignInUrl="/role"
            afterSignUpUrl="/role"
          >
            <Button
              className="bg-[#cff383] text-black hover:bg-[#cff383]"
            >
              Get Started
            </Button>
          </SignInButton>
        </ClerkLoaded>
        <button
          className="underline"
        >
          View Demo
        </button>
      </div>
    </div>
  )
}