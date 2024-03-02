export default function Testimonial() {
  return (
    <div className="flex flex-col items-center lg:-mb-40">
      <p className="text-5xl mt-14 mb-10">Testimonial</p>
      <div className="relative lg:left-80">
        <img src="public/man.svg" alt="" />
        <div className="absolute top-6 left-12 w-64 text-xs lg:top-10 lg:left-14 lg:w-80 lg:text-sm">
          <p>
            “I had a great experience dining at this fancy Japanese restaurant.
            The menu was diverse and had a good variety of seafood.”
          </p>
          <p>- Zachery, Sous Chef, Stars</p>
        </div>
      </div>
      <div className="relative lg:right-80 lg:-top-40">
        <img src="public/women.svg" alt="" />
        <div className="absolute top-8 left-24 w-64 text-xs lg:top-10 lg:left-32 lg:w-80 lg:text-sm">
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
