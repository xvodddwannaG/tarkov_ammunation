import React, { useState } from 'react';
import {keyData} from '../state/dataObject'
import { Table, Button, Space, Divider, List, Tag  } from 'antd';
import 'antd/dist/antd.css';
import {InfoTable} from './InfoTable'
import { red, volcano, gold, yellow, lime, green,} from '@ant-design/colors';


export const AmmoTable = () => {
  const [data, setData] = useState(keyData)
  const [keysSelect, setKeysSelect] = useState([])
  const [rowsSelect, setRowsSelect] = useState([])
  const [buttonComprasionDisable, setButtonComprasionDisable] = useState(true)
  const [buttonCompleteDisable, setButtonCompleteDisable] = useState(true)
  const [filteredInfo, setFilteredInfo] = useState({})
  const [sortedInfo, setSortedInfo] = useState({})


  const handleChange = (pagination, filters, sorter) => {
    setFilteredInfo(filters)
    setSortedInfo(sorter)
  }

  const clearFilters = () => {
    setFilteredInfo({})
  };

  const clearAll = () => {
    setFilteredInfo({})
    setSortedInfo({})
  }

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
      filteredValue: filteredInfo.key || null,
      onFilter: (value, record) => record["Ammo Type"].indexOf(value) === 0,
    },
    {
      title: 'Damage',
      dataIndex: 'Damage',
      key: 'Damage',
      sorter: (a, b) => {
        return a["Damage"] - b["Damage"]
      },
      sortOrder: sortedInfo.columnKey === 'Damage' && sortedInfo.order,
      sortDirections: ['descend'],
    },
  
    {
      title: 'Penetration Value',
      dataIndex: 'Penetration Value',
      key: 'Penetration Value',
      sorter: (a, b) => {
        return a["Penetration Value"] - b["Penetration Value"]
      },
      sortOrder: sortedInfo.columnKey === 'Penetration Value' && sortedInfo.order,
      sortDirections: ['descend'],
    },  
    {
      title: 'Armor Damage Ratio %',
      dataIndex: 'Armor Damage Ratio %',
      key: 'Armor Damage Ratio %',
      sorter: (a, b) => {
        return a["Armor Damage Ratio %"] - b["Armor Damage Ratio %"]
      },
      sortOrder: sortedInfo.columnKey === 'Armor Damage Ratio %' && sortedInfo.order,
      sortDirections: ['descend'],
    },
    {
      title: 'Projectile Speed',
      dataIndex: 'Projectile Speed',
      key: 'Projectile Speed',
      sorter: (a, b) => {
        return a["Projectile Speed"] - b["Projectile Speed"]
      },
      sortOrder: sortedInfo.columnKey === 'Projectile Speed' && sortedInfo.order,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Accuracy %',
      dataIndex: 'Accuracy %',
      key: 'Accuracy %',
      sorter: (a, b) => {
        return a["Accuracy %"] - b["Accuracy %"]
      },
      sortOrder: sortedInfo.columnKey === 'Accuracy %' && sortedInfo.order,
      sortDirections: ['descend', 'ascend'],
      width: 120,
    },
    {
      title: 'Recoil %',
      dataIndex: 'Recoil %',
      key: 'Recoil %',
      sorter: (a, b) => {
        return a["Recoil %"] - b["Accuracy %"]
      },
      sortOrder: sortedInfo.columnKey === 'Recoil %' && sortedInfo.order,
      sortDirections: ['descend', 'ascend'],
      width: 100,
    },
    {
      title: 'Armor Effectiveness vs.',
      children: [
        {
          title: 'Class 1',
          dataIndex: 'Class 1',
          key: 'Class 1',
          sorter: (a, b) => {
            return a["Class 1"] - b["Class 1"]
          },
          sortDirections: ['descend'],
          width: 90,
          sortOrder: sortedInfo.columnKey === 'Class 1' && sortedInfo.order,
          render: (text) => {
            return getColor(text)
          }
        },
        {
          title: 'Class 2',
          dataIndex: 'Class 2',
          key: 'Class 2',
          sorter: (a, b) => {
            return a["Class 2"] - b["Class 2"]
          },
          sortDirections: ['descend'],
          width: 90,
          sortOrder: sortedInfo.columnKey === 'Class 2' && sortedInfo.order,
          render: (text) => {
            return getColor(text)
          }
        },
        {
          title: 'Class 3',
          dataIndex: 'Class 3',
          key: 'Class 3',
          width: 90,
          sorter: (a, b) => {
            return a["Class 3"] - b["Class 3"]
          },
          sortOrder: sortedInfo.columnKey === 'Class 3' && sortedInfo.order,
          sortDirections: ['descend'],
          render: (text) => {
            return getColor(text)
          }
        },
        {
          title: 'Class 4',
          dataIndex: 'Class 4',
          key: 'Class 4',
          width: 90,
          sortOrder: sortedInfo.columnKey === 'Class 4' && sortedInfo.order,
          sorter: (a, b) => {
            return a["Class 4"] - b["Class 4"]
          },
          sortDirections: ['descend'],
          render: (text) => {
            return getColor(text)
          }
        },
        {
          title: 'Class 5',
          dataIndex: 'Class 5',
          key: 'Class 5',
          width: 90,
          sortOrder: sortedInfo.columnKey === 'Class 5' && sortedInfo.order,
          sorter: (a, b) => {
            return a["Class 5"] - b["Class 5"]
          },
          sortDirections: ['descend'],
          render: (text) => {
            return getColor(text)
          }
        },
        {
          title: 'Class 6',
          dataIndex: 'Class 6',
          key: 'Class 6',
          sortOrder: sortedInfo.columnKey === 'Class 6' && sortedInfo.order,
          width: 90,
          sorter: (a, b) => {
            return a["Class 6"] - b["Class 6"]
          },
          sortDirections: ['descend'],
          render: (text) => {
            return getColor(text)
          }
        },
      ]
    },
    
  ]

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

  const desc = [
    'Damage - This is how much health damage a bullet does',
    'Pen Value - A value used to determine how well a bullet penetrates armor and how much durability damage it does to armor, the higher the better.',
    'Armor Damage % - A modifier used in calculating durability damage, the higher the better.',
    ' ',
    'Frag.Chance - that fragmentation chance is currently bugged'
  ]
  

  return(
    <>
      <h1 style={h1Style}>Escape from Tarkov Ammunations</h1>
      <Space style={{ marginBottom: 16, marginLeft: 20 }}>
          <Button type="primary"  onClick={() => {
            clearFilters()
            clickHandler()
            }}  disabled={buttonComprasionDisable}>Сomparison</Button>
          <Button danger  onClick={() => {clickHandlerComplete()}} disabled={buttonCompleteDisable}>Complete comparison</Button>
          <Button onClick={() => {clearAll()}}>Clear filters and sorters</Button>
        </Space>
      <Table  columns={columns} 
      dataSource={data} 
      bordered={true} 
      pagination={{ defaultPageSize: 130, position: ['none', 'bottomCenter'] }}
      scroll={{ y: 600, x: 1184 }}
      size='middle'
      sticky={true}
      rowSelection={rowSelection}
      onChange={handleChange}
      />
      <Space style={{ marginBottom: 50 }}></Space>
      <Divider orientation="left">Description</Divider>
      <List
        size="small"
        bordered
        dataSource={desc}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <InfoTable />
    </>
  )
}