import MentyStars from "./mentyStars"
import AvatarUI from "./ui/avatar"
export default function MentyListItem({menty}) {
  return(<div className="rounded border-2 border-purple-200 w-1/2 min-w-min flex flex-row justify-between p-1">
    <div className="flex flex-row w-1/2">
      <AvatarUI imgSrc={menty.image}/>
      <p>{menty.name}</p>
    </div>
    <MentyStars starAmount={menty.stars}/>
    </div>)
}