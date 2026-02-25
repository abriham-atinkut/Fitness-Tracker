import useWorkout from "../hooks/useWorkouts";

const AddedExercisesList = () => {
  const workouts = useWorkout((state) => state.workouts);
  const clearWorkout = useWorkout((state) => state.clearWorkout);
  const savedWorkouts = () => {
    // localStorage.setItem("savedWorkouts", [...workouts]);
    clearWorkout();
    console.log("first");
  };
  // console.log(localStorage.getItem("savedWorkouts"));

  return (
    <div>
      <div className="mt-8 text-center bg-slate-200 rounded-lg p-2">
        {workouts?.map((workout) => (
          <div key={workout.id} className="bg-slate-300 m-2">
            <ul>
              <li className="flex gap-4">
                <p>{workout.selectedWorkout}</p>
                <p>
                  {workout.sets}x{workout.reps}
                </p>
                <p>{workout.weight}</p>
              </li>
            </ul>
          </div>
        ))}
      </div>

      <div className="text-center my-2">
        <button
          className="border-2 w-full py-2 rounded-lg"
          onClick={() => savedWorkouts()}
        >
          Save Workout
        </button>
      </div>
    </div>
  );
};

export default AddedExercisesList;
