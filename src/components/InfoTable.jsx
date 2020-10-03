import React from 'react';
import {dataInfo} from '../state/infoTable'
import { Table, Space, Tag  } from 'antd';
import 'antd/dist/antd.css';
import { red, volcano, gold, yellow, lime, green,} from '@ant-design/colors';

export const InfoTable = () => {

  const getColor = (text) => {
    let numberValue = Number(text)
    switch(numberValue) {
      case 6: 
        return (<Tag color={green[5]}>{text}</Tag>);
      case 5: 
        return (<Tag color={green[3]}>{text}</Tag>);
      case 4: 
       return (<Tag color={lime[3]}>{text}</Tag>);
      case 3: 
        return (<Tag color={gold[4]}>{text}</Tag>);
      case 2: 
        return (<Tag color={red[4]}>{text}</Tag>);
      case 1: 
        return (<Tag color={red[7]}>{text}</Tag>);
      case 0: 
        return (<Tag color={red[9]}>{text}</Tag>);
      default:
        return (text)
    }
  }

  const columns = [
    {
      title: '',
      dataIndex: 'FIELD1',
      key: 'FIELD1', 
    },
    {
      title: '',
      dataIndex: 'FIELD2',
      key: 'FIELD2',
      render: (text) => {
        return getColor(text)
      } 
    },
    {
      title: 'Effectiveness',
      dataIndex: 'Effectiveness',
      key: 'Effectiveness', 
    },
    {
      title: 'Est. Avg. Shots Stopped By Armor Before Killing',
      dataIndex: 'Est. Avg. Shots Stopped By Armor Before Killing',
      key: 'Est. Avg. Shots Stopped By Armor Before Killing', 
    },
    {
      title: '',
      dataIndex: 'FIELD5',
      key: 'FIELFIELD5D1', 
    },

  ]

  return(
    <>
      <Space style={{ margin: 50 }}>
      <Table columns={columns} 
      dataSource={dataInfo}>
      </Table>
      </Space>
    </>
  )
}