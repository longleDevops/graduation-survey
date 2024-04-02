import { ClerkLoaded, ClerkLoading, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { Button } from "@/components/ui/button"

export const Header = () => {
  return (
    <div className="justify-between h-[80px] flex items-center">
      <div className="text-xl font-semibold">
        CareerAdvance
      </div>
      <ClerkLoading>
        <Loader
          className="h-5 w-5 text-muted-foreground animate-spin"
        />
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <UserButton
            afterSignOutUrl="/ "
          />
        </SignedIn>
        <SignedOut>
          <SignInButton
            mode="modal"
            afterSignInUrl="/role"
            afterSignUpUrl="/role"
          >
            <button
              className="px-3 py-1 border rounded-lg border-[#000000]"
            >
              Log in
            </button>
          </SignInButton>
        </SignedOut>
      </ClerkLoaded>
    </div>
  )
}
