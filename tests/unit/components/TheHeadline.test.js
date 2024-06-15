import { render, screen } from "@testing-library/vue";
import TheHeadline from "@/components/TheHeadline.vue";
import { expect } from "vitest";

describe("TheHeadLine", () => {
  it("displays introductory action text", () => {
    vi.useFakeTimers();
    render(TheHeadline);

    const actionPhrase = screen.getByRole("heading", {
      name: /build for everyone/i,
    });
    expect(actionPhrase).toBeInTheDocument();
    vi.useRealTimers();
  });

  it("changes action verb at a consistent interval", () => {
    vi.useFakeTimers();
    const mock = vi.fn();
    vi.stubGlobal("setInterval", mock);

    render(TheHeadline);

    expect(mock).toHaveBeenCalled();
    vi.useRealTimers();
  });
});
