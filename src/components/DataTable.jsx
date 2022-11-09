import React, { Children } from "react";
import { Table, Space } from "antd";
import styled from "styled-components";
const DataTable = () => {
  const columns = [
    {
      title: "일자",
      dataIndex: "age",
      fixed: "left",
      align: "center",
    },
    {
      title: "단위:억원",
      children: [
        {
          title: "개인",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "세력합",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "외국인",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "기관계",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "금융투자",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "보험",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "투신",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "은행",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "기타금융",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "연기금등",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "기타법인",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "기타외인",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "사모펀드",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
        },
        {
          title: "국가지자체",
          dataIndex: "age",
          defaultSortOrder: "descend",
          sorter: (a, b) => a.age - b.age,
          align: "right",
          width: 100,
        },
      ],
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sidney No. 1 Lake Park",
    },
  ];
  const onChange = (pagination, filters, sorter, extra) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  return (
    <>
      <Wrap>
        <Table
          columns={columns}
          dataSource={data}
          onChange={onChange}
          size="small"
          pagination={{
            pageSize: 10,
          }}
          scroll={{ x: 1300 }}
        />
      </Wrap>
    </>
  );
};
const Wrap = styled.div`
  padding: 1rem;
`;
export default DataTable;
