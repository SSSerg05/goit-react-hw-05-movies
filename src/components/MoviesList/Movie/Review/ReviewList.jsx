import { ReviewCard } from "./ReviewCard";
import { List, Item } from "./Reviews.styled";

export const ReviewsList = ({ dataList }) => {
  if(!dataList.length) {
    return null;
  }

  return (
    <List>
      {dataList.map(review => {
        return (
          <Item key={review.id}>
            <ReviewCard data={review}/>
          </Item>
        )
    })}
    </List>
  )
}