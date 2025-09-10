'use client';

import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Close popover on outside click */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <header className="w-full shadow-md sticky top-0 z-50">
      <div className="supports-backdrop-blur:bg-default/0 bg-default/80 dark:bg-default-900/80 backdrop-blur-md shadow-sm border border-default/20 dark:border-default-800/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-end">
            {/* Desktop links */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <Button key={item.label} size="lg" asChild>
                  <Link href={item.href} className="font-bold">
                    {item.label}
                  </Link>
                </Button>
              ))}
            </nav>

            {/* Mobile hamburger */}
            <div className="md:hidden relative" ref={menuRef}>
              <button
                className="p-2 rounded-md hover:bg-default-200 dark:hover:bg-default-800"
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                {open ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>

              {/* Tiny pop-over menu */}
              {open && (
                <div className="absolute right-0 mt-2 w-48 origin-top-right rounded-lg bg-white dark:bg-default-900 shadow-lg ring-1 ring-default/20 dark:ring-default-800/20 p-2 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <Button
                      key={item.label}
                      size="sm"
                      asChild
                      onClick={() => setOpen(false)}
                    >
                      <Link href={item.href} className="font-bold">
                        {item.label}
                      </Link>
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
