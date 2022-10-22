import { Linear } from "gsap/dist/gsap";
import gsap from "gsap/dist/gsap";
import Image from "next/image";
import { useEffect } from "react";

const Work = () => {
  const works = [
    {
      image: "/images/home/work1.png",
      text: "INTERIOR",
    },
    {
      image: "/images/home/work2.png",
      text: "EXTERIOR",
    },
  ];

  // const animateData = () => {
  //   gsap
  //     .to(".marquee__part", {
  //       xPercent: -100,
  //       repeat: -1,
  //       duration: 2,
  //       ease: "linear",
  //     })
  //     .totalProgress(0.5);

  //   gsap.set(".marquee__inner", { xPercent: -50 });
  // };

  const animateData = () => {
    let marquee = document.querySelectorAll(".clipped-text");

    marquee.forEach((el) => {
      let rate = 200;
      let distance = el.clientWidth;
      let style = window.getComputedStyle(el);
      let marginRight = parseInt(style.marginRight) || 0;
      let totalDistance = distance + marginRight;
      let time = totalDistance / rate;
      let container = el.parentElement;

      gsap.to(container, time, {
        repeat: -1,
        x: "-" + totalDistance,
        ease: Linear.easeNone,
      });
    });
  };

  useEffect(() => {
    animateData();
  }, []);

  return (
    <div className="flex flex-col items-center my-8 lg:my-12">
      <div className=" lg:w-4/5">
        <div className="text-4xl">Our work</div>
        <div className="">
          {works.map((el, i) => {
            return (
              <div
                className="mt-6 lg:mt-12 relative w-[90vw] lg:w-[80vw] h-[60vh]"
                key={i}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={el.image}
                    layout="fill"
                    alt={el.text}
                    objectFit="cover"
                  />
                </div>
                <div className="hero-marquee w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <div class="marquee">
                    <span
                      class={` ${
                        i % 2 === 0 ? "interior_text" : "exterior_text"
                      } clipped-text`}
                    >
                      {el.text}
                    </span>
                    <span
                      class={` ${
                        i % 2 === 0 ? "interior_text" : "exterior_text"
                      } clipped-text`}
                    >
                      {el.text}
                    </span>
                    <span
                      class={` ${
                        i % 2 === 0 ? "interior_text" : "exterior_text"
                      } clipped-text`}
                    >
                      {el.text}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
