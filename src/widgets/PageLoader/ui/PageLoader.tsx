import { Loader } from '~/shared/ui/deprecated/Loader';
import { HStack } from '~/shared/ui/redesigned/Stack';

type PageLoaderProps = PropsWithClassName;

const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <HStack fullW justify="center" align="center" className={className}>
      <Loader />
    </HStack>
  );
};

export default PageLoader;
