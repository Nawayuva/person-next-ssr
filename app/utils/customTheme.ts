// theme.ts
import { Theme } from '@aws-amplify/ui-react';

export const customTheme: Theme = {
  name: 'my-custom-theme',
  tokens: {
    components: {
      button: {
        backgroundColor: { value: '#1D4ED8' },
        color: { value: '#FFFFFF' },
        _hover: {
          backgroundColor: { value: '#1E40AF' },
        },
      },
    },
  },
};
