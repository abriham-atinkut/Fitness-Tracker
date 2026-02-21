import AddedExercisesList from "./AddedExercisesList";
import ExerciseInputs from "./ExerciseInputs";
import ExerciseSelector from "./ExerciseSelector";

const WorkoutForm = () => {
  return (
    <>
      <div className="flex justify-center h-[90vh] ">
        <div className="mt-10">
          <h1 className="text-center mb-8">Log Workout</h1>
          <div>
            <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1">
              <ExerciseSelector />
              <ExerciseInputs />
            </div>
            <AddedExercisesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
