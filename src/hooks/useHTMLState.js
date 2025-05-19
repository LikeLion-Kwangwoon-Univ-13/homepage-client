import { useLayoutEffect, useRef, useState } from "react";

export default function useHTMLState() {
  const ref = useRef(null);
  const [state, setState] = useState();
  useLayoutEffect(() => {
    if (ref.current) {
      setState(ref?.current);
    }
  }, []);
  return { ref, state };
}
