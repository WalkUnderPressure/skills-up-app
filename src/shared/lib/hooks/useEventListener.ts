import { MutableRefObject, useEffect, useRef } from 'react';

import castArray from 'shared/lib/helpers/castArray';

type EventListenerParams = {
  element?: MutableRefObject<HTMLElement>;
  options?: AddEventListenerOptions;
  isNeedAddListener?: boolean;
};

type EventName = keyof WindowEventMap;

function useEventListener(
  eventName: Array<EventName> | EventName,
  handler: EventListenerOrEventListenerObject,
  params: EventListenerParams = {},
) {
  const { element, options = {}, isNeedAddListener = true } = params;

  // Create a ref that stores handler
  const savedHandler = useRef<EventListenerOrEventListenerObject>(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement = element?.current ?? window;

    if (!targetElement?.addEventListener || !isNeedAddListener) {
      return () => {};
    }

    // Create event listener that calls handler function stored in ref
    const listener = savedHandler.current;

    const eventNames = castArray<string>(eventName).filter(Boolean);

    eventNames.forEach((listenerEventName) => {
      targetElement.addEventListener(listenerEventName, listener, options);
    });

    // Remove event listener on cleanup
    return () => {
      eventNames.forEach((listenerEventName) => {
        targetElement.removeEventListener(listenerEventName, listener, options);
      });
    };
  }, [eventName, element, options, isNeedAddListener]);
}

export default useEventListener;
