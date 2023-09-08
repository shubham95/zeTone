"use client";
import React from "react";
import Slider from "react-slick";

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="m-2">
      <section className="text-neutral-700 dark:text-neutral-300">
        <div className="mx-auto text-center md:max-w-xl lg:max-w-3xl">
          <h3 className="mb-6 text-3xl font-bold">Testimonials</h3>
          <p className="mb-6 pb-2 md:mb-12 md:pb-0 text-4xl">
            Here what students say about us
          </p>
        </div>

        {/* <!--First Testimonial--> */}

        {/* <div className="grid gap-6 text-center md:grid-cols-3"> */}
        <Slider {...settings}>
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#9d789b]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">
                  Sherya Sharma | Citrix
                </h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Zetone covers all the bases that you need to land a job in a
                  MNC. Their full stack development course is especially useful
                  as you don't get to learn those skills at that level in your
                  college courses. It's a great resume point which really helped
                  me during the tech interviews. They also give individual
                  attention to each student and make sure every student is
                  making progress. And in the end the mock interview helped me a
                  lot to improving my confidence
                </p>
              </div>
            </div>
          </div>

          {/* <!--Second Testimonial--> */}

          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#7a81a8]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">
                  Mayank Rawat | Microsoft
                </h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  Zetone is the perfect place to start your placement journey.
                  The syllabus includes everything that is required right from
                  Data Structures and Algorithms to Web Development. One thing
                  that most of the companies care when you start your career is
                  how quickly and efficiently you can solve a problem. Zetone
                  has really helped me improve my problem solving skills and
                  provided me with all the necessary knowledge required for the
                  same. I recommend joining Zetone for your placement journey.
                </p>
              </div>
            </div>
          </div>

          {/* <!--Third Testimonial--> */}
          <div>
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-700 dark:shadow-black/30">
              <div className="h-28 overflow-hidden rounded-t-lg bg-[#6d5b98]"></div>
              <div className="mx-auto -mt-12 w-24 overflow-hidden rounded-full border-2 border-white bg-white dark:border-neutral-800 dark:bg-neutral-800">
                <img src="https://tecdn.b-cdn.net/img/Photos/Avatars/img%20(9).webp" />
              </div>
              <div className="p-6">
                <h4 className="mb-4 text-2xl font-semibold">
                  Darshit Vakhil | Sprinklr
                </h4>
                <hr />
                <p className="mt-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    className="inline-block h-7 w-7 pr-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                  </svg>
                  I have always considered algorithms and data structures as the
                  building blocks for any computer science engineer. In Zetone,
                  they put in a lot of energy, resources and time into this. The
                  personality development module in zetone was also really
                  helpful for me, we need a lot of guidance and feedback to
                  master the art of cracking tech and managerial interviews and
                  they provide all of it without taking any fee upfront.
                </p>
              </div>
            </div>
          </div>
        </Slider>
        {/* </div> */}
      </section>
    </div>
  );
};

export default Testimonials;
