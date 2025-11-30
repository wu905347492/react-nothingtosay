import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import './index.sass';
const { Header, Footer, Content } = Layout;

import { Dashboard } from '../pages';

const items = Array.from({ length: 15 }).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));
const NoThingLayout: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout className="box-container">
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb style={{ margin: '16px 0' }} items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]} />
        <div
          style={{
            background: colorBgContainer,
            height: '100%',
            padding: 24,
            borderRadius: borderRadiusLG,
          }}
        >
          <Dashboard></Dashboard>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©{new Date().getFullYear()} Created by Ant UED</Footer>
    </Layout>
  );
};

export default NoThingLayout;
