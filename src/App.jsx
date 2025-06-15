import React from "react";
import useAxios from "./hooks/useAxios";
import Router from "./router/Router";

const App = () => {
  const { data } = useAxios();
  return <Router />;
};

export default App;
