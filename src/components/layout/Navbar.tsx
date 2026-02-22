import { useAppSelector } from "@/app/hooks";
import logo from "@/assets/images/logo.png";
import { selectCartCount } from "@/features/cart/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "lucide-react";
import { FaUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";

import MobileMenu from "@/features/navbar/MobileMenu";
import NavMenu from "@/features/navbar/NavMenu";
import SearchOverlay from "@/features/navbar/SearchOverlay";
import { useDebounce } from "@/hooks/useDebounce";
import { useState } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 500);

  const cartCount = useAppSelector(selectCartCount);

  console.log("debouncedSearchQuery", debouncedSearchQuery);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    setSearchOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <Container>
        <motion.nav
          initial={{ y: -80 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between h-16 md:h-24 bg-[#FAFAFA] rounded-3xl p-8 ">
            <div className="flex items-center gap-4 min-w-20">
              <button
                onClick={() => setMobileOpen(true)}
                className="md:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
              <NavMenu />
            </div>

            <Link to="/" className="absolute left-1/2 -translate-x-1/2">
              <img src={logo} alt="Kicks logo" />
            </Link>

            <div className="flex items-center gap-1 min-w-20 justify-end">
              <button
                onClick={() => setSearchOpen(true)}
                className="hidden md:flex p-2 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                aria-label="Search"
              >
                <IoSearch className="w-5 h-5" />
              </button>
              <Link
                to="/"
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Account"
              >
                <FaUser className="w-5 h-5" />
              </Link>
              <Link
                to="/cart"
                className="relative p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Cart"
              >
                <div className="bg-kicks-orange w-8 h-8 rounded-xl text-kicks-dark flex items-center justify-center ">
                  {cartCount > 0 ? (cartCount > 99 ? "99+" : cartCount) : 0}
                </div>
              </Link>
            </div>
          </div>
        </motion.nav>
      </Container>
      <AnimatePresence>
        {searchOpen && (
          <SearchOverlay
            {...{ setSearchOpen, setSearchQuery, searchQuery, handleSearch }}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {mobileOpen && <MobileMenu setMobileOpen={setMobileOpen} />}
      </AnimatePresence>
    </>
  );
}
