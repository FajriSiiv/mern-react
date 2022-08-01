import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useContexthook";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();

  useEffect(() => {
    const fecthWorkouts = async () => {
      const res = await fetch("/api/workouts");
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fecthWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((el) => <WorkoutDetails key={el._id} workout={el} />)}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
