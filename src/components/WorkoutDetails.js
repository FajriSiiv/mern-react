import { useWorkoutContext } from "../hooks/useContexthook";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutContext();
  const handleDelete = async () => {
    const res = await fetch("/api/workouts/" + workout._id, {
      method: "DELETE",
    });
    const json = await res.json();

    if (res.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p>
        <strong>Load (kg) : </strong> {workout.load}
      </p>
      <p>
        <strong>Reps (kg) : </strong> {workout.reps}
      </p>
      <p>
        Create :{" "}
        {formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}
      </p>
      <span onClick={handleDelete}>Delete</span>
    </div>
  );
};

export default WorkoutDetails;
