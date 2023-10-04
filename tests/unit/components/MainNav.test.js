import { render, screen } from "@testing-library/vue";

import MainNav from "@/components/MainNav.vue";
import { describe, expect, it } from "vitest";

describe("MainNav", () => {
  it("displays company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Hao Careers");
    expect(companyName).toBeInTheDocument();
  });

  it("displays menu items for navigation", () => {
    render(MainNav);
    const navigationMenuItems = screen.getAllByRole("listitem");
    const navigationMenuTexts = navigationMenuItems.map(
      (item) => item.textContent,
    );
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Life at Hao Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});
