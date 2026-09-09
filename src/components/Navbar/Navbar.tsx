import { useState, useRef, useEffect, useCallback } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  IconSunFilled,
  IconMoonFilled,
  IconMenu2,
  IconX,
  IconArrowUpRight,
} from "@tabler/icons-react";
import { useTheme } from "../../context/theme";
import { springPhysical } from "../../shared/motion";

import "./Navbar.scss";

const NAV_ITEMS = [
  { id: "home", label: "Overview" },
  { id: "work", label: "Projects" },
  { id: "experience", label: "Career Journey" },
  { id: "contact", label: "Contact" },
] as const;

const MENU_ID = "mobile-menu";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [activeId, setActiveId] = useState<string>(NAV_ITEMS[0].id);
  const { theme, toggleTheme } = useTheme();
  const reduceMotion = useReducedMotion();

  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const closeMenu = useCallback(() => setToggle(false), []);

  useEffect(() => {
    const ids = NAV_ITEMS.map((item) => item.id);
    let observer: IntersectionObserver | null = null;
    let raf = 0;

    const handle: IntersectionObserverCallback = (entries) => {
      const inView = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
      if (inView[0]) setActiveId(inView[0].target.id);
    };

    const setup = () => {
      const els = ids
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

      if (els.length < ids.length) {
        raf = requestAnimationFrame(setup);
        return;
      }

      observer = new IntersectionObserver(handle, {
        // Active = whichever section crosses a thin band near the viewport centre.
        rootMargin: "-45% 0px -50% 0px",
        threshold: [0, 1],
      });
      els.forEach((el) => observer!.observe(el));
    };

    setup();

    return () => {
      cancelAnimationFrame(raf);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!toggle) return;

    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    menuRef.current?.querySelector<HTMLElement>("a[href]")?.focus();

    const focusablesInMenu = () =>
      Array.from(
        menuRef.current?.querySelectorAll<HTMLElement>(
          "a[href], button:not([disabled])",
        ) ?? [],
      );

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setToggle(false);
        return;
      }

      if (event.key === "Tab") {
        const focusables = focusablesInMenu();
        if (focusables.length === 0) return;

        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        const insideMenu = active ? menuRef.current?.contains(active) : false;

        if (event.shiftKey && (active === first || !insideMenu)) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && active === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (!menuRef.current?.contains(target) && !trigger?.contains(target)) {
        setToggle(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [toggle]);

  return (
    <header className="studio-nav-header">
      <nav className="studio-nav" aria-label="Main navigation">
        <a href="#home" className="studio-logo" aria-label="Bahaa Youssof Portfolio">
          <span className="logo-name">
            bahaa<span className="logo-dot">.</span>
          </span>
        </a>

        <div className="studio-nav-center">
          <ul className="studio-nav-links">
            {NAV_ITEMS.map((item) => {
              const isActive = activeId === item.id;
              return (
                <li key={`nav-${item.id}`}>
                  <a
                    href={`#${item.id}`}
                    className={isActive ? "is-active" : undefined}
                    aria-current={isActive ? "location" : undefined}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="studio-nav-right">
          <button
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={theme}
                className="theme-toggle-icon"
                initial={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: -45, scale: 0.6 }
                }
                animate={
                  reduceMotion ? { opacity: 1 } : { opacity: 1, rotate: 0, scale: 1 }
                }
                exit={
                  reduceMotion ? { opacity: 0 } : { opacity: 0, rotate: 45, scale: 0.6 }
                }
                transition={{ duration: reduceMotion ? 0.12 : 0.2, ease: "easeOut" }}
              >
                {theme === "light" ? (
                  <IconMoonFilled size={18} />
                ) : (
                  <IconSunFilled size={18} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>

          <a
            href="https://github.com/bahaayoussof"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-github-link"
          >
            <span>GitHub</span>
            <IconArrowUpRight size={14} />
          </a>

          <button
            ref={triggerRef}
            className="mobile-menu-trigger"
            onClick={() => setToggle((open) => !open)}
            aria-label="Toggle navigation menu"
            aria-expanded={toggle}
            aria-controls={MENU_ID}
          >
            {toggle ? <IconX size={22} /> : <IconMenu2 size={22} />}
          </button>
        </div>

        <AnimatePresence>
          {toggle && (
            <motion.div
              id={MENU_ID}
              ref={menuRef}
              className="mobile-menu-overlay"
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }}
              transition={
                reduceMotion ? { duration: 0.15, ease: "easeOut" } : springPhysical
              }
            >
              <ul>
                {NAV_ITEMS.map((item) => {
                  const isActive = activeId === item.id;
                  return (
                    <li key={`mobile-${item.id}`}>
                      <a
                        href={`#${item.id}`}
                        className={isActive ? "is-active" : undefined}
                        aria-current={isActive ? "location" : undefined}
                        onClick={closeMenu}
                      >
                        {item.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
