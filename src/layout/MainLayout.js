import {Layout, Menu, Breadcrumb, Card} from "antd";
import React, {Component} from 'react';
import './MainLayout.less';
import Tools from "../component/bikan/tools";
import SiderAnchor from "./SiderAnchor";
import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

const {Header, Content, Footer, Sider} = Layout;
const { SubMenu } = Menu;

class MainLayout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toolsMenu: [{
                "name":"必看网站",
                "nameEn":"bikan",
                "kind":0,
            },{
                "name":"影视",
                "nameEn":"yingshi",
                "kind":1,
            },{
                "name":"自学",
                "nameEn":"zixue",
                "kind":2,
            },{
                "name":"购物",
                "nameEn":"gouwu",
                "kind":3,
            },{
                "name":"运营",
                "nameEn":"yunying",
                "kind":4,
            },{
                "name":"软件/实用工具",
                "nameEn":"ruanjian",
                "kind":5,
            },{
                "name":"前端",
                "nameEn":"qianduan",
                "kind":6,
            },{
                "name":"后端",
                "nameEn":"houduan",
                "kind":7,
            },{
                "name":"生活",
                "nameEn":"shenghuo",
                "kind":8,
            }]
        }
    }

    render() {
        const toolsMenu = this.state.toolsMenu;
        return (
            <Layout className="layout">
                <Header className="header">
                    <div className="logo"/>
                    <h1 style={{color: 'white'}}>What's this?</h1>
                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                    {/*    <Menu.Item key="1">nav 1</Menu.Item>*/}
                    {/*</Menu>*/}
                </Header>
                <Content>
                    <Layout>
                        <Sider className="site-layout-background" style={{width:200,textAlign:'center',backgroundColor:'#f0f2f5',marginTop:'30px'}}>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="light"
                                inlineCollapsed={this.state.collapsed}
                                style={{backgroundColor:'#f0f2f5',color:'#000000'}}
                            >
                                <Menu.Item key="1" icon={<PieChartOutlined />}>
                                    工具配置
                                </Menu.Item>
                                <SubMenu key="sub1" icon={<MailOutlined />} title="工具导航">
                                    <SiderAnchor titles={this.state.toolsMenu}/>
                                </SubMenu>
                                <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>

                        </Sider>

                        <Content style={{padding: '0 50px'}}>
                            {toolsMenu.map((e) =>{
                               return(
                                   <Tools name={e.name} nameEn={e.nameEn} kind={e.kind}/>
                               )
                            })}
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default MainLayout;