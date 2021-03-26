import React from 'react';
import {Layout, Menu} from 'antd';
import MenuTree from "./layout/Menu/menuTree";
import './layout.less'

const {Header, Sider, Content} = Layout;

class HomeLayout extends React.Component {
    render() {
        return (
            <Layout>
                <Sider trigger={null}>
                    <div style={{height:"100px",textAlign:"center",lineHeight:"100px"}}>
                        <h1 style={{color: 'white'}}>What's this?</h1>
                    </div>
                    <MenuTree/>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{padding: 0}}>
                    </Header>
                    <Content className="site-layout-background">
                        {this.props.children}
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default HomeLayout;