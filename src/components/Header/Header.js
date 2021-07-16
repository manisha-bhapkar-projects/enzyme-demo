import React, { useState } from "react";

const Header = (props) => {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((count) => count + 1);
  };

  const getData = () => {};
  
  return (
    <div>
      <h3 className="title">{props.name}</h3>
      <button onClick={increment}>Add Number</button>
      <h3 className="total">{count}</h3>
    </div>
  );
};

export default Header;
