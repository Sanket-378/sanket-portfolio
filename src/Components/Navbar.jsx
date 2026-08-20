import { useEffect, useState } from "react";

const navItems = [
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Skills", id: "skills" },
  
  { name: "Projects", id: "projects" },
  { name: "Resume", id: "resume" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      let currentSection = "about";

      sections.forEach((section) => {
        if (scrollPosition >= section.offsetTop) {
          currentSection = section.id;
        }
      });

      setActiveSection(currentSection);

      // Update browser URL without jumping
      if (window.location.hash !== `#${currentSection}`) {
        window.history.replaceState(null, "", `#${currentSection}`);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Set initial section from URL
    const hash = window.location.hash.replace("#", "");

    if (navItems.some((item) => item.id === hash)) {
      setActiveSection(hash);

      setTimeout(() => {
        const section = document.getElementById(hash);

        if (section) {
          section.scrollIntoView({
            behavior: "instant",
            block: "start",
          });
        }
      }, 100);
    } else {
      handleScroll();
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (id) => {
    const section = document.getElementById(id);

    if (!section) {
      console.warn(`Section with id="${id}" was not found.`);
      return;
    }

    setActiveSection(id);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.pushState(null, "", `#${id}`);
  };

  return (
    <nav className="fixed left-1/2 top-5 z-50 -translate-x-1/2">
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-slate-950/80 p-1.5 shadow-2xl shadow-black/20 backdrop-blur-xl">

        {navItems.map((item) => {
          const isActive = activeSection === item.id;

          return (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "bg-cyan-400/10 text-cyan-400"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}

              {isActive && (
                <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-cyan-400" />
              )}
            </button>
          );
        })}
      </div>
    </nav>
  );
}

export default Navbar;