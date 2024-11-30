enum SignInErrorCode {
  INCORRECT_DATA = 'INCORRECT_DATA',
}

interface SignInSchema {
  username: string;
  password: string;
  isLoading: boolean;
  isFailed: boolean;
  errorCode?: Nullable<SignInErrorCode>;
}

export { SignInErrorCode };
export type { SignInSchema };
