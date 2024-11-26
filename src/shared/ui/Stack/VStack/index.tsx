import Flex, { FlexProps } from '../Flex';

type VStackProps = Omit<FlexProps, 'direction'>;

const VStack = (props: VStackProps) => {
  const { align = 'start' } = props;

  return <Flex {...props} direction="column" align={align} />;
};

export default VStack;
