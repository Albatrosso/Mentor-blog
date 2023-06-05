import Image from "next/image"
export default function MentyStars({starAmount}: {starAmount: number}) {
  let stars = []
  for(let iterator = 0; iterator < starAmount; iterator++) {
    stars.push(<Image src='/star.svg' alt='star icon' width='40' height='40'/>)
  }
  return(<div className="flex justify-normal flex-wrap">
    {stars}
  </div>)
}