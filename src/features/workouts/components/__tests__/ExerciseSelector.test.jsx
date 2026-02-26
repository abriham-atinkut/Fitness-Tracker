import { render } from "@testing-library/react";
import ExerciseSelector from "../ExerciseSelector";

test("render without crashing", () => {
  render(<ExerciseSelector />);
});
