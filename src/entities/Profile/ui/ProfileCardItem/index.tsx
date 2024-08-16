import { Text } from 'shared/ui/Text';
import classNames from 'shared/lib/classNames';
import * as cls from './ProfileCardItem.module.scss';

type ProfileCardItemProps = {
  title: string;
  value: string;
  className?: string;
};

const ProfileCardItem = (props: ProfileCardItemProps) => {
  const { title, value, className } = props;

  return (
    <div className={classNames(cls['item'], {}, [className])}>
      <Text text={title} />
      <span>:</span>
      <Text text={value} />
    </div>
  );
};

export default ProfileCardItem;
