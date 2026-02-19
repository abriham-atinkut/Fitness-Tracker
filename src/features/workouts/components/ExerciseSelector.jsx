import { useEffect } from "react";
import fetchExercise from "../api/exercisesApi";

const ExerciseSelector = () => {
  console.log("first");
  useEffect(() => {
    const logeData = async () => {
      const data = await fetchExercise();
      console.log("useEffect clg");
      console.log(data);
    };
    logeData();
  }, []);
  return <div>ExerciseSelector</div>;
};

export default ExerciseSelector;
