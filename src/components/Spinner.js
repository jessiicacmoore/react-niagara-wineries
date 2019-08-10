import React from "react";
import { Spin, Icon } from "antd";

const Spinner = () => {
  const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  return <Spin indicator={antIcon} />;
};

export default Spinner;
