import Image from "next/image";
import gsap from "gsap/dist/gsap";
import { useEffect } from "react";

const Header = ({ handleShow }) => {
  const animateData = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".left_text",
      1,
      {
        x: 200,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        delay: 0.5,
      }
    )
      .fromTo(
        ".right_text",
        1,
        {
          x: -200,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
        },
        "=-1"
      )
      .fromTo(
        ".middle_text",
        0.5,
        {
          scale: 0.8,
          opacity: 0,
        },
        {
          scale: 1,
          opacity: 1,
        },
        "=-0.5"
      )
      .to(".main_layer", 0.5, {
        height: 0,
        delay: 1,
      })
      .fromTo(
        ".header_image",
        0.5,
        {
          opacity: 0,
        },
        {
          opacity: 1,
        }
      )
      .fromTo(
        ".middle_text",
        0.4,
        {
          color: "black",
        },
        {
          color: "white",
        }
      )
      .then(() => handleShow());
  };

  const animateMobile = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".mobile_text",
      0.8,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 1,
      }
    )
      .to(".mobile_layer", 0.8, {
        height: 0,
      })
      .fromTo(
        ".mobile_text",
        0.8,
        {
          color: "black",
        },
        {
          color: "white",
        }
      );
  };

  useEffect(() => {
    animateData();
    animateMobile();
  }, []);

  return (
    <>
      <div className="hidden lg:flex flex-col items-center my-12 relative">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:text-7xl z-20 whitespace-nowrap flex">
          <div className="left_text"> Reforming &nbsp;</div>
          <div className=" middle_text">the view a</div>
          <div className="right_text"> round YOU </div>
        </div>
        <div className="flex gap-32">
          <div className="flex flex-col justify-end">
            <div className="relative w-[313px] h-[209px]">
              <div className="relative w-full h-full header_image">
                <Image
                  src="/images/home/header3.png"
                  layout="fill"
                  alt="arcwave"
                />
              </div>
            </div>
          </div>

          <div className="relative w-[387px] h-[581px]">
            <div className="relative w-full h-full">
              <Image
                src="/images/home/header1.png"
                layout="fill"
                alt="arcwave"
              />
            </div>
            <div className="main_layer absolute top-0 right-0 bg-white z-10 w-full h-full"></div>
          </div>
          <div className="relative w-[317px] h-[211px]">
            <div className="relative w-full h-full header_image">
              <Image
                src="/images/home/header2.png"
                layout="fill"
                alt="arcwave"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile header */}
      <div className="flex flex-col items-center">
        <div className="lg:hidden relative w-[387px] h-[581px]">
          <div className="relative w-full h-full">
            <Image src="/images/home/header1.png" layout="fill" alt="arcwave" />
          </div>
          <div className="mobile_layer absolute top-0 right-0 bg-white z-10 w-full h-full"></div>
          <div className="mobile_text z-20 opacity-0 w-4/5 text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl font-semibold">
            Reforming the view around you
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
