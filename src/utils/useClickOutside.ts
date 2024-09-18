import { RefObject, useCallback, useEffect, useRef } from "react";

const useClickOutside = (
  onTrigger: (arg: MouseEvent) => void,
  exclude?: RefObject<HTMLElement>
) => {
  const ref = useRef(null);

  const clickOutside = useCallback(
    (e: MouseEvent) => {
      if (!ref.current || !exclude?.current) return;

      if (
        !(ref.current! as any).contains(e.target) &&
        !(exclude.current as any).contains(e.target)
      ) {
        onTrigger?.(e);
        console.log(ref.current, exclude.current);
      }
    },
    [exclude, onTrigger]
  );

  useEffect(() => {
    document.addEventListener("click", clickOutside);

    return () => {
      document.removeEventListener("click", clickOutside);
    };
  });

  return ref;
};

export default useClickOutside;
