import _ from "lodash";

export default function Review(props: any) {
  const { customerReview, id } = props;
  return (
    <>
      {customerReview.map((review: any, i: number) => (
        <div
          key={i}
          id="read-review"
          className="border-2 border-stone-100 p-10  "
        >
          <div className="flex justify-start items-center">
            <p>{review.customerName}</p>
            <div className="  ml-2">
              {_.range(review.countStar).map((star) => (
                <i
                  key={star}
                  className={`text-amber-400 fas fa-star mr-2 `}
                ></i>
              ))}
            </div>
          </div>
          <div>
            <p className="text-stone-500 my-2">{review.date}</p>
            <p>{review.customerTitleReview}</p>
            <p className="text-stone-500 my-2">
              {review.customerContentReview}
            </p>
          </div>
        </div>
      ))}
    </>
  );
}
