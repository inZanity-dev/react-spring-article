import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { getRandomRGBAColor } from "../../utils/colors";
import { useRef, useState } from "react";

export const Example1 = () => {
	const [durationState, setDurationState] = useState(1000);
	const [boxSpring, boxApi] = useSpring(
		() => ({
			backgroundColor: "rgba(0,0,255,1)",
			config: {
				duration: durationState
			}
		}),
		[durationState]
	);
	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	const handleClick = () => {
		boxApi.start({
			backgroundColor: getRandomRGBAColor(true)
		});
	};

	return (
		<section style={exampleBoxStyle(true)}>
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 1: Testing Durations
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
			<input
				type="number"
				value={durationState}
				onChange={(e) => setDurationState(Number(e.target.value))}
				style={{
					padding: "0.5rem 1rem",
					margin: "1rem 0",
					fontSize: "1rem",
					textAlign: "center"
				}}
			/>
		</section>
	);
};
