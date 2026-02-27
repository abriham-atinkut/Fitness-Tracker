import { render, screen, waitFor } from "@testing-library/react";
import ExerciseSelector from "../ExerciseSelector";
import useWorkout from "../../hooks/useWorkouts";
import fetchExercise from "../../api/exercisesApi";

test("render without crashing", () => {
  render(<ExerciseSelector />);
});

jest.mock("../../hooks/useWorkouts");
jest.mock("../../api/exercisesApi");

describe("ExercieseSelector", () => {
  const mockUpdateSelectoryWorkout = jest.fn();
  // console.log(mockUpdateSelectoryWorkout)
  beforeEach(() => {
    fetchExercise.mockResolvedValue([
      "Push Up",
      "Pull Up",
      "Squat",
      "Bench Press",
    ]);
    useWorkout.mockReturnValue(mockUpdateSelectoryWorkout);
  });

  test("render fetched exercises", async () => {
    render(<ExerciseSelector />);
    await waitFor(() => {
      expect(screen.getByText("Push Up")).toBeInTheDocument();
    });
  });
});
