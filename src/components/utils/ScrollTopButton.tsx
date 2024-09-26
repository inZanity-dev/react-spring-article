import { animated, AnimatedProps, useSpring } from "@react-spring/web";
import { useEffect, CSSProperties } from "react";

export const ScrollTopButton = () => {
	const [buttonSprings, buttonApi] = useSpring(() => ({
		opacity: 0,
		config: { duration: 200 }
	}));

	const buttonStyle: AnimatedProps<CSSProperties> = {
		position: "fixed",
		bottom: "2rem",
		right: "2rem",
		width: "3rem",
		height: "3rem",
		padding: "1rem",
		backgroundColor: "#0366d6",
		color: "#fff",
		border: "none",
		borderRadius: "50%",
		cursor: "pointer",
		opacity: buttonSprings.opacity,
		pointerEvents: buttonSprings.opacity.to((o) =>
			o === 0 ? "none" : "auto"
		),
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

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		document.body.style.cursor = 'default';
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
			↑
		</animated.button>
	);
};
