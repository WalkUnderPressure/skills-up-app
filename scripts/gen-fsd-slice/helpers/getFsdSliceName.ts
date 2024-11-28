import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';

const getFsdSliceName = (name: string) => upperFirst(camelCase(name));

export default getFsdSliceName;
