import { screen } from "@testing-library/react";
import render from "@/utils/test/render";
import Profile from "./Profile";

describe("Profile", () => {
  beforeEach(async () => {
    await render(<Profile />);
  });

  it("Profile 컴포넌트에는 내 이름이 출력되어야 한다.", () => {
    const name = screen.getByText("KIM JUNG SOO");
    expect(name).toBeInTheDocument();
  });

  it("Profile 컴포넌트에는 한줄 소개가 있어야한다.", () => {
    const intro = screen.getByTestId("intro");
    expect(intro).toBeInTheDocument();
  });

  it("Profile 컴포넌트에는 내 프로필 사진이 있어야 한다.", () => {
    const profile = screen.getByAltText("profile_img");
    expect(profile).toBeInTheDocument();
  });
});
