import { RefCallback, useCallback, useMemo, useState } from "react";

export const useClientRect = (): [DOMRect, RefCallback<Element>] => {
  const initDOMRect = useMemo(() => new DOMRect(0), []);
  const [measureRect, setRect] = useState<DOMRect>(initDOMRect);
  const measureRef: RefCallback<Element> = useCallback(
    (node: Element) => {
      if (node !== null) {
        setRect(node.getBoundingClientRect());
      } else {
        setRect(initDOMRect);
      }
    },
    [initDOMRect]
  );

  return [measureRect, measureRef];
};
