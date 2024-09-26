import { animated } from "@react-spring/web";
import { useHideableButton } from "../../hooks/useHideableButton";

export const ScrollTopButton = () => {
	const { buttonStyle, buttonApi } = useHideableButton({});

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
				strokeWidth="5"
				strokeLinecap="round"
				strokeLinejoin="round"
			>
				<path d="M18 15l-6-6-6 6" />
			</svg>
		</animated.button>
	);
};
