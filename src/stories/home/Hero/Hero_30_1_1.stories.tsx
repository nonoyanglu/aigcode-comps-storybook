// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Hero_30_1_1 from '../../../components/home/Hero/Hero_30_1_1';

const meta = {
  title: '组件/home/Hero/Hero_30_1_1',
  component: Hero_30_1_1,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Hero_30_1_1>;

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
      <Hero_30_1_1 />
    </div>
  ),
};
