import { motion } from "framer-motion";
import { X } from "lucide-react";

import { Link } from "react-router-dom";
interface MobileMenuProps {
  setMobileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const MobileMenu: React.FC<MobileMenuProps> = ({ setMobileOpen }) => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/50"
        onClick={() => setMobileOpen(false)}
      />
      <motion.div
        initial={{ x: -280 }}
        animate={{ x: 0 }}
        exit={{ x: -280 }}
        transition={{ type: "spring", damping: 30, stiffness: 300 }}
        className="fixed left-0 top-0 bottom-0 z-[101] w-72 bg-white shadow-2xl flex flex-col"
      >
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <span className="font-display font-black text-xl tracking-widest">
            KICKS
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-1.5 hover:bg-gray-100 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {[
            { label: "🔥 New Drops", to: "/" },
            { label: "Men", to: "/" },
            { label: "Women", to: "/" },
            { label: "Runners", to: "/" },
            { label: "Sneakers", to: "/" },
            { label: "Basketball", to: "/" },
            { label: "Outdoor", to: "/" },
            { label: "Golf", to: "/" },
            { label: "Hiking", to: "/" },
          ].map((item) => (
            <Link
              key={item.label}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3 rounded-xl text-sm font-semibold hover:bg-kicks-light-gray transition-colors text-kicks-dark"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </>
  );
};

export default MobileMenu;
