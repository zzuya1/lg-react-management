import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import type { MenuProps } from 'antd';
  import { Breadcrumb, Layout, Menu, theme } from 'antd';
  import { useState } from 'react'
  import { Outlet,useNavigate} from "react-router-dom"

  const { Header, Content, Footer, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>['items'][number];
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Option 1', '/page1', <PieChartOutlined />),
    getItem('Option 2', '/page2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  const App: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);
    const navigateTo = useNavigate();

    const {
      token: { colorBgContainer },
    } = theme.useToken();

    const menuClick = (e:{key:string})=>{
        console.log("点击了",e.key);
        navigateTo(e.key);
        //点击跳转到对应路由->编程式导航跳转，利用到一个hook
    }

    return (
      <Layout style={{ minHeight: '100vh' }}>

        {/* 侧边栏 */}
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className="demo-logo-vertical" style={{margin:'16px 16px 0' }}/>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onClick={menuClick} />
        </Sider>

        {/* 右边内容 */}
        <Layout>
          <Header style={{ padding: 0, background: colorBgContainer, paddingLeft:"15px" }} >
           <Breadcrumb style={{ lineHeight:"64px" }}> {/* 面包屑 */}
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
          </Header>

          <Content style={{ margin: '16px 16px 0' ,backgroundColor:"red"}}>
           {/* 窗口部分 */}
           <Outlet />
           
            {/* <div style={{ padding: 24, minHeight: 360, background: colorBgContainer ,backgroundColor:'yellow'}}>
              Bill is a cat.
            </div> */}
          </Content>

          <Footer style={{ textAlign: 'center' ,padding:0,lineHeight:"48px"}}>Ant Design ©2023 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  };
  
  export default App;