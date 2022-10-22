import gsap from "gsap/dist/gsap";
import { useEffect, useState } from "react";
import { Facebook, Instagram, Menu, Twitter, X } from "react-feather";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const animateNav = () => {
    const tl = gsap.timeline({ delay: 2 });
    tl.fromTo(
      ".navbar",
      0.5,
      {
        y: -100,
      },
      {
        y: 0,
      }
    );
  };
  useEffect(() => {
    animateNav();
  }, []);

  const animateData = () => {
    const tl = gsap.timeline({ delay: 0.5 });
    tl.fromTo(
      ".menu_text",
      0.5,
      {
        y: 50,
      },
      {
        y: 0,
        stagger: 0.5,
      }
    ).fromTo(
      ".underline_animate",
      0.7,
      {
        width: 0,
        opacity: 0,
      },
      {
        width: 288,
        opacity: 1,
      }
    );
  };
  useEffect(() => {}, []);
  return (
    <div className="relative w-full lg:w-auto">
      <div className="navbar flex items-center my-4 w-full">
        <div className="w-1/3 flex items-center gap-4 pl-2 lg:pl-4">
          <Facebook size={20} />
          <Instagram size={20} />
          <Twitter size={20} />
        </div>
        <div className="w-1/3 flex flex-col items-center lg:text-3xl">
          Arcwave
        </div>
        <div className="w-1/3 flex flex-col items-end">
          <Menu
            size={32}
            className=" hidden lg:block mr-12 cursor-pointer"
            onClick={() => {
              animateData();
              setShowMenu(true);
            }}
          />
          <Menu
            size={24}
            className=" lg:hidden mr-4 cursor-pointer"
            onClick={() => {
              animateData();
              setShowMenu(true);
            }}
          />
        </div>
      </div>

      <div
        className={` ${
          showMenu ? "block" : "hidden"
        } menu_wrapper animateRTL fixed top-0 left-0 w-screen h-screen bg-white z-40`}
      >
        <div className="">
          <X
            size={48}
            className="absolute top-8 right-8 cursor-pointer"
            onClick={() => setShowMenu(false)}
          />
        </div>
        <div className="flex flex-col items-center justify-center h-full">
          <div className="">
            <div className="overflow-hidden h-14 ">
              <div className="text-5xl lg:text-6xl menu_text">Works</div>
            </div>
            <div className="underline_animate opacity-0 h-1 bg-black"></div>
            <div className="overflow-hidden mt-12 h-14">
              <div className="text-5xl lg:text-6xl menu_text ">About</div>
            </div>
            <div className="underline_animate opacity-0 h-1 bg-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
