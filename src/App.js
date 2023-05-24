import React from "react";
import HomePage from "./components/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import Buttontailwind from "./components/Buttontailwind";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
          </Routes>
        </BrowserRouter>
      </div>

      {/* <div className="App"> */}
      {/* {<Buttontailwind></Buttontailwind>} */}

      {/* <HomePage /> */}
      {/* <CollectionPage /> */}
      {/* </div> */}
    </>
  );
}

export default App;
