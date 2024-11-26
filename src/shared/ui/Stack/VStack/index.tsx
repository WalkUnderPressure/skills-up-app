import Flex, { FlexProps } from '../Flex';

type VStackProps<T extends keyof JSX.IntrinsicElements = 'div'> = Omit<FlexProps<T>, 'direction'>;

const VStack = <T extends keyof JSX.IntrinsicElements = 'div'>(props: VStackProps<T>) => {
  const { align = 'start' } = props;

  return <Flex {...props} direction="column" align={align} />;
};

export default VStack;
