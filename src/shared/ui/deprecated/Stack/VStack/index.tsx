import Flex, { FlexProps } from '../Flex';

type VStackProps<T extends keyof JSX.IntrinsicElements = 'div'> = Omit<FlexProps<T>, 'direction'>;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const VStack = <T extends keyof JSX.IntrinsicElements = 'div'>(props: VStackProps<T>) => {
  const { align = 'start' } = props;

  return <Flex {...props} direction="column" align={align} />;
};

export default VStack;
