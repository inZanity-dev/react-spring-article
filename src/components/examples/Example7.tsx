import { animated, useSpring } from "@react-spring/web";
import { exampleBoxStyle, outputStyle } from "../../styles/blogStyles";
import { useRef } from "react";
import { getRandomRGBAColor } from "../../utils/colors";

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

            <AnimatedCards />

            <span style={outputStyle}>
                Render Count : {renderCountRef.current}
            </span>
        </section>
    );
};

const Card = ({ 
    style, 
    title, 
    content, 
    backgroundColor, 
    textColor
}) => {
    return (
        <animated.div
            style={{
                ...style,
                backgroundColor: backgroundColor,
                position: 'relative',
                width: '150px',
                height: '250px',
                margin: "0 5px",
                borderRadius: "10px",
                border: "1px solid #000",
                transformStyle: 'preserve-3d',
                cursor: "pointer"
            }}
        >
            <animated.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    fontSize: '12px',
                    color: textColor,
                    borderRadius: '10px',
                    border: '1px solid #000',
                    alignItems: 'center',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center'
                }}
            >
                <h2>{title}</h2>
                <p>{content}</p>
            </animated.div>

            <animated.div
                style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    fontSize: '10px',
                    color: textColor,
                    borderRadius: '10px',
                    border: '1px solid #000',
                    alignItems: 'center',
                    backfaceVisibility: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    transform: 'rotateY(180deg)'
                }}
            >
                <h2>Back side of {title}</h2>
            </animated.div>
        </animated.div>
    );
};

const AnimatedCards = () => {
    const cards = [
        { title: "Card 1", content: "This is the first card" },
        { title: "Card 2", content: "This is the second card" },
        { title: "Card 3", content: "This is the third card" },
        { title: "Card 4", content: "This is the fourth card" },
        { title: "Card 5", content: "This is the fifth card" },
        { title: "Card 6", content: "This is the sixth card" },
    ];

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "space-around",
                marginTop: "5px",
                marginBottom: "5px",
                perspective: "700px",
            }}
        >
            {cards.map((card, index) => {
                const flipInProgressRef = useRef(false);

                const [cardSpring, cardApi] = useSpring(() => ({
                    transform: "rotateY(0deg)",
                    backgroundColor: "rgba(0,0,255,1)", 
                    color: "#fff",
                    config: { 
                        duration: 500
                    }
                }));

                const handleClick = () => {
                    if (flipInProgressRef.current) return;

                    flipInProgressRef.current = true;

                    const newBackgroundColor = getRandomRGBAColor(1);

                    const newTextColor = cardSpring.backgroundColor.to((color) => {
                        const isLight = isLightColor(color);
                        return isLight ? "#000" : "#fff";
                    });

                    cardApi.start({
                        transform: cardSpring.transform.get() === "rotateY(0deg)" 
                            ? "rotateY(180deg)" 
                            : "rotateY(0deg)",
                        backgroundColor: newBackgroundColor,
                        color: newTextColor,
                        onRest: () => {
                            flipInProgressRef.current = false;
                        },
                    });
                };

                return (
                    <div 
                        key={index}
                        onClick={handleClick}
                    >
                        <Card
                            style={cardSpring}
                            title={card.title}
                            content={card.content}
                            backgroundColor={cardSpring.backgroundColor}
                            textColor={cardSpring.color}
                        />
                    </div>
                );
            })}
        </div>
    );
};

const isLightColor = (color: string) => {
    const rgba = color
        .replace(/^rgba?\(|\s+|\)$/g, '')
        .split(',');

    const r = parseInt(rgba[0], 10);
    const g = parseInt(rgba[1], 10);
    const b = parseInt(rgba[2], 10);

    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

    return luminance > 145;
};