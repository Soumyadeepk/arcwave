import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";

import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper";
import gsap from "gsap/dist/gsap";
import { useEffect } from "react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

// import "./styles.css";

const About = () => {
  const aboutArray = [
    {
      image: "about1",
      width: 500,
      height: 431,
    },
    {
      image: "about2",
      width: 387,
      height: 577,
    },
    {
      image: "about3",
      width: 387,
      height: 352,
    },
    {
      image: "about4",
      width: 387,
      height: 433,
    },
  ];

  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about_heading",
        start: "top 60%",
      },
    });

    tl.fromTo(
      ".about_line",
      0.5,
      {
        width: 0,
      },
      {
        width: "100%",
      }
    )
      .fromTo(
        ".about_heading",
        0.5,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".about_text",
        0.5,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".slider_animate",
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      );
  };

  useEffect(() => {
    animateData();
  }, []);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="w-11/12">
          <div className="about_line hidden lg:block h-px w-full bg-black my-20"></div>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between mt-8 mb-12">
            <div className="flex flex-col items-center lg:w-1/2">
              <div className="w-full lg:w-4/5">
                <div className="text-2xl lg:text-4xl font-semibold about_heading">
                  About Arcwave
                </div>
                <div className="lg:text-xl mt-2 lg:mt-6 about_text">
                  Arcwave was founded in 2019. We work in the fields of
                  Industrial Design, Residenctial Architecture, Commercial
                  Interiors, Photography and Art Direction
                </div>
              </div>
            </div>
            <div className="about_text mt-4 lg:mt-0 lg:w-1/2 flex lg:flex-col lg:items-center marquee_text text-5xl lg:text-8xl">
              2019
            </div>
          </div>
        </div>
      </div>

      <div className=" lg:my-32 slider_animate opacity-0">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {aboutArray.map((el, i) => {
            return (
              <SwiperSlide
                className="relative"
                style={{ width: el.width, height: el.height }}
                key={i}
              >
                <Image
                  src={`/images/home/${el.image}.png`}
                  alt="about1"
                  objectFit="cover"
                  layout="fill"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default About;
