import Container from "@/components/layout/Container";
import { motion } from "framer-motion";
import { X } from "lucide-react";

import { IoSearch } from "react-icons/io5";

interface SearchOverlayProps {
  setSearchOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
  searchQuery: string;
  handleSearch: (e: React.FormEvent) => void;
}
const SearchOverlay: React.FC<SearchOverlayProps> = ({
  setSearchOpen,
  setSearchQuery,
  searchQuery,
  handleSearch,
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-100 bg-black/40 backdrop-blur-sm"
        onClick={() => setSearchOpen(false)}
      >
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ type: "spring", damping: 28, stiffness: 320 }}
          className="bg-white shadow-lg"
          onClick={(e) => e.stopPropagation()}
        >
          <Container>
            <form
              onSubmit={handleSearch}
              className="flex items-center gap-3 py-4"
            >
              <IoSearch className="w-5 h-5 text-gray-400 shrink-0" />
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search sneakers, brands..."
                className="flex-1 text-base outline-none bg-transparent"
              />
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="p-1.5 hover:bg-gray-100 rounded-lg cursor-pointer"
              >
                <X className="w-5 h-5 " />
              </button>
            </form>
          </Container>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SearchOverlay;
