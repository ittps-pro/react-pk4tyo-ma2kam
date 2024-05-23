import React, { useState, useEffect } from 'react';
import './index.css';
import { Button, Drawer, Row, Table, Tag, Typography } from 'antd';
import type { TableColumnsType } from 'antd';

import { useSWR, useSWRConfig } from 'swr';
import useUpdatedEffect from 'antd/es/typography/hooks/useUpdatedEffect';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

interface DataType2 {
  key: React.Key;
  name: string;
}

const columns: TableColumnsType<DataType> = [
  { title: 'Дата', dataIndex: 'date', key: 'date' },

  { title: 'ФИО', dataIndex: 'name', key: 'name' },
  Table.EXPAND_COLUMN,
  { title: 'Тип', dataIndex: 'type', key: 'type' },
  Table.SELECTION_COLUMN,
  { title: 'Адрес', dataIndex: 'address', key: 'address' },
  { title: 'Диспетчер', dataIndex: 'manager', key: 'manager' },
  { title: 'Исполнитель', dataIndex: 'employer', key: 'employer' },
  {
    title: 'Статус',
    dataIndex: 'status',
    key: 'status',
    render: (_) => <Tag color={_}>{'Статус'}</Tag>,
  },
  {
    title: '',
    render: () => <Button>Изменить</Button>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    date: '20.05.2024',
    time: '20:22',
    name: 'Иванов Иван Иванович',
    type: 2,
    address: 'улица Уличная, 45',
    description: 'Замена по гарантии',
    manager: 'Менеджерова А. Е.',
    employer: 'Петров И. А.',
    status: 'success',
  },
  {
    key: 2,
    date: '20.05.2024',
    time: '20:25',
    name: 'Иванов Иван Иванович',
    type: 2,
    address: 'улица Уличная, 45',
    description: 'Замена по гарантии',
    manager: 'Менеджерова А. Е.',
    employer: 'Петров И. А.',
    status: 'success',
  },
  {
    key: 3,
    date: '20.05.2024',
    time: '20:25',
    name: 'Иванов Иван Иванович',
    type: 2,
    address: 'улица Уличная, 45',
    description: 'Замена по гарантии',
    manager: 'Менеджерова А. Е.',
    employer: 'Петров И. А.',
    status: 'success',
  },
  {
    key: 3,
    date: '20.05.2024',
    time: '20:28',
    name: 'Иванов Иван Иванович',
    type: 2,
    address: 'улица Уличная, 45',
    description: 'Замена по гарантии',
    manager: 'Менеджерова А. Е.',
    employer: 'Петров И. А.',
    status: 'success',
  },
];

const App: React.FC = (items: any[]) => {
  // const [drawer, setDrawer] = useState();
  // useUpdatedEffect()
  return (
    <>
      <Drawer title={'List'} drawer open={true} footer={[]}>
        <Typography></Typography>
        <Table
          columns={columns}
          rowSelection={{}}
          expandable={{
            expandedRowRender: (record) => (
              <p style={{ margin: 0 }}>{record.description}</p>
            ),
          }}
          dataSource={data}
        />
      </Drawer>
      <Row>1</Row>
    </>
  );
};

export default App;
