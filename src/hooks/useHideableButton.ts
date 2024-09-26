import { useSpring, AnimatedProps } from "@react-spring/web";
import { CSSProperties, useEffect } from "react";

export const useHideableButton = ({
	bottom = "0rem",
	background = "#0366d6"
}) => {
	const [buttonSprings, buttonApi] = useSpring(() => ({
		opacity: 0,
		config: { duration: 200 }
	}));

	const buttonStyle: AnimatedProps<CSSProperties> = {
		position: "fixed",
		bottom,
		right: "1rem",
		width: "3rem",
		height: "3rem",
		padding: "1rem",
		background,
		color: "#fff",
		border: "none",
		borderRadius: "50%",
		cursor: "pointer",
		opacity: buttonSprings.opacity,
		pointerEvents: buttonSprings.opacity.to((o) =>
			o === 0 ? "none" : "auto"
		),
		display: "flex",
		justifyContent: "center",
		alignItems: "center"
	};

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 300) {
				buttonApi.start({ opacity: 0.3 });
			} else {
				buttonApi.start({ opacity: 0 });
			}
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [buttonApi]);

	const handleButtonHover = () => {
		buttonApi.start({ opacity: 1 });
	};

	const handleButtonUnhover = () => {
		if (window.scrollY > 300) {
			buttonApi.start({ opacity: 0.3 });
		} else {
			buttonApi.start({ opacity: 0 });
		}
	};

	return {
		buttonStyle,
		buttonSprings,
		buttonApi,
		handleButtonHover,
		handleButtonUnhover
	};
};
