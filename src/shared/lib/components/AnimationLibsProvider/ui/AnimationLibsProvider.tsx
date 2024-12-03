import {
  ComponentType,
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

type SpringType = typeof import('@react-spring/web');
type GestureType = typeof import('@use-gesture/react');

type AnimationContextPayload = {
  Gesture?: GestureType;
  Spring?: SpringType;
  isLoaded?: boolean;
};

const AnimationContext = createContext<AnimationContextPayload>({});

// Both libs depends on each other
const getAsyncAnimationLibs = async () => {
  const springImport = import('@react-spring/web');
  const gestureImport = import('@use-gesture/react');

  return Promise.all([springImport, gestureImport]);
};

const useAnimationLibs = () => {
  return useContext(AnimationContext) as Required<AnimationContextPayload>;
};

type AnimationProviderProps = PropsWithChildren;

const AnimationLibsProvider = ({ children }: AnimationProviderProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const SpringRef = useRef<SpringType>();
  const GestureRef = useRef<GestureType>();

  useEffect(() => {
    getAsyncAnimationLibs().then(([Spring, Gesture]) => {
      SpringRef.current = Spring;
      GestureRef.current = Gesture;

      setIsLoaded(true);
    });
  }, []);

  const providerValue = useMemo(
    () => ({
      Gesture: GestureRef.current,
      Spring: SpringRef.current,
      isLoaded,
    }),
    [isLoaded],
  );

  return <AnimationContext.Provider value={providerValue}>{children}</AnimationContext.Provider>;
};

const withAnimationLibsProvider = <P extends object>(
  Component: ComponentType<P>,
): ComponentType<P> => {
  return function (props: P) {
    return (
      <AnimationLibsProvider>
        <Component {...props} />
      </AnimationLibsProvider>
    );
  };
};

export { useAnimationLibs, withAnimationLibsProvider, AnimationLibsProvider };
