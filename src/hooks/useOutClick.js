import { useRef, useEffect } from "react";

export const useOutClick = (callbackFunction) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleOutClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (callbackFunction) callbackFunction();
      }
    };

    window.addEventListener("mousedown", handleOutClick);

    return () => {
      window.removeEventListener("mousedown", handleOutClick);
    };
  }, []);

  return ref;
};
