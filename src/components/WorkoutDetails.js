import { useWorkoutContext } from "../hooks/useContexthook";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();

  const handleDelete = async () => {
    const url = process.env.REACT_APP_API_2;
    const res = await fetch(`${url}` + workout._id, {
      method: "DELETE",
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details sm:w-[70vw] lg:w-auto">
      <h4>{workout.title}</h4>
      <p>
        <strong>Game Division : </strong> {workout.load}
      </p>
      <p>
        <strong>Members : </strong> {workout.reps}
      </p>
      <p>
        Create :{" "}
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span
        className="hover:bg-rose-600 hover:text-white transition-all"
        onClick={handleDelete}
      >
        Delete
      </span>
    </div>
  );
};

export default WorkoutDetails;
