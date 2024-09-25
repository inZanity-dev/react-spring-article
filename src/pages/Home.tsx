import { htmlDefault, bodyDefault, mainDefault } from "../styles/pageDefaults";
import { styleReset } from "../styles/styleReset";
import { IntroArticle } from "../components/IntroArticle";
import { Header } from "../components/Header";
import { Intro } from "../components/Intro";

export const Home = () => {
	return (
		<html style={htmlDefault}>
			<head>
				<meta charSet="utf-8" />
				<title>React Spring Examples</title>
				<meta name="description" content="Bun, Elysia & React" />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/assets/ico/favicon.ico" />
				<style>{styleReset}</style>
			</head>
			<body style={bodyDefault}>
				<main style={mainDefault}>
					<Header />
					<Intro />
					<IntroArticle />
				</main>
			</body>
		</html>
	);
};
