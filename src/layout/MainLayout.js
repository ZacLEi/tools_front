import {Layout, Menu, Breadcrumb, Card} from "antd";
import React, {Component} from 'react';
import './MainLayout.less';
import Bikan from "../component/bikan/Bikan";
import Learn from "../component/learn/Learn";
import Shopping from "../component/Shopping/Shopping";
import Soft from "../component/Soft/Soft";
import Support from "../component/support/Support";
import Video from "../component/video/Video";

const {Header, Content, Footer, Sider} = Layout;

class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout className="layout">
                <Header className="header">
                    <div className="logo"/>
                    <h1 style={{color: 'white'}}>哈哈哈哈</h1>
                    {/*<Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>*/}
                    {/*    <Menu.Item key="1">nav 1</Menu.Item>*/}
                    {/*</Menu>*/}
                </Header>
                {/*<Sider>*/}
                {/*    sider content*/}
                {/*</Sider>*/}
                <Content>
                    <Layout>
                        <Sider className="site-layout-background" width={200}>
                            sider contetnt
                        </Sider>

                        <Content style={{padding: '0 50px'}}>

                            <Bikan/>
                            <Learn/>
                            <Shopping/>
                            <Soft/>
                            <Support/>
                            <Video/>
                        </Content>
                    </Layout>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        )
    }
}

export default MainLayout;