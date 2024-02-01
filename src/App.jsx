import { useEffect, useState } from "react";
import "./App.css";
import Trainings from "./Trainings";
import axios from "axios";
import Loading from "./Loading";

function App() {
  const [trainings, setTrainings] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchTrainings = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("http://localhost:3004/trainings");
      setTrainings(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const doneTraining = (id) => {
    setTrainings(
      trainings.filter((filterTraining) => filterTraining.id !== id)
    );
  };

  useEffect(() => {
    fetchTrainings();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : trainings.length === 0 ? (
        <div className="allCompleted">
          <h2>All Completed</h2>
          <button
            onClick={() => {
              fetchTrainings();
            }}
          >
            Refresh
          </button>
        </div>
      ) : (
        <Trainings trainings={trainings} doneTraining={doneTraining} />
      )}
    </div>
  );
}
export default App;
