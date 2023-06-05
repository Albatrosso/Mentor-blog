import Image from "next/image"
export default function AvatarUI({imgSrc} : {imgSrc: string}) {
  return (
    <div>
       <Image className="rounded-full" src={imgSrc} alt='avatar placeholder' width='50' height='50' />
    </div>
  )
}