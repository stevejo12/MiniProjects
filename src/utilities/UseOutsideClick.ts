import React, { useEffect } from "react"

const UseOutsideClick = (
  ref: React.RefObject<HTMLDivElement>, 
  callback: Function
) => {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent): void => {
      if(!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback(event);
    }

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    }
  }, [ref, callback])
}

export default UseOutsideClick;