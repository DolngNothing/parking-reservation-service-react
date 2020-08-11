import React from 'react'
import { Descriptions, Button, notification } from 'antd'
import './index.scss'
import PropTypes from 'prop-types';
import { getOrder } from '../../../http/api'

class OrderDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			order: {
				parkingLotName: "XXX停车场",
				location: "香洲区XXX路XX",
				carNumber: "粤C7777",
				phone: "13631230000",
				mail: "971499022@qq.com",
				price: 11,
				status: false,
				parkingStartTime: "2020年8月9日 15:30",
				parkingEndTime: "2020年8月9日 16:00"
			},
			isComfirmBtnShow: 'none',
			isCancelBtnShow: 'inline-block'
		}
	}


	componentDidMount() {
		const { parkingStartTime } = this.state.order
		const { bookOrder } = this.props
		console.log(bookOrder)

		getOrder(235).then((response) => {
			this.setState({
				order: response.data
			})
			const { status } = this.state.order
			if (status === "WAIT_FOR_SURE") {
				this.setState({
					isComfirmBtnShow: 'inline-block'
				})
			}
			if (new Date() >= parkingStartTime.valueOf()) {
				alert(parkingStartTime.valueOf())
				this.setState({
					isCancelBtnShow: 'none'
				})
			}
		})
	}

	comfirmOrder = () => {
		notification.success({
			message: 'Success',
			description:
				'预约成功！',
		})
		this.setState({
			isComfirmBtnShow: 'none'
		})
		console.log(this.state.isComfirmBtnShow);
		this.setState((prev) => ({
			order: { ...prev.order, status: "ALREADY_SURE" }
		}))
	}

	cancelOrder = () => {
		const { parkingStartTime } = this.state.order
		const date = new Date().getTime()
		if (date >= parkingStartTime.valueOf()) {
			notification.warning({
				message: 'Sorry',
				description: '已超时，无法取消预约！',
			})
			this.setState({
				isCancelBtnShow: 'none'
			})
		} else {
			notification.success({
				message: 'Success',
				description: '取消成功！',
			})
		}
	}

	getOrderStatus = (status) => {
		if (status === "ALREADY_SURE") {
			return "预约成功"
		} if (status === "WAIT_FOR_SURE") {
			return "等待确认"
		}
		return "已取消"
	}

	getOrderStatusColor = (status) => {
		if (status === "ALREADY_SURE") {
			return "green"
		} if (status === "WAIT_FOR_SURE") {
			return "orange"
		}
		return "gray"
	}

	render() {
		const { parkingLotName, location, carNumber, parkingStartTime, parkingEndTime, phone, mail, price, status } = this.state.order
		const { isComfirmBtnShow, isCancelBtnShow } = this.state
		return (
			<div className="booking-content">
				<Descriptions
					bordered
					title="订单详情"
					size="default"
				>
					<Descriptions.Item label="停车场">{parkingLotName}</Descriptions.Item>
					<Descriptions.Item label="位置">{location}</Descriptions.Item>
					<Descriptions.Item label="车牌号">{carNumber}</Descriptions.Item>
					<Descriptions.Item label="时间段">
						{parkingStartTime}
						{' '}
        				-
       					{' '}
						{parkingEndTime}
					</Descriptions.Item>
					<Descriptions.Item label="手机">{phone}</Descriptions.Item>
					<Descriptions.Item label="邮箱">{mail}</Descriptions.Item>
					<Descriptions.Item label="费用">
						{price}
						￥
					</Descriptions.Item>
					<Descriptions.Item label="订单状态">
						{/* <span className={status === "ALREADY_SURE" ? "completed" : "uncompleted"}> */}
						<span style={{ color: this.getOrderStatusColor(status) }}>
							{this.getOrderStatus(status)}
						</span>
					</Descriptions.Item>
				</Descriptions>

				<div className="btn-div">
					<div onClick={this.comfirmOrder} style={{ display: isComfirmBtnShow }} className="btn-div-item">
						<Button type="primary">
							确认订单
      </Button>
					</div>
					<div style={{ display: isCancelBtnShow }} className="btn-div-item">
						<Button onClick={this.cancelOrder}>取消预约</Button>
					</div>
				</div>
			</div>
		)
	}
}

OrderDetail.propTypes = {
    bookOrder:PropTypes.object.isRequired
}

export default OrderDetail