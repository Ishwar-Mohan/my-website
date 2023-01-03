import React, { useState } from "react";

function Home() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <div>
       <h1
        onClick={handleClick}
        style={{ color: active ? "blue" : "white" }}
       >
        Welcome to my blog
      </h1>
    </div>
  );
}