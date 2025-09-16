import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import EarlyReaderNotice from "./Notice";

type NavItem = {
  name: string;
  href?: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
};

const NavBar = ({ items }: { items: NavItem[] }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [desktopActiveDropdown, setDesktopActiveDropdown] = useState<
    string | null
  >(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState<
    string | null
  >(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const desktopDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownEnter = (itemName: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setDesktopActiveDropdown(itemName);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setDesktopActiveDropdown(null);
    }, 150);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setMobileActiveDropdown(null);
    }
  }, [mobileMenuOpen]);

  const renderDesktopNavItem = (item: NavItem) => {
    if (item.dropdown) {
      return (
        <div
          key={item.name}
          className="relative"
          ref={desktopDropdownRef}
          onMouseEnter={() => handleDropdownEnter(item.name)}
          onMouseLeave={handleDropdownLeave}
        >
          <button
            className={`flex items-center space-x-1 text-sm font-medium ${
              isScrolled
                ? "text-book-darkGray hover:text-book-secondary"
                : "text-book-darkGray hover:text-book-secondary"
            } transition-colors`}
            onClick={(e) => {
              e.preventDefault();
              setDesktopActiveDropdown(
                desktopActiveDropdown === item.name ? null : item.name
              );
            }}
          >
            <span>{item.name}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                desktopActiveDropdown === item.name ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Desktop Dropdown menu */}
          {desktopActiveDropdown === item.name && (
            <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-1 z-50">
              {item.dropdown.map((dropdownItem) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="block px-4 py-2 text-sm text-book-darkGray hover:bg-gray-50 hover:text-book-secondary transition-colors"
                  onClick={() => setDesktopActiveDropdown(null)}
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`text-sm font-medium ${
          isScrolled
            ? "text-book-darkGray hover:text-book-secondary"
            : "text-book-darkGray hover:text-book-secondary"
        } transition-colors`}
      >
        {item.name}
      </a>
    );
  };

  const renderMobileNavItem = (item: NavItem, index: number) => {
    if (item.dropdown) {
      return (
        <div key={item.name}>
          <button
            className={`flex items-center justify-between w-full py-4 px-2 text-left text-base font-medium text-book-darkGray hover:text-book-secondary transition-colors ${
              index !== items.length - 1 && mobileActiveDropdown !== item.name
                ? "border-b border-gray-200/30"
                : ""
            }`}
            onClick={() => {
              console.log("Mobile button clicked:", item.name);
              console.log(
                "Current mobile dropdown state:",
                mobileActiveDropdown
              );
              setMobileActiveDropdown(
                mobileActiveDropdown === item.name ? null : item.name
              );
            }}
            type="button"
          >
            <span className="flex-1 text-left">{item.name}</span>
            <ChevronDown
              className={`h-4 w-4 transition-transform ${
                mobileActiveDropdown === item.name ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Mobile dropdown items */}
          {mobileActiveDropdown === item.name && (
            <div className="bg-gray-50/50 border-b border-gray-200/30">
              {item.dropdown.map((dropdownItem) => (
                <a
                  key={dropdownItem.name}
                  href={dropdownItem.href}
                  className="block py-3 px-6 text-sm text-book-darkGray hover:text-book-secondary transition-colors border-l-2 border-transparent hover:border-book-secondary"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setMobileActiveDropdown(null);
                  }}
                >
                  {dropdownItem.name}
                </a>
              ))}
            </div>
          )}
        </div>
      );
    }

    return (
      <a
        key={item.name}
        href={item.href}
        className={`block py-4 px-2 text-left text-base font-medium text-book-darkGray hover:text-book-secondary transition-colors ${
          index !== items.length - 1 ? "border-b border-gray-200/30" : ""
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        {item.name}
      </a>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <EarlyReaderNotice />
      <div className="container px-4 py-4 md:px-6">
        <div className="flex items-center justify-center">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {items.map(renderDesktopNavItem)}
          </nav>

          <div className="hidden md:block" />

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`text-book-darkGray`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/20">
          <div className="px-4 py-2">
            {items.map((item, index) => renderMobileNavItem(item, index))}
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
