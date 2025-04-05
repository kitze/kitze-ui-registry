import React, { useRef, useEffect, memo } from "react";
import { Search, X } from "lucide-react";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  onClose?: () => void;
  onForceClose?: () => void;
  autoFocus?: boolean;
}

export const SearchBar = memo(
  ({
    value,
    onChange,
    placeholder = "Search...",
    onClose,
    onForceClose,
    autoFocus = false,
  }: SearchBarProps) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
      if (autoFocus && inputRef.current) {
        inputRef.current.focus();
      }
    }, [autoFocus]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange(e.target.value);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        e.preventDefault();
        if (onForceClose) {
          onForceClose();
        }
      }
    };

    const handleClear = () => {
      onChange("");
      if (inputRef.current) {
        inputRef.current.focus();
      }
    };

    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
          <Search className="w-4 h-4" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          onBlur={() => onClose && onClose()}
          className="w-full pl-10 pr-10 py-2 text-sm bg-background border border-input rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-ring"
          aria-label="Search"
        />
        {value && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute inset-y-0 right-0 flex items-center pr-3 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Clear search"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    );
  }
);
