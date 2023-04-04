import { useRef } from "react";

const safeDocument: Document | null = typeof document !== "undefined" ? document : null;

/**
 * Usage:
 * const [blockScroll, allowScroll] = useScrollBlock();
 */
const useScrollLock = () => {
  const scrollBlocked = useRef<boolean>();
  const html = safeDocument?.documentElement;
  const body = safeDocument?.body;

  const blockScroll = () => {
    if (!body || !html || !body.style || scrollBlocked.current) return;

    html.style.overflow = "hidden"; /* [2] */

    scrollBlocked.current = true;
  };

  const allowScroll = () => {
    if (!body || !html || !body.style || !scrollBlocked.current) return;

    html.style.overflow = "";

    scrollBlocked.current = false;
  };

  return [blockScroll, allowScroll];
};

export default useScrollLock;
