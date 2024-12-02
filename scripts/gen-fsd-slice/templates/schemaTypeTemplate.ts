import createSchemaTypeName from '../helpers/createSchemaTypeName';

const schemaTypeTemplate = (slice: string) => {
  const schemaTypeName = createSchemaTypeName(slice);

  return `
type ${schemaTypeName} = {
  isTmp?: boolean;
};

export type { ${schemaTypeName} };
`;
};

export default schemaTypeTemplate;
