// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero_13_3 from '../../../components/home/Hero/Hero_13_3';

const meta = {
  title: '组件/home/Hero/Hero_13_3',
  component: Hero_13_3,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Hero_13_3>;

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
      <Hero_13_3 />
    </div>
  ),
};
