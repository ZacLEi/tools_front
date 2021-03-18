import React from 'react';
import {Card} from "antd";
import $ from 'jquery';

const gridStyle = {
    width: '250px',
    textAlign: 'left',
    height: '100px',
    margin: '10px 10px 10px 10px'
}

class Bikan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tools: [],
        }
    }

    componentDidMount() {
        this.initData();
    }

    initData() {
        let _this = this;
        $.ajax({
            url: '/tools/entrys?kind=0',
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
        console.log(tools);
        return(
            <Card title="必看内容" style={{width: "100%", marginTop: "20px"}}>
                {
                    tools.map((e) => {
                        return(
                            <Card.Grid style={gridStyle}>
                                <a href={e.url} target="_blank">
                                    <div>
                                        <p>{e.name}</p>
                                        <p>{e.description}</p>
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

export default Bikan;