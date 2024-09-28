export const useSpringCode = `const [boxSpring, boxApi] = useSpring(
    () => ({
	    backgroundColor: "rgba(0,0,255,1)"
    }),
    []
);`;

export const apiStartCode = `const handleClick = () => {
    boxApi.start({
        backgroundColor: getRandomRGBAColor(true)
    });
};`;

export const animatedCode = `<animated.div
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
</animated.p>`;

export const durationCode = `const [durationState, setDurationState] = useState(1000);
const [boxSpring, boxApi] = useSpring(
    () => ({
        backgroundColor: "rgba(0,0,255,1)",
        config: {
            duration: durationState
        }
    }),
    [durationState]
);`;

export const configAPICode = `const [boxSpring, boxApi] = useSpring(() => ({
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
};`;

export const eventsCode = `const [boxSpring, boxApi] = useSpring(() => ({
    backgroundColor: "rgba(0,0,255,1)",
    onStart(result, ctrl, item) {
        const logMessage = \`Animation started with value : \${result.value.backgroundColor}\`;
        if (onStartInfoRef.current) {
            onStartInfoRef.current.innerText = logMessage;
        }
    },
    onChange(result, ctrl, item) {
        const logMessage = \`Animation changed to value : \${result.value.backgroundColor}\`;
        if (onChangeInfoRef.current) {
            onChangeInfoRef.current.innerText = logMessage;
        }
    },
    onRest(result, ctrl, item) {
        const logMessage = \`Animation finished at value : \${result.value.backgroundColor}\`;
        if (onRestInfoRef.current) {
            onRestInfoRef.current.innerText = logMessage;
        }
    }
}));`;

export const complexAnimationCode = `const [boxSpring, boxApi] = useSpring(() => ({
    backgroundColor: "rgba(0,0,255,1)",
    animationStarted: false,
    config: { duration: 2000 },
    onStart(result) {
        const logMessage = \`Animation started with value : \{result.value.backgroundColor}\`;
        if (onStartInfoRef.current) {
            onStartInfoRef.current.innerText = logMessage;
        }
    },
    onRest(result, ctrl) {
        const logMessage = \`Animation finished at value : \${result.value.backgroundColor}\`;
        if (onRestInfoRef.current) {
            onRestInfoRef.current.innerText = logMessage;
        }
        if (result.value.animationStarted) {
            ctrl.start({ backgroundColor: getRandomRGBAColor(1) });
        }
    }
}));

const handleClick = () => {
    if (boxSpring.animationStarted.get()) {
        boxApi.set({ animationStarted: false });
        boxApi.stop();
    } else {
        boxApi.set({ animationStarted: true });
        boxApi.start({ backgroundColor: getRandomRGBAColor(1) });
    }
};`;

export const springStateCode = `const unClickedColor = "rgba(255,0,0,1)";
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

const currentState = boxSpring.backgroundColor.to((color) =>
    color === clickedColor ? "True" : "False"
)`;

export const springStateButtonCode = `<button
    style={exampleButtonStyle}
    onClick={handleClick}
>
    React Spring State -{" "}
    <animated.span>
        {currentState}
    </animated.span>
</button>`;

export const multipleSpringsCode = `const numBoxes = 3;

const [boxSprings, boxApi] = useSprings(numBoxes, (index) => {
    const r = Number(index % 3 === 0) * 255;
    const g = Number(index % 3 === 1) * 255;
    const b = Number(index % 3 === 2) * 255;

    return {
        backgroundColor: \`rgba(\${r}, \${g}, \${b}, 1)\`,
        opacity: 0.3,
        scale: 1,
        config: (key) => {
            if (key === "backgroundColor") {
                return { duration: 2000 };
            }
            return {};
        }
    };
});`;

export const springsHandlerCode = `const handleHover = (index: number) => {
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
};`