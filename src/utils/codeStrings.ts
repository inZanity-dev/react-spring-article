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

export const complexAnimationCode = `const onStartInfoRef = useRef<HTMLParagraphElement>(null);
const onRestInfoRef = useRef<HTMLParagraphElement>(null);
const animationStartedRef = useRef(false);

const [boxSpring, boxApi] = useSpring(() => ({
    backgroundColor: "rgba(0,0,255,1)",
    config: { duration: 2000 },
    onStart(result) {
        const logMessage = \`Animation started with value : \${result.value.backgroundColor}\`;
        if (onStartInfoRef.current) {
            onStartInfoRef.current.innerText = logMessage;
        }
    },
    onRest(result, ctrl) {
        const logMessage = \`Animation finished at value : \${result.value.backgroundColor}\`;
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
};`
