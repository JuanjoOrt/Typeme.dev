import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
      layout: 'centered',
    },
  } as Meta<typeof Button>
  
export const Default: StoryObj<typeof Button> = {
    render: () => <Button>Test button</Button>
}
