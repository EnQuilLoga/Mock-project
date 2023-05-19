import { useState } from "react";
import { star } from "../product-list/smallData";

export default function Modal(props: any) {
  const [customerInputReview, setCustomerInputReview] = useState({
    customerTitleReview: "",
    customerName: "",
  });
  const [customerTextAreaReview, setCustomerTextAreaReview] = useState("");
  const [customerReview, setCustomerReview] = useState({});
  const [errorCustomerReview, setErrorCustomerReview] = useState(false);

  const handleInputReview = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomerInputReview({
      ...customerInputReview,
      [e.target.name]: e.target.value,
    });
  };
  const handleTextAreaReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCustomerTextAreaReview(e.target.value);
  };

  const handleSubmitReview = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCustomerReview({ ...customerInputReview, customerTextAreaReview });

    if (
      customerInputReview.customerName.trim() === "" ||
      customerInputReview.customerTitleReview.trim() === "" ||
      customerTextAreaReview.trim() === ""
    ) {
      setErrorCustomerReview(true);
    } else {
      alert("Your Comment Is Submitted");
      props.setDisplayReview(false);
    }
  };
  return (
    <>
      <div className="text-[14px] w-full h-screen fixed top-0 left-0 bottom-0 right-0 bg-black bg-opacity-50 after:px-20 after:bg-stone-900 transform -translate-x- -translate-y-0 after:opacity-20 z-50">
        <div className="flex  justify-center items-center ">
          <div className=" w-1/2 h-full bg-white  py-2 px-5 my-3 border-2 border-stone-200 rounded">
            <div className="text-upperCase text-white bg-stone-800 p-3 w-full">
              Write your review
            </div>
            <div>
              <div className="flex mt-5">
                <div className="w-1/2 ">
                  <div className="flex mr-2  place-content-center p-10 border-2 border-stone-200 mb-5">
                    <img
                      className="w-full h-30 object-contain object-center "
                      src={props.currentProduct?.image}
                    />
                  </div>
                  <div>{props.currentProduct?.title}</div>
                </div>
                <div className=" w-1/2 pl-4">
                  <div className="text-[22px]">Write your review</div>
                  <div className="flex justify-start items-center">
                    <div className="mr-2 font-bold">Quantity</div>
                    <div className=" my-1 mr-2">
                      {star.map((_s, i) => (
                        <i
                          key={i}
                          className="fas fa-star text-amber-400 mr-2"
                        ></i>
                      ))}
                    </div>
                  </div>
                  {/* Submit form */}
                  {errorCustomerReview ? (
                    <div>
                      <p>Title is incorrect</p>
                      <p>Comment is incorrect</p>
                      <p>Customer name is incorrect</p>
                    </div>
                  ) : null}
                  <hr />
                  <div className="flex text-right my-2">
                    <form onSubmit={handleSubmitReview}>
                      <div>
                        <label htmlFor="" className="font-bold">
                          Title for your review*
                        </label>
                        <input
                          onChange={handleInputReview}
                          name="customerTitleReview"
                          type="text"
                          className="p-2 border-2 border-stone-200 w-full rounded my-2 focus:outline-stone-200"
                        />
                      </div>
                      <div>
                        <label htmlFor="" className="font-bold">
                          Your review*
                        </label>

                        <textarea
                          onChange={handleTextAreaReview}
                          className="p-2 border-2 border-stone-200 w-full rounded my-2 focus:outline-stone-200"
                          name="customer-content-review"
                          id=""
                          cols={10}
                          rows={2}
                        ></textarea>
                      </div>
                      <div>
                        <label htmlFor="" className="font-bold">
                          Your name*
                        </label>
                        <input
                          onChange={handleInputReview}
                          name="customerName"
                          type="text"
                          className="p-2 border-2 border-stone-200 w-full rounded my-2  focus:outline-stone-200"
                        />
                      </div>
                      <div className="text-left">* Required fields</div>
                      <div className="flex justify-end items-center mt-2">
                        <button
                          type="submit"
                          className="bg-stone-800 text-white p-2 rounded hover:bg-red-600"
                        >
                          Send
                        </button>
                        <div className="mx-5">or</div>
                        <button
                          onClick={() => props.setDisplayReview(false)}
                          type="button"
                          className="bg-stone-800 text-white p-2 rounded hover:bg-red-600"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
