import React, { useState } from 'react';
import {keyData} from '../state/keyData'
import { Table, Button, Space  } from 'antd';
import 'antd/dist/antd.css';


export const AmmoTable = () => {
  const [data, setData] = useState(keyData)
  const [keysSelect, setKeysSelect] = useState([])
  const [rowsSelect, setRowsSelect] = useState([])
  const [buttonComprasionDisable, setButtonComprasionDisable] = useState(true)
  const [buttonCompleteDisable, setButtonCompleteDisable] = useState(true)


  const h1Style = {
    textAlign: 'center'
  }

  const columns = [
    {
      title: 'Ammo Type',
      dataIndex: 'Ammo Type',
      key: 'key',
      filters: [
        {
          text: '.45',
          value: '.45'
        },
        {
          text: '5.45×39',
          value: '5.45×39'
        },
        {
          text: '.366',
          value: '.366'
        },
        {
          text: '4.6x30',
          value: '4.6x30'
        },
        {
          text: '5.56×45',
          value: '5.56×45'
        },
        {
          text: '5.7×28',
          value: '5.7×28'
        },
        {
          text: '7.62×39',
          value: '7.62×39'
        },
        {
          text: '7.62×51',
          value: '7.62×51'
        },
        {
          text: '9×18',
          value: '9×18'
        },
        {
          text: '9×19',
          value: '9×19'
        },
        {
          text: '9×21',
          value: '9×21'
        },
        {
          text: '7.62x54R',
          value: '7.62x54R'
        },
        {
          text: '9×39',
          value: '9×39'
        },
  
      ],
      onFilter: (value, record) => record["Ammo Type"].indexOf(value) === 0,
    },
    {
      title: 'Damage',
      dataIndex: 'Damage',
      key: 'Damage',
      sorter: (a, b) => {
        return a["Damage"] - b["Damage"]
      },
      sortDirections: ['descend'],
    },
  
    {
      title: 'Penetration Value',
      dataIndex: 'Penetration Value',
      key: 'Penetration Value',
      sorter: (a, b) => {
        return a["Penetration Value"] - b["Penetration Value"]
      },
      sortDirections: ['descend'],
    },
    {
      title: 'Projectile Speed',
      dataIndex: 'Projectile Speed',
      key: 'Projectile Speed',
      sorter: (a, b) => {
        return a["Projectile Speed"] - b["Projectile Speed"]
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Armor Damage Ratio %',
      dataIndex: 'Armor Damage Ratio %',
      key: 'Armor Damage Ratio %',
      sorter: (a, b) => {
        return a["Armor Damage Ratio %"] - b["Armor Damage Ratio %"]
      },
      sortDirections: ['descend'],
    },
    {
      title: 'Accuracy %',
      dataIndex: 'Accuracy %',
      key: 'Accuracy %',
      sorter: (a, b) => {
        return a["Accuracy %"] - b["Accuracy %"]
      },
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Recoil %',
      dataIndex: 'Recoil %',
      key: 'Recoil %',
      sorter: (a, b) => {
        return a["Recoil %"] - b["Accuracy %"]
      },
      sortDirections: ['descend', 'ascend'],
    },
  ]


  const onSelectChange = (selectedRowKeys, selectedRows) => {
    setKeysSelect(selectedRowKeys)
    setRowsSelect(selectedRows)
    if (selectedRows.length >= 2) {
      setButtonComprasionDisable(false)
    }
  };


  const rowSelection = {
    onChange: onSelectChange,
    hideSelectAll: true,
    selectedRowKeys: keysSelect,
    selectedRowsData: rowsSelect,
  }

  const clickHandler = () => {
    const newData = rowSelection.selectedRowsData;
    setData(newData)
    setButtonComprasionDisable(true)
    setButtonCompleteDisable(false)
  }
  
  const clickHandlerComplete =  () => {
    setData(keyData); 
    setButtonCompleteDisable(true)
    setKeysSelect([])
  }

 
  

  return(
    <>
      <h1 style={h1Style}>Escape from Tarkov Ammunations</h1>
      <Space style={{ marginBottom: 16, marginLeft: 20 }}>
          <Button type="primary"  onClick={() => {clickHandler()}}  disabled={buttonComprasionDisable}>Сomparison</Button>
          <Button danger  onClick={() => {clickHandlerComplete()}} disabled={buttonCompleteDisable}>Complete comparison</Button>
          <Button>Clear filters and sorters</Button>
        </Space>
      <Table  columns={columns} 
      dataSource={data} 
      bordered={true} 
      pagination={{ defaultPageSize: 130, position: ['none', 'bottomCenter'] }}
      scroll={{ y: 600 }}
      size='middle'
      sticky={true}
      rowSelection={rowSelection}
      />,
    </>
  )
}