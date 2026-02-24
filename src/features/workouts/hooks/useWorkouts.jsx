import { create } from "zustand";

const useWorkout = create((set) => ({
  workouts: [],
  setWorkout: (exercise) =>
    set((state) => ({
      workouts: [...state.workouts, { ...exercise, id: crypto.randomUUID() }],
    })),
}));

export default useWorkout;
