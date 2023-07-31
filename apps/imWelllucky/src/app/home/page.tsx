import { HomeContainer } from "./styles";

export default function Home({ children }: { children: React.ReactNode }){
	return (
		<HomeContainer>
			<h1>Hello WellluckY</h1>
			<h2>Hello World!</h2>
			{children}
		</HomeContainer>
	);
};
