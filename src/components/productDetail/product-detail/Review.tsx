import { star } from "../product-list/smallData";
import _ from "lodash";

export default function Review(props: any) {
  const { customerReview } = props;
  return (
    <>
      {customerReview.length === 1 && (
        <div id="read-review" className="border-2 border-stone-100 p-10  ">
          <div className="flex justify-start items-center">
            <p>Grade</p>
            <div className="  ml-2">
              {star.map((_s, i) => (
                <i key={i} className="fas fa-star text-amber-400 mr-2"></i>
              ))}
            </div>
          </div>
          <div>
            <p className="text-stone-500 my-2">03/18/2022</p>
            <p>Demo</p>
            <p className="text-stone-500 my-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam,
              repellat?
            </p>
          </div>
        </div>
      )}

      {customerReview.length > 1 &&
        customerReview.map((review: any, i: number) => (
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
