import React from 'react';
import Index from "./index";

class Tools extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toolsMenu: [{
                "name":"必看网站",
                "nameEn":"tools",
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
            <div style={{padding: '0 50px'}}>
                {toolsMenu.map((e) =>{
                    return(
                        <Index name={e.name} nameEn={e.nameEn} kind={e.kind}/>
                    )
                })}
            </div>
        )
    }

}

export default Tools;