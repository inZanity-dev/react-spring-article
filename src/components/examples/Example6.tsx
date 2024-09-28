import { animated, SpringValue, to, useSprings } from "@react-spring/web";
import {
	exampleBoxStyle,
	exampleButtonStyle,
	outputStyle
} from "../../styles/blogStyles";
import { useRef } from "react";
import { getRandomRGBAColor } from "../../utils/colors";

export const Example6 = () => {
	const numBoxes = 3;

	const [boxSprings, boxApi] = useSprings(numBoxes, (index) => {
		const r = Number(index % 3 === 0) * 255;
		const g = Number(index % 3 === 1) * 255;
		const b = Number(index % 3 === 2) * 255;

		return {
			backgroundColor: `rgba(${r}, ${g}, ${b}, 1)`,
			opacity: 0.3,
			scale: 1,
			config: (key) => {
				if (key === "backgroundColor") {
					return { duration: 2000 };
				}
				return {};
			}
		};
	});

	const handleHover = (index: number) => {
		boxApi.start((i) => {
			if (i !== index) return;

			return {
				opacity: 1,
				scale: 1.15
			};
		});
	};

	const handleUnhover = (index: number) => {
		boxApi.start((i) => {
			if (i !== index) return;

			return {
				opacity: 0.3,
				scale: 1
			};
		});
	};

	const handleClick = (
		index: number,
	) => {
		boxApi.start((i) => {
			if (i !== index) return;

			return {
				backgroundColor: getRandomRGBAColor(1)
			};
		});
	};

	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	return (
		<section style={exampleBoxStyle(true)} id="example-6">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 6: Animating Multiple Elements with One Spring
			</p>

			<div
				style={{
					display: "flex",
					width: "100%",
					justifyContent: "space-around",
					marginBottom: "1rem"
				}}
			>
				{boxSprings.map((boxSpring, index) => (
					<div
						key={index}
						style={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center"
						}}
					>

					<animated.div
						key={index}
						style={{
							width: "120px",
							height: "120px",
							backgroundColor: boxSpring.backgroundColor,
							opacity: boxSpring.opacity,
							scale: boxSpring.scale,
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							cursor: "pointer",
							borderRadius: "10px",
							marginBottom: "1rem"
						}}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleHover(index)}
						onMouseLeave={() => handleUnhover(index)}
					>
						<p style={{ color: "#fff", fontWeight: "bold" }}>
							Click me
						</p>
					</animated.div>
					
					<animated.p style={outputStyle}>
				{boxSpring.backgroundColor.to((color) => color)}
			</animated.p>
					</div>
				))}
			</div>

			<span style={outputStyle}>
				Render Count : {renderCountRef.current}
			</span>
		</section>
	);
};
