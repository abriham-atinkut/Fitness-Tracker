import { useState } from "react";
import useWorkout from "../hooks/useWorkouts";
const ExerciseInputs = () => {
  const [sets, setSets] = useState("");
  const [reps, setReps] = useState("");
  const [weight, setWeight] = useState("");

  const addWorkouts = useWorkout((state) => state.addWorkouts);
  const selectedWorkout = useWorkout((state) => state.selectedWorkout);
  const updateSelectedWorkout = useWorkout(
    (state) => state.updateSelectedWorkout,
  );

  const formHandler = (e) => {
    e.preventDefault();
    if (
      !sets.trim() ||
      !reps.trim() ||
      !weight.trim() ||
      !selectedWorkout.trim()
    )
      return;

    let addWorkout = { sets, reps, weight, selectedWorkout };
    addWorkouts(addWorkout);

    setSets("");
    setReps("");
    setWeight("");
    updateSelectedWorkout("");
  };

  return (
    <>
      <form onSubmit={formHandler}>
        <input
          type="text"
          className="border-2 w-full rounded-md mb-2"
          value={selectedWorkout}
          placeholder="Select Exercise"
          readOnly
        />
        <div className="flex mb-3">
          <div>
            <label htmlFor="" className="block mb-1">
              Sets
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={sets}
              onChange={(e) => setSets(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-1">
              Reps
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={reps}
              onChange={(e) => setReps(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-1">
              weight (kg)
            </label>
            <input
              type="number"
              className="border-2 w-24 mr-1 rounded-md"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
        </div>
        <button type="submit" className="border-2 rounded-md w-full">
          Add Exercises
        </button>
      </form>
    </>
  );
};

export default ExerciseInputs;
