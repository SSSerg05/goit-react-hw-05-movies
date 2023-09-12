import { CastCard } from "./CastCard"

export const CastList = (dataCasts) => {

  return ( 
    <ul>
      { dataCasts.map(card => 
        { return (<li key={card.id}><CastCard data={ card }></CastCard></li>) }) 
      }
    </ul>
  )
}