// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Testimonial_19 from '../../../components/home/Testimonial/Testimonial_19';

const meta = {
  title: '组件/home/Testimonial/Testimonial_19',
  component: Testimonial_19,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Testimonial_19>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <div style={{ 
      padding: '20px',
      maxWidth: '100%',
      border: '1px solid #eee',
      borderRadius: '8px',
      height: '700px'
    }}>
      <Testimonial_19 />
    </div>
  ),
};
