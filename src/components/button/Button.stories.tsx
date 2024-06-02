import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './';

export default {
    title: 'Components/Button',
    component: Button,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'typeme',
        values: [
          { name: 'typeme', value: '#24252D' },
        ],
      },
    },
  } as Meta<typeof Button>
  
  export const Primary: StoryObj<typeof Button> = {
    render: () => (
    <div style={{zoom: 2}}>
      <Button onClick={() => console.log('click')}>Test button</Button>
    </div>
    )
}

export const Secundary: StoryObj<typeof Button> = {
  render: () => (
  <div style={{zoom: 2}}>
    <Button type='ghost' onClick={() => console.log('click')}>Test button</Button>
  </div>
  )
}
