import { CastCard } from "./CastCard"

export const CastList = (dataCasts) => {
  console.log(dataCasts);
  if(!dataCasts) {
    return null;
  }

  return (
    <ul>
      {dataCasts.map(card => {
        return (
          <li key={ card.id }>
            <CastCard data={ card } />
          </li>
        )
    })}
    </ul>
  )
}