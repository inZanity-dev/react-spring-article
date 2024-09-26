import { animated } from "@react-spring/web";
import { useHideableButton } from "../../hooks/useHideableButton";

export const ScrollTopButton = () => {
	const { buttonStyle, handleButtonHover, handleButtonUnhover } =
		useHideableButton({ bottom: "1rem" });

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	return (
		<animated.button
			onClick={scrollToTop}
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
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M18 15l-6-6-6 6" />
			</svg>
		</animated.button>
	);
};
