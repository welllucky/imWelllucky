interface Props {
	children?: React.ReactNode;
}

const Header = ({ children }: Props) => {
	return (
		<div>
			<h1>Header</h1>
			{children}
		</div>
	);
};

export { Header };
