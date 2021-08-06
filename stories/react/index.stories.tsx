import React from 'react';
import Watermark from '@pansy/react-watermark';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Content } from './components';

export default {
  title: 'React',
  component: Watermark,
  parameters: {
    backgrounds: {
      values: [
        { name: 'red', value: '#f00' },
        { name: 'green', value: '#0f0' },
      ],
    },
  },
  argTypes: {
    text: { 
      description: '水印文案',
    },
    image: { 
      description: '水印图片',
    },
    monitor: { 
      description: '是否开启监视模式',
      default: true,
    },
  },
  args: {

  },
} as ComponentMeta<typeof Watermark>;


const Template: ComponentStory<typeof Watermark> = (args) => {
  return (
    <Watermark {...args}>
      <Content /> 
    </Watermark>
  )
};

export const Basic = Template.bind({});
Basic.args = {
  text: '测试水印'
};