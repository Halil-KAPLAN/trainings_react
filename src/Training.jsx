import PropTypes from "prop-types";

const Training = ({ id, title, content, price, doneTraining }) => {
  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2>{title}</h2>
        <h4>{price}₺</h4>
        <p>{content}</p>
      </div>
      <button
        className="cardDoneBtn"
        onClick={() => {
          doneTraining(id);
        }}
      >
        Done
      </button>
    </div>
  );
};

Training.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  content: PropTypes.string,
  price: PropTypes.number,
  doneTraining: PropTypes.func,
};

export default Training;
