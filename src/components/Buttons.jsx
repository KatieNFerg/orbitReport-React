import satData from "./satData";
import './styling.css';

const Buttons = ({ filterByType, setSat, displaySat }) => {
    return (
  <div className="flex-container">
  {displaySat.map((sat, id) => {
    return(
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
    })}
      <button onClick={() => setSat(satData)}>
        All Orbits
      </button>
      </div>
    );
  };


export default Buttons;