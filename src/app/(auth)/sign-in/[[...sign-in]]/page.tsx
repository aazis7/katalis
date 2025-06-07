import { SignIn as ClerkSignIn } from '@clerk/nextjs';
import { MaxWidthWrapper } from '~/components/MaxWidthWrapper';

export default function SignIn() {
  return (
    <MaxWidthWrapper className="flex min-h-screen max-w-md flex-col items-center justify-center">
      <ClerkSignIn />
    </MaxWidthWrapper>
  );
}
