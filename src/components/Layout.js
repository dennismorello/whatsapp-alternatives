import cn from "classnames";

import Footer from "@/components/Footer";
import Navbar from "@/components/Header";

const Layout = ({ className, children }) => (
  <div className={cn("flex flex-col", className)}>
    <Navbar className="flex-none" />
    {children}
    <Footer className="flex-none" />
  </div>
);

export default Layout;
