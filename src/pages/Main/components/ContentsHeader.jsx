import React, { useState } from "react";
import { DatePicker, Space, Button, Radio } from "antd";
import moment from "moment";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
const ContentsHeader = () => {
  const { RangePicker } = DatePicker;

  const [goPublic, setGoPublic] = useState("Kospi");

  const disabledDate = (current) => {
    return current && current > moment().endOf("day");
  };
  const handleDate = (e) => {
    console.log(e);
  };
  return (
    <Wrap>
      <Space direction="vertical" size={12}>
        <Space direction="horizontal" size={12}>
          <RangePicker
            format="YYYY-MM-DD"
            disabledDate={disabledDate}
            size="small"
            onChange={handleDate}
          />
          <Button
            type="primary"
            shape="circle"
            size="small"
            icon={<SearchOutlined />}
          />
        </Space>
        <Radio.Group
          value={goPublic}
          size="small"
          onChange={(e) => setGoPublic(e.target.value)}
        >
          <Radio.Button value="Kospi">KOSPI</Radio.Button>
          <Radio.Button value="kosdaq">KOSDAQ</Radio.Button>
        </Radio.Group>
      </Space>
    </Wrap>
  );
};
const Wrap = styled.div`
  padding: 1rem;
  background-color: #fafafa;
`;
export default ContentsHeader;
