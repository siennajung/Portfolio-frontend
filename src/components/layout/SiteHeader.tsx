'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Container from '@/components/Container';

export function SiteHeader() {
  const pathname = usePathname();

  const baseClass = "text-sm font-medium transition-colors";
  const activeClass = "text-text-h";
  const inactiveClass = "text-text hover:text-text-h";

  return (
    <header className="bg-header sticky top-0 z-50 h-16 select-none">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-text-h text-base font-medium">
            Sienna Jung
          </Link>

          {/* Desktop Nav */}
          <nav className="flex items-center gap-8">
            <Link
              href="/projects"
              className={`${baseClass} ${pathname === '/projects' ? activeClass : inactiveClass}`}
            >
              Projects
            </Link>

            <Link
              href="/experiences"
              className={`${baseClass} ${pathname === '/experiences' ? activeClass : inactiveClass}`}
            >
              Experiences
            </Link>

            <Link
              href="/recommendations"
              className={`${baseClass} ${pathname === '/recommendations' ? activeClass : inactiveClass}`}
            >
              Recommendations
            </Link>
          </nav>
        </div>
      </Container>
    </header>
  );
}