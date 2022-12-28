import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);

  return <div>Whoops, something went wrong.</div>;
};

export default ErrorBoundary;
