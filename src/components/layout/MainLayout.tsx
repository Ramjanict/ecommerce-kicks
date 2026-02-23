import { AnimatePresence } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import CommonSpace from "../shared/CommonSpace";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col ">
      <CommonSpace>
        <Navbar />
      </CommonSpace>
      <main className="flex-1">
        <AnimatePresence mode="wait" initial={false}>
          <Outlet key={location.pathname} />
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
