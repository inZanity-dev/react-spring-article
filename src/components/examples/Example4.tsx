import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { getRandomRGBAColor } from "../../utils/colors";
import { useRef } from "react";

export const Example4 = () => {
	const onStartInfoRef = useRef<HTMLParagraphElement>(null);
	const onRestInfoRef = useRef<HTMLParagraphElement>(null);
	const animationStartedRef = useRef(false);

	const [boxSpring, boxApi] = useSpring(() => ({
		backgroundColor: "rgba(0,0,255,1)",
		config: { duration: 2000 },
		onStart(result) {
			const logMessage = `Animation started with value : ${result.value.backgroundColor}`;
			if (onStartInfoRef.current) {
				onStartInfoRef.current.innerText = logMessage;
			}
		},
		onRest(result, ctrl) {
			const logMessage = `Animation finished at value : ${result.value.backgroundColor}`;
			if (onRestInfoRef.current) {
				onRestInfoRef.current.innerText = logMessage;
			}
			if (animationStartedRef.current) {
				ctrl.start({ backgroundColor: getRandomRGBAColor(true) });
			}
		}
	}));

	const handleClick = () => {
		if (animationStartedRef.current) {
			animationStartedRef.current = false;
			boxApi.stop();
		} else {
			animationStartedRef.current = true;
			boxApi.start({ backgroundColor: getRandomRGBAColor(true) });
		}
	};

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	return (
		<section style={exampleBoxStyle(true)} id="example-3">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 4: Creating a Complex Animation
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

			<p style={outputStyle} ref={onRestInfoRef}>
				onRest info will be displayed here
			</p>
		</section>
	);
};
