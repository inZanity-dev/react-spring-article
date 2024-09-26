import { htmlDefault, bodyDefault, mainDefault } from "../styles/pageDefaults";
import { styleReset } from "../styles/styleReset";
import { IntroArticle } from "../components/articles/IntroArticle";
import { Intro } from "../components/content/Intro";
import { ConfigObjectArticle } from "../components/articles/ConfigObjectArticle";
import { Header } from "../components/utils/Header";
import { TableOfContents } from "../components/utils/TableOfContents";
import { EventsArticle } from "../components/articles/EventsArticle";
import { ScrollTopButton } from "../components/utils/ScrollTopButton";
import { NavigationButton } from "../components/utils/NavigationButton";

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
					<TableOfContents />
					<IntroArticle />
					<ConfigObjectArticle />
					<EventsArticle />
					<ScrollTopButton />
					<NavigationButton />
				</main>
			</body>
		</html>
	);
};
