import generateAsyncComponent from '~/shared/lib/helpers/generateAsyncComponent';
import { AddCommentaryFormProps } from './AddCommentaryForm';

const AddCommentaryForm = generateAsyncComponent<AddCommentaryFormProps>(
  import('./AddCommentaryForm'),
);

export default AddCommentaryForm;
