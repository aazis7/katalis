import { SignUp as ClerkSignUp } from '@clerk/nextjs';
import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

export default function SignUp() {
  return (
    <MaxWidthWrapper className="flex min-h-screen max-w-md flex-col items-center justify-center">
      <ClerkSignUp />
    </MaxWidthWrapper>
  );
}
