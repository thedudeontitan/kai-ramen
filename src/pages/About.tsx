export default function About() {
  return (
    <div className="min-h-screen pt-40 mx-10 lg:mx-20 mb-20">
      <div className=" flex flex-col-reverse lg:flex-row gap-10 items-center">
        <div className="flex flex-col gap-4 mt-10 lg:w-1/2">
          <p className="text-3xl">Welcome to Kai Ramen</p>
          <p>
            At Kai Ramen, our fervent dedication to Japanese cuisine drives us
            to share the genuine essence of Japan with the vibrant city of Pune.
            With a deep-rooted commitment to authenticity, our restaurant takes
            pride in meticulously crafting each bowl of ramen, ensuring a
            delightful symphony of flavors that invigorate the senses and
            replenish the soul. Join us on a culinary journey where every dish
            is a testament to our passion for excellence and a tribute to the
            rich culinary heritage of Japan.
          </p>
          <p className="text-3xl">Our Story</p>
          <p>
            Kai Ramen was born out of a love for Japanese culture and a desire
            to share its culinary treasures with the world. Founded by a
            seasoned chef with a deep appreciation for the art of ramen-making,
            our restaurant quickly became a beloved destination for locals and
            visitors alike. Rooted in tradition yet infused with innovation, our
            commitment to quality and authenticity remains unwavering, ensuring
            each visit to Kai Ramen is a memorable culinary experience.
          </p>
        </div>
        <div className="border-2 border-[#333F72] p-4 lg:w-1/2 h-fit rounded-tl-3xl rounded-br-3xl">
          <img
            src="/restaurant.jpg"
            alt=""
            className="object-cover rounded-tl-3xl rounded-br-3xl"
          />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-10 mt-20 items-center">
        <div className="border-2 border-[#333F72] p-4 lg:w-1/2 h-fit rounded-tl-3xl rounded-br-3xl">
          <img
            src="/team.jpg"
            alt=""
            className="object-cover rounded-tl-3xl rounded-br-3xl"
          />
        </div>
        <div className="flex flex-col gap-4 mt-10 lg:w-1/2">
          <p className="text-3xl">Our Team</p>
          <p>
            Behind every delicious bowl of ramen is a dedicated team of chefs,
            servers, and staff who are passionate about what they do. Our team
            brings years of experience and expertise to the kitchen, ensuring
            that every dish is prepared to perfection and served with a smile.
          </p>
          <p className="text-3xl">Our Cuisine</p>
          <p>
            Our menu is a celebration of Japanese cuisine, with a focus on the
            iconic dish of ramen. From our rich and flavorful broth to our
            perfectly cooked noodles and thoughtfully crafted toppings, each
            bowl of ramen is a masterpiece of taste and texture. In addition to
            ramen, we offer a variety of other Japanese specialties, including
            sushi, sashimi, bento boxes, and more. Every dish is prepared with
            care and attention to detail, ensuring an authentic and memorable
            dining experience.
          </p>
        </div>
      </div>
    </div>
  );
}
