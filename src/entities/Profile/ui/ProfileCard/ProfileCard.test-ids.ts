type ProfileCardDataTestIdProps = Partial<{
  username: string;
  age: string;
  firstName: string;
  lastName: string;
  country: string;
  city: string;
  currency: string;
}>;

const ProfileCardDataTestIds = Object.freeze({
  username: 'username',
  age: 'age',
  firstName: 'firstName',
  lastName: 'lastName',
  country: 'country',
  city: 'city',
  currency: 'currency',
} satisfies Required<ProfileCardDataTestIdProps>);

export { ProfileCardDataTestIds };
export type { ProfileCardDataTestIdProps };
