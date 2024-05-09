import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import { useState } from "react";
import satData from './components/satData';


function App() {
 const [sat, setSat] = useState(satData);
 const displaySat = [...new Set(satData.map((data) => data.orbitType))];
 const filterByType = (currentType) => {
  const displaySat = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySat);
};
  return (
    <div>
      <>
      <Banner />
      <Buttons
      filterByType={filterByType}
      setSat={setSat}
      displaySat={displaySat} 
      />
      <Table sat = {sat}/>
      </>
    </div>
  );
}

export default App;