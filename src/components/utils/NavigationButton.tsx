import { animated } from "@react-spring/web";
import { useHideableButton } from "../../hooks/useHideableButton";

export const NavigationButton = () => {
	const { buttonStyle, buttonApi } = useHideableButton({
		bottom: "6rem",
		background: "#D6369F "
	});

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const handleHover = () => {
		buttonApi.start({ opacity: 1 });
	};

	const handleUnhover = () => {
		if (window.scrollY > 300) {
			buttonApi.start({ opacity: 0.3 });
		} else {
			buttonApi.start({ opacity: 0 });
		}
	};

	return (
		<animated.button
			onClick={scrollToTop}
			onMouseEnter={handleHover}
			onMouseLeave={handleUnhover}
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
	);
};
