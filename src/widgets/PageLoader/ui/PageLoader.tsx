import { ToggleFeatures } from '~/entities/FeatureFlags';
import { Loader as LoaderDeprecated } from '~/shared/ui/deprecated/Loader';
import { Loader } from '~/shared/ui/redesigned/Loader';
import { HStack } from '~/shared/ui/redesigned/Stack';

type PageLoaderProps = PropsWithClassName;

const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;

  return (
    <ToggleFeatures
      feature="redesign"
      on={
        <HStack fullW fullH justify="center" align="center" className={className}>
          <Loader />
        </HStack>
      }
      off={
        <HStack fullW justify="center" align="center" className={className}>
          <LoaderDeprecated />
        </HStack>
      }
    />
  );
};

export default PageLoader;
