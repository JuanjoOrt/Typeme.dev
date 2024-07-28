import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { useState } from 'react';

const EMPTY_ONCHANGE = () => {}

export default {
    title: 'Components/Input',
    component: Input,
    parameters: {
      layout: 'centered',
      backgrounds: {
        default: 'typeme',
        values: [
          { name: 'typeme', value: '#24252D' },
        ],
      },
    },
  } as Meta<typeof Input>
  
export const Default: StoryObj<typeof Input> = {
  
  render: () => {
    const [value, setValue] = useState('')
    return (
    <div style={{zoom: 4}}>
      <Input placeholder={'A'} onChange={(val) => setValue(val)} value={value} isActive />
    </div>
    )}
}

export const Correct: StoryObj<typeof Input> = {
  render: () => (
    <div style={{zoom: 4}}>
      <Input placeholder='A' value='A' isCorrect onChange={EMPTY_ONCHANGE} />
    </div>
    )
}

export const Wrong: StoryObj<typeof Input> = {
  render: () => (
    <div style={{zoom: 4}}>
      <Input placeholder='A' value='A' isWrong onChange={EMPTY_ONCHANGE} />
    </div>
    )
}