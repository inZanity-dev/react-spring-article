import { animated, useSpring } from "@react-spring/web";
import {
	exampleBoxStyle,
	exampleButtonStyle,
	outputStyle
} from "../../styles/blogStyles";
import { useRef } from "react";

export const Example5 = () => {
	const unClickedColor = "rgba(255,0,0,1)";
	const clickedColor = "rgba(0,255,0,1)";

	const [boxSpring, boxApi] = useSpring(() => ({
		backgroundColor: unClickedColor,
		config: { duration: 0 }
	}));

	const handleClick = () => {
		const currentColor = boxSpring.backgroundColor.get();
		const isClicked = currentColor === clickedColor;
		boxApi.start({
			backgroundColor: isClicked ? unClickedColor : clickedColor
		});
	};

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	const currentState = boxSpring.backgroundColor.to((color) =>
		color === clickedColor ? "True" : "False"
	);

	return (
		<section style={exampleBoxStyle(true)} id="example-5">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 5: Toggling State with React Spring
			</p>

			<animated.div
				style={{
					width: "120px",
					height: "120px",
					backgroundColor: boxSpring.backgroundColor,
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					cursor: "pointer",
					borderRadius: "10px",
					marginBottom: "1rem"
				}}
				onClick={handleClick}
			>
				<p style={{ color: "#fff", fontWeight: "bold" }}>Click me</p>
			</animated.div>

			<button style={exampleButtonStyle} onClick={handleClick}>
				React Spring State -{" "}
				<animated.span>{currentState}</animated.span>
			</button>

			<animated.p style={outputStyle}>
				{boxSpring.backgroundColor.to((color) => color)}
			</animated.p>

			<span style={outputStyle}>
				Render Count : {renderCountRef.current}
			</span>
		</section>
	);
};
