import { useState } from "react";
import { useWorkoutContext } from "../hooks/useContexthook";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutContext();
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);
  const [emptyFields, setEmptyFields] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const url = process.env.REACT_APP_API;
    const workout = { title, load, reps };
    const res = await fetch(`${url}`, {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();

    if (!res.ok) {
      setError(json.error);
      setEmptyFields(json.emptyFields);
    }

    if (res.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      setEmptyFields([]);
      dispatch({ type: "CREATE_WORKOUT", payload: json });
    }
  };

  return (
    <form
      className="w-[90vw] sm:w-[70vw] flex justify-center items-center flex-col mx-auto lg:w-[25vw]"
      onSubmit={handleSubmit}
    >
      <h3 className="font-bold text-xl sm:text-3xl mb-10">Adding your team</h3>
      <label>Name : </label>
      <input
        type="text"
        name="Name"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes("Name") ? "error" : ""}
        placeholder="Name Team.."
      />
      <label>Game Division : </label>
      <input
        type="text"
        name="load"
        onChange={(e) => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes("load") ? "error" : ""}
        placeholder="Game Division.."
      />
      <label>Members : </label>
      <input
        type="text"
        name="reps"
        onChange={(e) => setReps(e.target.value)}
        value={reps}
        className={emptyFields.includes("reps") ? "error" : ""}
        placeholder="Members.."
      />

      <button className="hover:bg-green-600 hover:text-slate-100 transition-all">
        Add Team
      </button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default WorkoutForm;
