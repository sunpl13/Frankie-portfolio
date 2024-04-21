import { screen } from "@testing-library/react";
import render from "@/utils/test/render";
import GNB from ".";

describe("GNB 컴포넌트", () => {
  it("GNB 컴포넌트에는 Project와 Profile이 있어야 한다.", async () => {
    await render(<GNB />);

    const profile = screen.getByText("Profile");
    const project = screen.getByText("Project");

    expect(profile).toBeInTheDocument();
    expect(project).toBeInTheDocument();
  });
});
