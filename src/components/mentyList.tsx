import MentyListItem from "./mentyListItem"
export default function MentyList() {
  let mentiesListFromServer = [{
    name: 'Даша',
    stars: 2,
    image: '/dasha.jpg'
  },
  {
    name: 'Федя',
    stars: 1,
    image: '/fed.jpg'
  }
]
  let mentyListMarkdown = mentiesListFromServer.map((menty) => <MentyListItem key={menty.name} menty={menty} />)
  return(<div className="flex flex-col justify-between h-48">
    <h2>Герои</h2>
    {mentyListMarkdown}
    </div>)
}
