import React from 'react'
import { Descriptions, Radio, Button } from 'antd'

class OrderDetail extends React.Component {
    state = {
        size: 'default',
    };

    onChange = e => {
        console.log('size checked', e.target.value);
        this.setState({
            size: e.target.value,
        });
    };

    render() {
        return (
            <div>
                <Descriptions
                    bordered="1"
                    title="订单详情"
                    size="default"
                >
                    <Descriptions.Item label="停车场">XXX停车场</Descriptions.Item>
                    <Descriptions.Item label="位置">香洲区XXX路XX</Descriptions.Item>
                    <Descriptions.Item label="车牌号">粤C666</Descriptions.Item>
                    <Descriptions.Item label="时间段">2020年8月9日 15:30 - 2020年8月9日 16:00</Descriptions.Item>
                    <Descriptions.Item label="手机">13631230001</Descriptions.Item>
                    <Descriptions.Item label="邮箱">971499022@qq.com</Descriptions.Item>
                    <Descriptions.Item label="费用">12￥</Descriptions.Item>
                    <Descriptions.Item label="订单状态">等待确认/预约成功</Descriptions.Item>
                </Descriptions>
            </div>
        );
    }
}

export default OrderDetail