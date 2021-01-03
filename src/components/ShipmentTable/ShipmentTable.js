import React from 'react';
import {Table} from 'antd';

  const columns = [
    {
      title: 'AWB Number',
      dataIndex: 'awbno',
      key: 'awbno',
    },
    {
      title: 'Transporter',
      dataIndex: 'carrier',
      key: 'carrier',
    },
    {
      title: 'Source',
      dataIndex: 'from',
      key: 'from',
    },
    {
        title: 'Destination',
        dataIndex: 'to',
        key: 'to',
    },
    {
        title: 'Brand',
        dataIndex: 'carrier',
        key: 'carrier',
    },
    {
        title: 'Start Date',
        dataIndex: 'pickup_date',
        key: 'pickup_date',
    },
    {
        title: 'ETD',
        dataIndex: ["extra_fields", "expected_delivery_date"],
        key: 'extra_fields.expected_delivery_date',
    },
    {
        title: 'Status',
        dataIndex: 'current_status',
        key: 'current_status',
    },
  ];
  
  const ShipmentTable = (props) => {
      return(
        <Table 
        dataSource={props.data}
        isTableLoading={props.isLoading} 
        columns={columns} 
        pagination={false} 
        />
      );
  }
  
export default ShipmentTable;