import React from 'react';
import {Anchor} from 'antd';
const {Link} = Anchor;

class SiderAnchor extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            titles:props.titles,
        }
    }

    render() {
        const titles = this.state.titles;
        return (
            <div>
                <Anchor style={{textAlign:'center',backgroundColor:'#f0f2f5'}}>
                    {
                        titles.map((e) => {
                            return(
                                <div style={{fontWeight:"bold"}}>
                                    <Link title={e.name} href={'#site-content-'+e.nameEn} />
                                </div>
                            )
                        })
                    }
                </Anchor>
            </div>
        );
    }
}

export default SiderAnchor;