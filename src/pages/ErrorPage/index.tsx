import { useEffect, useState } from "react";
import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const routeError = useRouteError();
  const [errorMsg, setErrorMsg] = useState<Error>();

  useEffect(() => {
    if (routeError instanceof Error) {
      setErrorMsg(routeError as unknown as Error);
    }
  }, [routeError]);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{errorMsg?.name}</i>
        <i>{errorMsg?.message}</i>
      </p>
    </div>
  );
};
