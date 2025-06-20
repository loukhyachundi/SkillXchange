import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out px-4 md:px-6",
          scrolled 
            ? "py-2 bg-white/80 backdrop-blur-md shadow-sm" 
            : "py-4 bg-transparent"
        )}
        style={{ marginBottom: "20px" }} // Ensures spacing below navbar
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          {/* SkillXchange Logo */}
          <Link 
            to="/dashboard" 
            className="flex items-center gap-2 font-bold text-xl"
          >
            <span className="text-skillx-teal">Skill</span>
            <span className="text-skillx-dark">Xchange</span>
          </Link>

          {/* Mobile Menu Toggle */}
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </nav>
      </header>

      {/* Content Section (Adds Space Below Navbar) */}
      <main className="mt-[80px]">
        {/* Profile Management Section Goes Here */}
      </main>
    </>
  );
};

export default Navbar;
