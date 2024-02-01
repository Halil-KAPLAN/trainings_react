import PropTypes from "prop-types";
import Training from "./Training";

const Trainings = ({ trainings, doneTraining }) => {
  return (
    <div className="trainingMain">
      <div>
        <h2>Trainings</h2>
      </div>
      <div className="cardContainer">
        {trainings.map((training) => (
          <Training
            key={training.id}
            {...training}
            doneTraining={doneTraining}
          />
        ))}
      </div>
    </div>
  );
};

Trainings.propTypes = {
  trainings: PropTypes.array,
  doneTraining: PropTypes.func,
};

export default Trainings;
