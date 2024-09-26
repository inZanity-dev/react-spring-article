import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { getRandomRGBAColor } from "../../utils/colors";
import { useRef } from "react";

export const Example4 = () => {
	const onStartInfoRef = useRef<HTMLParagraphElement>(null);
	const onChangeInfoRef = useRef<HTMLParagraphElement>(null);
	const onRestInfoRef = useRef<HTMLParagraphElement>(null);

	const [boxSpring, boxApi] = useSpring(() => ({
		backgroundColor: "rgba(0,0,255,1)",
		onStart(result, ctrl, item) {
			const logMessage = `Animation started with value : ${result.value.backgroundColor}`;
			if (onStartInfoRef.current) {
				onStartInfoRef.current.innerText = logMessage;
			}
		},
		onChange(result, ctrl, item) {
			const logMessage = `Animation changed to value : ${result.value.backgroundColor}`;
			if (onChangeInfoRef.current) {
				onChangeInfoRef.current.innerText = logMessage;
			}
		},
		onRest(result, ctrl, item) {
			const logMessage = `Animation finished at value : ${result.value.backgroundColor}`;
			if (onRestInfoRef.current) {
				onRestInfoRef.current.innerText = logMessage;
			}
		}
	}));

	const handleClick = () => {
		boxApi.start({
			backgroundColor: getRandomRGBAColor(true)
		});
	};

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	return (
		<section style={exampleBoxStyle}>
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 4: Using the Spring Events
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

			<p style={outputStyle} ref={onStartInfoRef}>
				onStart info will be displayed here
			</p>

			<p style={outputStyle} ref={onChangeInfoRef}>
				onChange info will be displayed here
			</p>

			<p style={outputStyle} ref={onRestInfoRef}>
				onRest info will be displayed here
			</p>
		</section>
	);
};
