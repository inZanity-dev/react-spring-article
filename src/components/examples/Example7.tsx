import { animated, useSpring, useSprings } from "@react-spring/web";
import {
	exampleBoxStyle,
	outputStyle
} from "../../styles/blogStyles";
import { useRef } from "react";

export const Example7 = () => {
	
	const renderCountRef = useRef(0);
	renderCountRef.current += 1;

	return (
		<section style={exampleBoxStyle(true)} id="example-7">
			<p
				style={{
					fontSize: "1.4rem",
					fontWeight: "bold",
					marginBottom: "1rem",
					color: "#333"
				}}
			>
				Example 7: Your Animation
			</p>

            {/* Your code here */}

			<span style={outputStyle}>
				Render Count : {renderCountRef.current}
			</span>
		</section>
	);
};
