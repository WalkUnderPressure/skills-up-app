import { PopupDirection } from '../types';

import cls from './popup.module.scss';

const mapDirectionToClass: Record<PopupDirection, string> = Object.freeze({
  'bottom-left': cls['bottom-left'],
  'bottom-right': cls['bottom-right'],
  'top-right': cls['top-right'],
  'top-left': cls['top-left'],
});

export { mapDirectionToClass };
