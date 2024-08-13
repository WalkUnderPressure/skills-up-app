import generateAsyncComponent from 'shared/lib/helpers/generateAsyncComponent';
import { SignInFormProps } from './SignInForm';

const SignInFormAsync = generateAsyncComponent<SignInFormProps>(import('./SignInForm'));

export default SignInFormAsync;
