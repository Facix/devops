import type { Dispatch, SetStateAction } from "react";
import { useEffect, useState } from "react";

type useResponse<T> = [result: T | null, loading: boolean, setResult: Dispatch<SetStateAction<T>>];

export default function use<T>(promise: (...v: any) => Promise<T>, ...v: any): useResponse<T> {
  const [loading, setLoading] = useState<boolean>(true);
  const [result, setResult] = useState<T | null>(null);

  useEffect(() => {
    setLoading(true);
    promise(...v).then((r) => {
      setResult(r);
      setLoading(false);
    });

    return () => setLoading(true);
  }, []);

  return [result, loading, setResult];
}
