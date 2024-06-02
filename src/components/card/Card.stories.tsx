import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './';

export default {
    title: 'Components/Card',
    component: Card,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'typeme',
        values: [
          { name: 'typeme', value: '#24252D' },
        ],
      },
    },
  } as Meta<typeof Card>
  
  export const Primary: StoryObj<typeof Card> = {
    render: () => (
    <div style={{zoom: 2}}>
      <Card>This is a card</Card>
    </div>
    )
}
