import { animated, useSpring } from "@react-spring/web";
import { useHideableButton } from "../../hooks/useHideableButton";
import { tocData } from "../../data/tocData";
import {
	menuContainerStyle,
	tocHeadingStyle,
	tocLinkStyle,
	tocListItemStyle,
	tocListStyle,
	tocSubLinkStyle,
	tocSubListItemStyle,
	tocSubListStyle
} from "../../styles/tocStyle";
import { useEffect, useRef } from "react";

export const NavigationButton = () => {
	const { buttonStyle, handleButtonHover, handleButtonUnhover } =
		useHideableButton({
			bottom: "4.5rem",
			background: "#D6369F"
		});

	const [containerSprings, containerApi] = useSpring(() => ({
		opacity: 0,
		config: { duration: 200 }
	}));

	const toggleMenu = () => {
		if (containerSprings.opacity.get() === 0) {
			containerApi.start({ opacity: 1 });
		} else {
			containerApi.start({ opacity: 0 });
		}
	};

	const menuRef = useRef<HTMLElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY <= 300) {
				containerApi.start({ opacity: 0 });
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			const path = event.composedPath();
			if (menuRef.current && !path.includes(menuRef.current)) {
				containerApi.start({ opacity: 0 });
			}
		};

		window.addEventListener("scroll", handleScroll);
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [containerApi]);

	return (
		<>
			<animated.button
				onClick={toggleMenu}
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonUnhover}
				style={buttonStyle}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="4"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<line x1="3" y1="4" x2="21" y2="4" />
					<line x1="3" y1="12" x2="21" y2="12" />
					<line x1="3" y1="20" x2="21" y2="20" />
				</svg>
			</animated.button>

			<animated.nav
				ref={menuRef}
				style={menuContainerStyle(containerSprings)}
			>
				<h3 style={tocHeadingStyle}>Table of Contents</h3>
				<ul style={tocListStyle}>
					{tocData.map((item) => (
						<li key={item.id} style={tocListItemStyle}>
							<a href={`#${item.id}`} style={tocLinkStyle}>
								{item.label}
							</a>
							{item.subsections &&
								item.subsections.length > 0 && (
									<ul style={tocSubListStyle}>
										{item.subsections.map((subItem) => (
											<li
												key={subItem.id}
												style={tocSubListItemStyle}
											>
												<a
													href={`#${subItem.id}`}
													style={tocSubLinkStyle}
												>
													{subItem.label}
												</a>
											</li>
										))}
									</ul>
								)}
						</li>
					))}
				</ul>
			</animated.nav>
		</>
	);
};
