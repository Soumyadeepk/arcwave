import Navbar from "./Navbar";

const Layout = (props) => {
  return (
    <div className="">
      <Navbar />
      <div className="">{props.children}</div>
    </div>
  );
};

export default Layout;
