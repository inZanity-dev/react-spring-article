import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { getRandomRGBAColor } from "../../utils/colors";
import { useRef } from "react";

export const Example2 = () => {
	const [boxSpring, boxApi] = useSpring(() => ({
		backgroundColor: "rgba(0,0,255,1)"
	}));
	const inputRef = useRef<HTMLInputElement>(null);
	const handleClick = () => {
		const newDuration = inputRef.current?.value
			? parseInt(inputRef.current.value, 10)
			: 1000;
		boxApi.start({
			backgroundColor: getRandomRGBAColor(true),
			config: { duration: newDuration }
		});
	};

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	return (
		<section style={exampleBoxStyle(true)} id="example-2">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 2: Changing the Config Through the API
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
				placeholder="1000"
				ref={inputRef}
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
