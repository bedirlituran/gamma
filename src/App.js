import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <div className="flex items-center justify-center">
        <div className="ml-40"><Card /></div>
        
        <div className="-mt-10 bg-inherit -p-8"><Card /></div>
        <div className="mr-40">  <Card /></div>
        
      </div>
    </div>
  );
};

export default App;
