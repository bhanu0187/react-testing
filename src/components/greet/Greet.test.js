import Greet from "./Greet";

describe("Greet", () => {
	const { render, screen } = require("@testing-library/react");
	test("Renders correctly", () => {
		render(<Greet />);
		const textElement = screen.getByText(/greetings/i);
		expect(textElement).toBeInTheDocument();
	});

	test("Renders With a name", () => {
		render(<Greet name='Bhanu' />);
		const textElement = screen.getByText(/greetings bhanu/i);
		expect(textElement).toBeInTheDocument();
	});
});
