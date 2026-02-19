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
      <div>
        <div>
          <input
            type="text"
            className="border-2 outline-none rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div>
          {visibleWorkout?.map((workout, i) => (
            <div key={i}>{workout}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ExerciseSelector;
