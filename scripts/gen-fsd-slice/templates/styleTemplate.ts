import getStyleName from '../helpers/getStyleName';

const styleTemplate = (componentName: string) => `.${getStyleName(componentName)} {

}`;

export default styleTemplate;
