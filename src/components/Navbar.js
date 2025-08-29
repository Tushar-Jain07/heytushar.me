import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const onScroll = () => setIsScrolled(window.scrollY > 10);
		window.addEventListener('scroll', onScroll, { passive: true });
		return () => window.removeEventListener('scroll', onScroll);
	}, []);

	return (
		<header className={`fixed top-0 left-0 right-0 z-40 transition-colors ${isScrolled ? 'bg-black/70 backdrop-blur border-b border-white/10' : 'bg-transparent'}`}>
			<nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
				<Link href="#home" className="text-xl font-semibold tracking-wide">
					<span className="text-white">Tushar Jain</span>
				</Link>
				<ul className="hidden md:flex items-center gap-6 text-sm">
					<li><a href="#home" className="hover:text-blue-400 transition-colors">Home</a></li>
					<li><a href="#about" className="hover:text-blue-400 transition-colors">About</a></li>
					<li><a href="#resume" className="hover:text-blue-400 transition-colors">Resume</a></li>
					<li><a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a></li>
					<li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a></li>
				</ul>
				<a href="#contact" className="md:inline-block hidden bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">Hire me</a>
			</nav>
		</header>
	);
}


