import { useContext } from "react";
import { WorkoutContext } from "../context/workoutcontext";

export const useWorkoutContext = () => {
  const context = useContext(WorkoutContext);

  if (!context) {
    throw Error("useWorkoutsContext must be used inside an workoutcontexthook");
  }

  return context;
};
