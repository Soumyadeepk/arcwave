import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import About from "./components/Home/About";
import Header from "./components/Home/Header";
import Marquee from "./components/Home/Marquee";
import Tilt from "./components/Home/Tilt";
import Work from "./components/Home/Work";

export default function Home() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <>
      <Head>
        <title>Arcwave</title>
      </Head>
      <div className="">
        <Header handleShow={handleShow} />

        {show && (
          <>
            <About />
            <Work />
          </>
        )}
      </div>
    </>
  );
}
