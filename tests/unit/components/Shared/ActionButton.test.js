import { render, screen } from "@testing-library/vue";
import ActionButton from "@/components/Shared/ActionButton.vue";
import { describe } from "vitest";

describe("ActionButton", () => {
  it("renders button text", () => {
    render(ActionButton, {
      props: {
        text: "Click",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click/i,
    });

    expect(button).toBeInTheDocument();
  });

  it("applies class according to type to button", () => {
    render(ActionButton, {
      props: {
        text: "Click",
        type: "primary",
      },
    });

    const button = screen.getByRole("button", {
      name: /click/i,
    });

    expect(button).toHaveClass("primary");
  });
});
