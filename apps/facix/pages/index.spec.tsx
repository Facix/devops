import { render } from "test/componentUtils";

import HomePage from "./";

describe("HomePage", () => {
  it("should render the greeting", () => {
    const { getByText } = render(<HomePage />);
    const greeting = getByText(/Hello! devops/i);

    expect(greeting).toBeInTheDocument();
  });
});
