import { createServerRunner } from '@aws-amplify/adapter-nextjs';
import amplifyConfig from '@/app/aws-exports';

export const { runWithAmplifyServerContext } = createServerRunner({
  config: amplifyConfig,
});