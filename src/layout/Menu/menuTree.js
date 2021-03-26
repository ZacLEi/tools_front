import React from 'react';
import {Menu} from 'antd';
import {NavLink} from "react-router-dom";
import menuConfig from "../../config/menuConfig";

const {SubMenu} = Menu;

class MenuTree extends React.Component{
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount() {
        const menuTreeNode = this.renderMenu(menuConfig);
        this.setState({
            menuTreeNode
        })
    }

    renderMenu = (data) => {
        return data.map((item)=>{
            if(item.children){
                return(
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item title={item.title} key={item.key}>
                {item.title}
                <NavLink to={item.key}></NavLink>
            </Menu.Item>
        })
    }
    render() {
        return(
            <div>
                <Menu theme="dark" mode="inline">
                    {this.state.menuTreeNode}
                </Menu>
            </div>
        )
    }

}

export default MenuTree;