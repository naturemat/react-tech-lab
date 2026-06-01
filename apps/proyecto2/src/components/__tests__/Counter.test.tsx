import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Counter } from "../Counter";

describe("Counter", () => {
  it("renderiza el valor inicial en cero", () => {
    render(<Counter />);

    expect(screen.getByTestId("counter-value")).toHaveTextContent("0");
    expect(screen.getByRole("button", { name: /incrementar/i })).toBeInTheDocument();
  });

  it("incrementa el valor al hacer clic en el botón", async () => {
    const user = userEvent.setup();
    render(<Counter />);

    const button = screen.getByRole("button", { name: /incrementar/i });

    await user.click(button);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("1");

    await user.click(button);
    await user.click(button);
    expect(screen.getByTestId("counter-value")).toHaveTextContent("3");
  });
});
