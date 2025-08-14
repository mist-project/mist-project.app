import { Outlet } from "react-router";
import { Nav } from "../Nav";
import { Footer } from "../Footer";

const Layout = () => {
  return (
    <div className="bg-base text-ink antialiased">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
