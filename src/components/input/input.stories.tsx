import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';

export default {
    title: 'Components/Input',
    component: Input,
    argTypes: {
      placeholder: {
        control: { type: 'text', maxLength: 1 },
      },
      active: {
        control: { type: 'boolean', disable: true},
      },
    },
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
  render: ({ placeholder }) => {
  const plc = placeholder || 'A'
  return (
  <div style={{zoom: 4}}>
    <Input placeholder={plc} active={false} />
  </div>
  )}
}

export const Active: StoryObj<typeof Input> = {
  render: ({ placeholder }) => {
  const plc = placeholder || 'A'
  return (
  <div style={{zoom: 4}}>
    <Input placeholder={plc} active/>
  </div>
  )}
}
