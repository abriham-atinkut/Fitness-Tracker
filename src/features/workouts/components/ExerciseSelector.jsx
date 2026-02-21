import { useEffect, useState } from "react";
import fetchExercise from "../api/exercisesApi";

const ExerciseSelector = () => {
  const [search, setSearch] = useState("");
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    // fetch exercises when component mount
    const loadExercise = async () => {
      const data = await fetchExercise();
      setWorkouts(data);
    };
    loadExercise();
  }, []);

  let filteredWorkouts = workouts.filter((workout) => {
    return workout.toLowerCase().includes(search.toLowerCase());
  });

  let visibleWorkout = filteredWorkouts.slice(0, 4);

  return (
    <>
      <div className="flex justify-start">
        <div>
          <div className="mb-2">
            <input
              type="text"
              className="border-2 outline-none rounded-md w-full"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search exercise..."
            />
          </div>
          <div className="p-0 w-full">
            <div className="shadow-2xl p-2 rounded-md">
              {visibleWorkout?.map((workout, i) => (
                <div className="p-1 w-full">
                  <div key={i}>{workout}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExerciseSelector;
