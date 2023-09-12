import { ReviewCard } from "./ReviewCard";

export const ReviewsList = ({ dataList }) => {
  if(!dataList) {
    return null;
  }

  return (
    <ul>
      {dataList.map(review => {
        return (
          <li key={review.id}>
            <ReviewCard data={review}/>
          </li>
        )
    })}
    </ul>
  )
}