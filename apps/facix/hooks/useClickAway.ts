import { type MutableRefObject, useEffect } from "react";

export const useClickAway = (ref: MutableRefObject<HTMLDivElement>, handleClick: (e: any) => void) => {
  useEffect(() => {
    const handleDocumentClick = (e: any) => {
      const node = ref?.current;
      const doc = (node && node.ownerDocument) || document;

      if (!node) return;
      if (doc.documentElement && doc.documentElement.contains(e.target) && !node.contains(e.target)) {
        handleClick(e);
        document.removeEventListener("click", handleDocumentClick);
      }
    };

    setTimeout(() => document.addEventListener("click", handleDocumentClick), 200);

    return () => document.removeEventListener("click", handleDocumentClick);
  }, [ref.current]);
};
