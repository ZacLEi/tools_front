import React from 'react';
import {Breadcrumb, Form, Input, Button, Switch} from "antd";
import {Show} from "../../utils/Views";

class index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: true
        }
    }


    render() {
        return (
            <div>
                <Breadcrumb>
                    <Breadcrumb.Item>工具管理</Breadcrumb.Item>
                    <Breadcrumb.Item>工具配置</Breadcrumb.Item>
                </Breadcrumb>

                <p>
                    <Show when={this.state.checked}>
                        配置类别：
                    </Show>
                    <Show when={!this.state.checked}>
                        配置某类别详细内容：
                    </Show>
                </p>

                <Switch defaultChecked onChange={() => {
                    let status = !this.state.checked
                    this.setState({
                        checked: status
                    })
                }}/>

                {/*添加类型*/}
                <Show when={this.state.checked}>
                    <Form name="basic">
                        <Form.Item label="类别名称"rules={[{required:true,message:'请输入类别名称！'}]}>
                            <Input/>
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Show>

                {/*添加详细条目*/}
                <Show when={!this.state.checked}>
                    <Form name="basic">
                        <Form.Item label="类别名称" rules={[{required:true,message:'请输入类别名称！'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="类别名称" rules={[{required:true,message:'请输入类别名称！'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="类别名称" rules={[{required:true,message:'请输入类别名称！'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item label="类别名称" rules={[{required:true,message:'请输入类别名称！'}]}>
                            <Input/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">Submit</Button>
                        </Form.Item>
                    </Form>
                </Show>


            </div>
        )
    }

}

export default index;