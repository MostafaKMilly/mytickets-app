import React from "react";
import { client, getRequest } from "./api/axios";
import { TGetRequest } from "./types";

function App() {
  console.log(process.env.REACT_APP_API_URI);

  const getLabels = async () => {
    try {
      const req: TGetRequest = {
        url: "/labels",
      };
      await getRequest(req);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      MY TICKETS APP
      <button onClick={getLabels}>labels</button>
    </div>
  );
}

export default App;
