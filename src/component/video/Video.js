import React from 'react';
import {Card} from "antd";

const gridStyle = {
    width: '250px',
    textAlign: 'left',
    height:'100px',
    margin: '10px 10px 10px 10px'
}
class Video extends React.Component{
    constructor(props) {
        super(props);

    }

    render() {
        return(
            <Card title="视频" style={{width:"100%",marginTop:"20px"}}>
                <Card.Grid style={gridStyle}>Content1</Card.Grid>
                <Card.Grid style={gridStyle}>Content2</Card.Grid>
                <Card.Grid style={gridStyle}>Content3</Card.Grid>
                <Card.Grid style={gridStyle}>Content4</Card.Grid>
            </Card>
        )
    }
}

export default Video;