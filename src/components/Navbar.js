import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from '../pages/_app';

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M12 3v1m0 16v1m8.485-8.485h1m-16.97 0h1m13.435 5.657l-.707.707m-11.314 0l-.707-.707m13.435-13.435l-.707.707m-11.314 0l-.707-.707" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="12" cy="12" r="5" fill="currentColor" />
        </svg>
      ) : (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      )}
    </button>
  );
}

export default function Navbar({ activeSection = 'home' }) {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const navLinks = [
		{ href: '#home', label: 'Home' },
		{ href: '#about', label: 'About' },
		{ href: '#resume', label: 'Resume' },
		{ href: '#skills', label: 'Skills' },
		{ href: '#projects', label: 'Projects' },
		{ href: '#contact', label: 'Contact' }
	];

	return (
		<header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${isScrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
			<nav className="max-w-6xl mx-auto px-4 py-4">
				<div className="flex items-center justify-between">
					<Link href="#home" className="text-xl font-semibold tracking-wide">
						<span className="text-white">Tushar Jain</span>
					</Link>
					
					{/* Desktop Navigation */}
					<ul className="hidden md:flex items-center gap-6 text-sm">
{navLinks.map((link) => (
								<li key={link.href}>
									<a 
										href={link.href} 
										className={`hover:text-blue-400 transition-colors${activeSection === link.href.slice(1) ? ' text-blue-400 font-semibold underline underline-offset-4' : ''}`}
									>
										{link.label}
									</a>
								</li>
							))}
					</ul>
					
					<div className="flex items-center gap-4">
						{/* Theme Toggle Button */}
						<ThemeToggle />

						<a 
							href="#contact" 
							className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
						>
							Hire me
						</a>
						
						{/* Mobile Menu Button */}
						<button
							className="md:hidden text-white p-2 focus:outline-none"
							onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
							aria-label="Toggle menu"
						>
							{isMobileMenuOpen ? (
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
								</svg>
							) : (
								<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
								</svg>
							)}
						</button>
					</div>
				</div>
				
				{/* Mobile Navigation Menu */}
				<div
					className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
						isMobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
					}`}
				>
					<ul className="flex flex-col space-y-4 py-4 border-t border-white/10">
						{navLinks.map((link) => (
							<li key={link.href}>
								<a
									href={link.href}
									className="block text-white hover:text-blue-400 transition-colors py-2"
									onClick={closeMobileMenu}
								>
									{link.label}
								</a>
							</li>
						))}
						<li>
							<a
								href="#contact"
								className="block bg-blue-600 text-white text-center px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
								onClick={closeMobileMenu}
							>
								Hire me
							</a>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
}


