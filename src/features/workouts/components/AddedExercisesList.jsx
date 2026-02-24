import useWorkout from "../hooks/useWorkouts";

const AddedExercisesList = () => {
  const workouts = useWorkout((state) => state.workouts);
  return (
    <>
      <div className="mt-8 text-center bg-slate-200 rounded-lg p-2">
        {workouts?.map((workout) => (
          <div key={workout.id} className="bg-slate-300 m-2">
            <ul>
              <li className=" space-x-4">
                <span>{workout.sets}</span>
                <span>{workout.reps}</span>
                <span>{workout.weight}</span>
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default AddedExercisesList;
