import { useEffect, useState } from "react";
import ProgressCards from "../components/ProgressCards";
import RecentWorkouts from "../components/RecentWorkouts";
import VolumeChart from "../components/VolumeChart";
import WorkoutChart from "../components/WorkoutChart";
import ProgressChart from "../components/ProgressChart";

import useActivity from "../hooks/useActivity";

const DashboardPage = () => {
  const activity = useActivity();
  const [selectedExercise, setSelectedExercise] = useState("");
  useEffect(() => {
    if (activity.length > 0 && !selectedExercise) {
      setSelectedExercise(activity[0]?.selectedWorkout);
    }
  }, [activity, selectedExercise]);

  const uniqueExercises = Array.from(
    new Set(activity.map((ex) => ex.selectedWorkout)),
  );
  console.log(activity[0]?.selectedWorkout);
  console.log("dashboard", activity);
  return (
    <div className="lg:m-4">
      <div className="min-h-[90vh]">
        <ProgressCards activity={activity} />
        <div className="text-center mt-4">
          <label htmlFor="exercise-select" className="font-bold mr-2">
            Select Exercise:
          </label>
          <select
            id="exercise-select"
            value={selectedExercise}
            onChange={(e) => setSelectedExercise(e.target.value)}
            className="border p-1 rounded"
          >
            {uniqueExercises.map((exercise) => (
              <option key={exercise} value={exercise}>
                {exercise}
              </option>
            ))}
          </select>
        </div>
        <ProgressChart
          activity={activity}
          selectedExercise={selectedExercise}
        />
      </div>
    </div>
  );
};

export default DashboardPage;
