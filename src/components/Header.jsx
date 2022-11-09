import React, { useState } from "react";

import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

const Header = (props) => {
  const [current, setCurrent] = useState("1");
  const navigate = useNavigate();
  const onPageMove = (e) => {
    navigate(e.key);
    setCurrent(e.key);
  };
  return (
    <Menu
      onClick={onPageMove}
      selectedKeys={[current]}
      mode="horizontal"
      items={TABLIST}
      theme="dark"
    />
  );
};

const TABLIST = [
  { key: "/", label: "업종별 수급현황", value: "/" },
  {
    key: "supply-analysis-by-industry",
    label: "업종별 수급분석",
    value: "/",
  },
  {
    key: "supply-by-item",
    label: "종목별 수급현황",
    value: "/",
  },
  {
    key: "supply-analysis-by-item",
    label: "종목별 분석현황",
    value: "/",
  },
];
export default Header;
