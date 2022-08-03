import { useEffect } from "react";
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";
import { useWorkoutContext } from "../hooks/useContexthook";

const Home = () => {
  const { workouts, dispatch } = useWorkoutContext();
  useEffect(() => {
    const fecthWorkouts = async () => {
      const url = process.env.REACT_APP_API;
      const res = await fetch(url);
      const json = await res.json();

      if (res.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: json });
      }
    };

    fecthWorkouts();
  }, [dispatch]);

  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="workouts lg:w-[70vw] lg:px-6">
        {workouts &&
          workouts.map((el) => <WorkoutDetails key={el._id} workout={el} />)}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
