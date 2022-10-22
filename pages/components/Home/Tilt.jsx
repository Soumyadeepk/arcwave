import Image from "next/image";
import { useEffect } from "react";
import gsap from "gsap/dist/gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

const Tilt = () => {
  const animateData = () => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".tiltImage",
        start: "-60%",
        end: "10%",
        // markers: true,
        scrub: true,
      },
    });
    tl.fromTo(
      ".tiltImage",
      10,
      {
        rotateZ: -30,
      },
      {
        rotateZ: 0,
      }
    );
    tl.fromTo(
      document.querySelector("body"),
      1,
      {
        background: "white",
        transition: 0.4,
      },
      {
        background: "black",
      }
    );
  };

  useEffect(() => {
    animateData();
  }, []);

  return (
    <div className="my-96">
      <div className="flex flex-col items-center ">
        <div className="tiltImage relative w-[800px] h-[500px]">
          <Image
            src="/images/home/about1.png"
            alt="about1"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default Tilt;
