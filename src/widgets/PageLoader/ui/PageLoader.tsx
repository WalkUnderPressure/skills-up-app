import { Loader } from 'shared/ui/Loader';
import { HStack } from 'shared/ui/Stack';

type PageLoaderProps = {
  className?: string;
};

const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <HStack fullW justify="center" align="center" className={className}>
      <Loader />
    </HStack>
  );
};

export default PageLoader;
