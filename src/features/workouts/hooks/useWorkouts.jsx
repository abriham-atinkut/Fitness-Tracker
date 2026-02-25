import { create } from "zustand";

const useWorkout = create((set) => ({
  workouts: [],
  setWorkout: (exercise) =>
    set((state) => ({
      workouts: [...state.workouts, { ...exercise, id: crypto.randomUUID() }],
    })),
  clearWorkout: () => set((state) => ({ workouts: (state.workout = null) })),

  selectedWorkout: "",
  setSelectedWorkout: (query) =>
    set((state) => ({ selectedWorkout: (state.selectedWorkout = query) })),
}));

export default useWorkout;
