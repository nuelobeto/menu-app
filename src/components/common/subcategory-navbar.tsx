import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

type Props = {
	links: {
		label: string;
		url: string;
	}[];
};
export const SubcategoryNavbar = ({ links }: Props) => {
	const [currentHash, setHash] = useState('');
	const containerRef = useRef(null);

	useEffect(() => {
		if (links.length === 0) return;
		if (currentHash === '') {
			setHash(links[0].url);
		}
	}, [links, setHash, currentHash]);

	useEffect(() => {
		if (links.length === 0) return;

		const handleScroll = () => {
			const sections = document.querySelectorAll('section[id]');
			const scrollY = window.scrollY;
			sections.forEach((current: Element) => {
				if (current === null) return;
				const sectionHeight = (current as HTMLElement).offsetHeight;
				const sectionTop = (current as HTMLElement).offsetTop - 200;
				const sectionId = current.getAttribute('id') || '';

				if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
					if (sectionId != currentHash) {
						setHash(sectionId);
					}
				}
			});
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [links, currentHash]);

	useEffect(() => {
		const autoScrollLink = () => {
			const activeLinkElement = document.querySelector(
				`nav #${currentHash}-link`
			) as HTMLElement;

			if (containerRef.current && activeLinkElement) {
				if (activeLinkElement.offsetLeft < 0) {
					(containerRef.current as HTMLElement).scrollLeft = 0;
				} else {
					(containerRef.current as HTMLElement).scrollLeft =
						activeLinkElement.offsetLeft;
				}
			}
		};

		window.addEventListener('scrollend', autoScrollLink);

		return () => {
			window.removeEventListener('scrollend', autoScrollLink);
		};
	}, [currentHash]);

	return (
		<nav className="sticky top-[144px] z-50">
			<div
				ref={containerRef}
				className="w-full h-full flex items-center whitespace-nowrap overflow-scroll justify-between gap-2.5 px-5 pt-0 pb-4 hide-scroll scroll-smooth bg-neutral-950"
			>
				{links.map((link, index) => (
					<motion.a
						id={`${link.url}-link`}
						key={index}
						href={`#${link.url}`}
						whileTap={{ scale: 0.7 }}
						transition={{ type: 'spring', stiffness: 400, damping: 17 }}
						className={cn(
							'capitalize whitespace-nowrap h-9 p-2.5 rounded-lg border font-semibold text-base text-neutral-500 flex items-center',
							currentHash === link.url
								? 'bg-emerald-600 border-emerald-600 text-neutral-950'
								: 'border-emerald-600 text-emerald-600'
						)}
					>
						{link.label}
					</motion.a>
				))}
			</div>
		</nav>
	);
};
