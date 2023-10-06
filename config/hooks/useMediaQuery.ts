import { useEffect, useMemo, useState } from "react";
import config from "../confg";

type MediaQuery =
  | "xsDown"
  | "smDown"
  | "mdDown"
  | "lgDown"
  | "xlDown"
  | "xxlDown";

const useMediaQuery = (query: MediaQuery) => {
  const [matches, setMatches] = useState<boolean>(false);

  const handelCheckQuery = useMemo(
    () =>
      (query: MediaQuery): string => {
        return {
          xsDown: `(max-width:${config.breakpoints.xs}px)`,
          smDown: `(max-width:${config.breakpoints.sm}px)`,
          mdDown: `(max-width:${config.breakpoints.md}px)`,
          lgDown: `(max-width:${config.breakpoints.lg}px)`,
          xlDown: `(max-width:${config.breakpoints.xs}px)`,
          xxlDown: `(max-width:${config.breakpoints.xxl}px)`,
        }[query];
      },
    []
  );

  useEffect(() => {
    const media = window.matchMedia(handelCheckQuery(query));
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
};

export default useMediaQuery;
