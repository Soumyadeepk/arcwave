import gsap, { Linear } from "gsap/dist/gsap";
import { useEffect } from "react";

const Marquee = () => {
  const animateData = () => {
    let marquee = document.querySelectorAll(".clipped-text");

    marquee.forEach((el) => {
      let rate = 300;
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
    <div className="hero-marquee w-full ">
      <div class="marquee">
        <span class={`clipped-text`}>Exterior</span>
        <span class={`clipped-text`}>Interior</span>
        <span class={`clipped-text`}>Exterior</span>
        <span class={`clipped-text`}>Interior</span>
      </div>
    </div>
  );
};

export default Marquee;
