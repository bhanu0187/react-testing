import Greet from "./Greet";
const { render, screen } = require("@testing-library/react");
test("Greet renders correctly", () => {
	render(<Greet />);
	const textElement = screen.getByText(/greetings/i);
	expect(textElement).toBeInTheDocument();
});

test("Greet renders With a name", () => {
	render(<Greet name='Bhanu' />);
	const textElement = screen.getByText(/greetings bhanu/i);
	expect(textElement).toBeInTheDocument();
});
