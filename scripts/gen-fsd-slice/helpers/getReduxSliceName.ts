import lowerFirst from 'lodash.lowerfirst';
import camelCase from 'lodash.camelcase';

const getReduxSliceName = (name: string) => lowerFirst(camelCase(name));

export default getReduxSliceName;
