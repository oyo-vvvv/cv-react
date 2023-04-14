import React, {useState} from "react";
import NavBar from "../NavBar/NavBar";

const Toogle = () => {
  const [toogle, setToogle] = useState(false);

  const ActiveToogle = () => {
    setToogle(!toogle);
  };
  return (
    <div>
      <NavBar/>
      {toogle === true && <div>Coucou</div>}
      <button onClick={() => ActiveToogle()}>Active Toogle</button>
    </div>
  );
};

export default Toogle;
