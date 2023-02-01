import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-page">
      <h1>Oops Something Went Wrong!</h1>
      <h1>
        <span>{err.status}:</span>
        <span>{err.statusText}</span>
      </h1>
    </div>
  );
};

export default Error;
