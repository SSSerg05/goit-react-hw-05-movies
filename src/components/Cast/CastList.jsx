import { CastCard } from "./CastCard"
import { List } from "./Cast.styled";

export const CastList = ({ dataList }) => {
  if(!dataList.length) {
    return null;
  }

  return (
    <List>
      {dataList.map(cast => {
        return (
          <li key={cast.id}>
            <CastCard dataCast={cast} />
          </li>
        )
    })}
    </List>
  )
}