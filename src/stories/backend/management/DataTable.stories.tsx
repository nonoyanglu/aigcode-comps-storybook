// 自动生成的故事文件 - 请勿手动修改
import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import DataTable from '../../../components/backend/management/DataTable';

const meta = {
  title: '组件/backend/management/DataTable',
  component: DataTable,
  parameters: {
    layout: 'fullscreen',
    componentSubtitle: 'backend 类别的组件',
  },
} satisfies Meta<typeof DataTable>;

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
      <DataTable />
    </div>
  ),
};
