import React, { useState, memo, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SearchBar } from "@/registry/new-york/search-bar/SearchBar";
import { Search } from "lucide-react";

interface WithSearchProps {
  children?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export const WithSearchBar = memo<WithSearchProps>(
  ({ children, value, onChange, placeholder }) => {
    const [isSearching, setIsSearching] = useState(false);

    const handleClose = useCallback(() => {
      if (!value) {
        setIsSearching(false);
      }
    }, [value]);

    const handleForceClose = useCallback(() => {
      setIsSearching(false);
    }, []);

    const handleOpenSearch = useCallback(() => {
      setIsSearching(true);
    }, []);

    const animationConfig = {
      transition: { duration: 0.2 },
    };

    return (
      <div className="relative">
        <AnimatePresence mode="wait">
          {isSearching ? (
            <motion.div
              key="search"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              {...animationConfig}
              className="w-full sm:w-auto"
            >
              <SearchBar
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                onClose={handleClose}
                onForceClose={handleForceClose}
                autoFocus
              />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              {...animationConfig}
              className="flex items-center justify-between w-full"
            >
              {children}
              <div className="flex items-center gap-2">
                <button
                  onClick={handleOpenSearch}
                  className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }
);
