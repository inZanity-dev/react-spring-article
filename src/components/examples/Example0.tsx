import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { getRandomRGBAColor } from "../../utils/colors";
import { useRef, useState } from "react";

export const Example0 = () => {
	const [boxSpring, boxApi] = useSpring(() => ({
		backgroundColor: "rgba(0,0,255,1)"
	}));

	const [buttonState, setButtonState] = useState(false);

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	const handleClick = () => {
		boxApi.start({
			backgroundColor: getRandomRGBAColor(true)
		});
	};

	return (
		<section style={exampleBoxStyle(true)} id="example-0">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 0: Try Me Out!
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

			<animated.p style={outputStyle}>
				{boxSpring.backgroundColor.to((color) => color)}
			</animated.p>

			<span style={outputStyle}>
				Render Count : {renderCountRef.current}
			</span>
			<button
				onClick={() => setButtonState((prev) => !prev)}
				style={{
					padding: "0.5rem 1rem",
					backgroundColor: "#333",
					color: "#fff",
					borderRadius: "6px",
					border: "none",
					cursor: "pointer",
					marginTop: "1rem",
					width: "25%"
				}}
			>
				React State - {buttonState ? "True" : "False"}
			</button>
		</section>
	);
};
