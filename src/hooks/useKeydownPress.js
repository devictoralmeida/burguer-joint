import { useRef, useEffect } from "react";

export const useKeydownPress = (keyId, callbackFunction) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleKeydownPress = (event) => {
      if (event.key === keyId) {
        if (callbackFunction) callbackFunction(ref.current);
      }
    };

    window.addEventListener("keydown", handleKeydownPress);

    return () => {
      window.removeEventListener("keydown", handleKeydownPress);
    };
  }, []);

  return ref;
};
