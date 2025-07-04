// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Team_12 from '../../../components/home/Team/Team_12';

const meta = {
  title: '组件/home/Team/Team_12',
  component: Team_12,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'home 类别的组件',
  },
} satisfies Meta<typeof Team_12>;

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
      <Team_12 />
    </div>
  ),
};
