import React from "react";
import { Col, Row } from "antd";
import { PageHeader } from "antd";
import { Input, Space } from "antd";

import styled from "styled-components";
import { Select } from "antd";
const SearchModal = () => {
  const { Search } = Input;
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const onSearch = (value) => console.log(value);
  return (
    <div>
      <ModalHeaderWrap>
        <PageHeader
          className="site-page-header"
          onBack={() => null}
          title="업종 검색"
        />
      </ModalHeaderWrap>
      <ContentsWrap>
        <Space direction="horizontal" size={12}>
          <Select
            defaultValue="전체"
            style={{
              width: 80,
            }}
            onChange={handleChange}
            options={[
              {
                value: "전체",
                label: "전체",
              },
              {
                value: "업종 코드",
                label: "업종 코드",
              },
              {
                value: "업종 명",
                label: "업종 명",
              },
            ]}
          />
          <Search
            placeholder="검색어를 입력해주세요."
            onSearch={onSearch}
            enterButton
          />
        </Space>
      </ContentsWrap>
    </div>
  );
};
const ModalHeaderWrap = styled.div`
  background-color: #fafafa;
`;
const ContentsWrap = styled.div`
  padding: 1rem;
`;
export default SearchModal;
