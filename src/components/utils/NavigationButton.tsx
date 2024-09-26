import { animated } from "@react-spring/web";
import { useHideableButton } from "../../hooks/useHideableButton";
import { useState } from "react";
import { tocData } from "../../data/tocData"; // Update the path as necessary
import { CSSProperties } from "react";
import { tocHeadingStyle, tocLinkStyle, tocListItemStyle, tocListStyle, tocSubLinkStyle, tocSubListItemStyle, tocSubListStyle } from "../../styles/tocStyle";

const menuContainerStyle: CSSProperties = {
	position: "fixed",
	bottom: "8rem",
	right: "1rem",
	backgroundColor: "#f7f7f7",
	borderRadius: "8px",
	boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
	padding: "1rem",
	maxHeight: "50vh",
	overflowY: "auto",
	width: "300px"
};

export const NavigationButton = () => {
	const { buttonStyle, handleButtonHover, handleButtonUnhover } =
		useHideableButton({
			bottom: "4.5rem",
			background: "#D6369F"
		});

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const toggleMenu = () => {
		setIsMenuOpen((prev) => !prev);
	};

	return (
		<>
			<animated.button
				onClick={toggleMenu}
				onMouseEnter={handleButtonHover}
				onMouseLeave={handleButtonUnhover}
				style={buttonStyle}
			>
				{/* Your SVG icon */}
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

			{isMenuOpen && (
				<nav style={menuContainerStyle}>
				<h3 style={tocHeadingStyle}>Table of Contents</h3>
				<ul style={tocListStyle}>
					{tocData.map((item) => (
						<li key={item.id} style={tocListItemStyle}>
							<a href={`#${item.id}`} style={tocLinkStyle}>
								{item.label}
							</a>
							{item.subsections && item.subsections.length > 0 && (
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
			</nav>
			)}
		</>
	);
};
