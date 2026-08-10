import Flex, { FlexProps } from '../Flex';

type HStackProps<T extends keyof JSX.IntrinsicElements = 'div'> = Omit<FlexProps<T>, 'direction'>;

/**
 * Use new UI elements from 'shared/ui/redesigned' folder
 * @deprecated
 */
const HStack = <T extends keyof JSX.IntrinsicElements = 'div'>(props: HStackProps<T>) => {
  return <Flex direction="row" {...props} />;
};

export default HStack;
