import React from 'react';
import {Card} from "antd";
import $ from 'jquery';

const gridStyle = {
    width: '250px',
    textAlign: 'left',
    height: '100px',
    margin: '10px 10px 10px 10px',
    borderRadius: '15px'
}

const cardStyle = {
    width: "100%",
    marginTop: "30px",
    borderRadius: "15px",
}

class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: [],
            name: props.name,
            nameEn: props.nameEn,
            kind:props.kind
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData() {
        let _this = this;
        $.ajax({
            url: '/tools/entrys?kind='+this.state.kind,
            type: 'GET',
            success: function (res) {
                console.log(res.data);
                _this.setState({
                    tools: res.data
                })
            },
            error: function (error) {
                console.log(error)
            }

        })
    }

    render() {
        const tools = this.state.tools;
        const id = "site-content-" + this.state.nameEn
        console.log(tools);
        return(
            <Card id={id} title={this.state.name}  style={cardStyle} >
                {
                    tools.map((e) => {
                        return(
                            <Card.Grid style={gridStyle}>
                                <a href={e.url} target="_blank">
                                    <div>
                                        <div style={{width:'40px',height:'100px',float:'left'}}>
                                            <img src={e.iconUrl} height={40} width={40}/>
                                        </div>
                                        <div style={{width:'100px',float:'left',fontWeight:"bold"}}>
                                            {e.name}
                                        </div>
                                        <div style={{height:'50px',float:'left'}}>
                                            {e.description}
                                        </div>
                                        {/*<img src={e.iconUrl} width={100} height={100}/>*/}
                                    </div>
                                </a>
                            </Card.Grid>
                        )
                    })
                }
            </Card>
        )
    }
}

export default Index;