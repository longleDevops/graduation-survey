import Image from "next/image"

export const RightSection = () => {
  return (
    <div className="px-8 w-[50%] flex justify-center items-center pb-24">
      <Image
        src="/landing-image.jpeg"
        alt="landing image"
        width={400}
        height={400}
        className=""
      />
    </div>
  )
}