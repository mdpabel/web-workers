import React, { useEffect } from "react";
import { expensive } from "./expensiveTask-worker";
import useAsync from "./useAsync";

const App = () => {
  const { run, data, status, error } = useAsync({ status: "pending" });

  useEffect(() => {
    return run(expensive());
  }, [run]);

  return (
    <div>
      <h1>A Component</h1>
      <h3>
        {status === "pending" ? "Loading..." : null}
        {status === "resolved" ? data : null}
        {status === "rejected" ? error : null}
      </h3>
      <h1>Another component</h1>
    </div>
  );
};

export default App;
