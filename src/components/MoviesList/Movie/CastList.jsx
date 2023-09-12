import { CastCard } from "./CastCard"


export const CastList = ({ dataList }) => {
  if(!dataList) {
    return null;
  }

  return (
    <ul>
      {dataList.map(cast => {
        return (
          <li key={cast.id}>
            <CastCard dataCast={cast} />
          </li>
        )
    })}
    </ul>
  )
}