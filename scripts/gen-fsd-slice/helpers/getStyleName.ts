import toKebabcase from 'lodash.kebabcase';

const getStyleName = (name: string) => toKebabcase(name);

export default getStyleName;
