import { useEffect, useState } from "react";

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    console.log("useEffect is called");

    const handleOnline = () => {
      console.log("online event is called");
      setIsOnline(true);
    };
    const handleOffline = () => {
      console.log("offline event is called");
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);

    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("offline", handleOffline);
      window.removeEventListener("online", handleOnline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
