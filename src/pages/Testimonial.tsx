export default function Testimonial() {
  return (
    <div className="flex flex-col items-center">
      <p className="text-5xl mt-14 mb-10">Testimonial</p>
      <div className="relative left-80">
        <img src="public/man.svg" alt="" />
        <div className="absolute top-10 left-14 w-80 text-sm">
          <p>
            “I had a great experience dining at this fancy Japanese restaurant.
            The menu was diverse and had a good variety of seafood.”
          </p>
          <p>- Zachery, Sous Chef, Stars</p>
        </div>
      </div>
      <div className="relative right-80 -top-40">
        <img src="public/women.svg" alt="" />
        <div className="absolute top-10 left-32 w-80 text-sm">
          <p>
            “I highly recommend the tempura at this restaurant, it was crispy
            and perfectly seasoned.”
          </p>
          <p>- Martha, Chef, Nobu</p>
        </div>
      </div>
    </div>
  );
}
