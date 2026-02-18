import AddedExercisesList from "./AddedExercisesList";
import ExerciseInputs from "./ExerciseInputs";
import ExerciseSelector from "./ExerciseSelector";


const WorkoutForm = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <div>
          <h1>Log Workout</h1>
          <div>
            <ExerciseSelector/>
            <ExerciseInputs />
            <AddedExercisesList />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkoutForm;
