import { useEffect, useRef } from 'react';

import type { RefObject } from 'react';

type EventListenerParams<E> = {
  element?: E;
  options?: boolean | AddEventListenerOptions;
  isNeedAddHandler?: boolean;
};

// MediaQueryList Event based useEventListener interface
function useEventListener<K extends keyof MediaQueryListEventMap>(
  eventName: K,
  handler: (event: MediaQueryListEventMap[K]) => void,
  eventListenerParams?: EventListenerParams<RefObject<MediaQueryList>>,
): void;

// Window Event based useEventListener interface
function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  eventListenerParams?: EventListenerParams<null>,
): void;

// Element Event based useEventListener interface
function useEventListener<
  K extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  T extends Element = K extends keyof HTMLElementEventMap ? HTMLDivElement : SVGElement,
>(
  eventName: K,
  handler: ((event: HTMLElementEventMap[K]) => void) | ((event: SVGElementEventMap[K]) => void),
  eventListenerParams?: EventListenerParams<T>,
): void;

// Document Event based useEventListener interface
function useEventListener<K extends keyof DocumentEventMap>(
  eventName: K,
  handler: (event: DocumentEventMap[K]) => void,
  eventListenerParams?: EventListenerParams<RefObject<Document>>,
): void;

function useEventListener<
  KW extends keyof WindowEventMap,
  KH extends keyof HTMLElementEventMap & keyof SVGElementEventMap,
  KM extends keyof MediaQueryListEventMap,
  T extends HTMLElement | SVGAElement | MediaQueryList = HTMLElement,
>(
  eventName: KW | KH | KM,
  handler: (
    event:
      | WindowEventMap[KW]
      | HTMLElementEventMap[KH]
      | SVGElementEventMap[KH]
      | MediaQueryListEventMap[KM]
      | Event,
  ) => void,
  eventListenerParams?: EventListenerParams<RefObject<T> | null>,
) {
  const { element, options, isNeedAddHandler = true } = eventListenerParams || {};

  // Create a ref that stores handler
  const savedHandler = useRef(handler);

  useEffect(() => {
    savedHandler.current = handler;
  }, [handler]);

  useEffect(() => {
    // Define the listening target
    const targetElement: T | Window = element?.current ?? window;

    if (!(targetElement && targetElement.addEventListener) || !isNeedAddHandler) return;

    // Create event listener that calls handler function stored in ref
    const listener: typeof handler = (event) => {
      savedHandler.current(event);
    };

    targetElement.addEventListener(eventName, listener, options as AddEventListenerOptions);

    // Remove event listener on cleanup
    return () => {
      targetElement.removeEventListener(eventName, listener, options as AddEventListenerOptions);
    };
  }, [eventName, element, options, isNeedAddHandler]);
}

export default useEventListener;
