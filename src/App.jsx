import React, { useState } from "react";
import iconStar from "../public/icon-star.svg";
import iconThank from "../public/illustration-thank-you.svg";

export default function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [selectedRating, setSelectedRating] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();

    if (selectedRating !== null) {
      setIsSuccess(true);
    } else {
      // Handle the case where no rating is selected
      alert("Please select a rating before submitting.");
    }
  };

  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-VeryDarkBlue">
      {!isSuccess ? (
        <section className="flex flex-col max-w-sm text-LightGrey p-4 bg-DarkBlue rounded-lg gap-4">
          <img src={iconStar} alt="" className="w-14 bg-MediumGrey p-4 rounded-full" />
          <h1 className="font-semibold text-2xl text-white">How did we do?</h1>
          <p>
            Please let us know how we did with your support request. All feedback is appreciated
            to help us improve our offering!
          </p>
          <div className="flex flex-row justify-between text-white">
            {[1, 2, 3, 4, 5].map((rating) => (
              <span
                key={rating}
                onClick={() => handleRatingClick(rating)}
                className={`rating bg-VeryDarkBlue px-4 py-2 rounded-full ${
                  selectedRating === rating ? "bg-MediumGrey" : "hover:bg-Orange"
                } cursor-pointer`}
              >
                {rating}
              </span>
            ))}
          </div>
          <button
            type="submit"
            onClick={handleClick}
            className="bg-Orange p-2 rounded-xl font-bold text-white hover:bg-white hover:text-Orange"
          >
            Submit
          </button>
        </section>
      ) : (
        <section className="flex flex-col items-center text-center max-w-sm text-LightGrey p-8 bg-DarkBlue rounded-2xl gap-4">
          <img src={iconThank} alt="" />
          <span className="bg-VeryDarkBlue px-2 py-1 rounded-xl text-Orange mb-4">{`You selected ${selectedRating} out of 5`}</span>
          <h1 className="font-semibold text-xl text-white">Thank you!</h1>
          <p>
            We appreciate you taking the time to give a rating. If you ever need more support,
            don’t hesitate to get in touch!
          </p>
        </section>
      )}
    </main>
  );
}
