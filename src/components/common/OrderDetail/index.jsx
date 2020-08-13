import React from 'react'
import { Descriptions, Button, notification, Modal, message } from 'antd'
import './index.scss'
import PropTypes from 'prop-types';
import SockJsClient from 'react-stomp';
import { comfirmOrder, cancelOrder, getFetchCode } from '../../../http/api'

class OrderDetail extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isComfirmBtnShow: 'none',
			isCancelBtnShow: 'inline-block',
			displayModal: false,
			fetchCode: '',
			topics: []
		}
	}

	componentWillMount(){
		const { parkingStartTime } = this.props.bookOrder;
		const date = new Date().getTime()
		console.log(date, Date.parse(parkingStartTime))
		if (date >= Date.parse(parkingStartTime)) {
			this.setState({
				isCancelBtnShow: 'none'
			})
		}
	}

	componentWillReceiveProps(nextProps) {
		const { status,parkingStartTime } = nextProps.bookOrder
		if (status === "WAIT_FOR_SURE") {
			this.setState({
				isComfirmBtnShow: 'inline-block',
				isCancelBtnShow: 'inline-block'
			})
		} else if (status === "ALREADY_SURE") {
			this.setState({
				isComfirmBtnShow: 'none',
				isCancelBtnShow: 'inline-block'
			})
		} else {
			this.setState({
				isCancelBtnShow: 'none',
				isComfirmBtnShow: 'none',
			})
		}

		const date = new Date().getTime()
		if (date >= Date.parse(parkingStartTime)) {
			this.setState({
				isCancelBtnShow: 'none'
			})
		}
	}

	setModalVisible(displayModal) {
		getFetchCode(this.props.bookOrder.id).then(response => {
			this.setState({
				fetchCode: `data:image/gif;base64,${response.data}`
			})
			this.setState({ displayModal });
		}).catch(error => {
			message.error(error.response.data.message)
		})

	}

	comfirmOrder = () => {
		const { id, parkingStartTime, parkingEndTime, parkingLotId } = this.props.bookOrder
		const { bookOrder } = this.props
		bookOrder.status = "ALREADY_SURE"
		this.props.setBookOrder(bookOrder)
		comfirmOrder(id).then((response) => {
			this.clientRef.sendMessage('/websocket/save', `/${parkingStartTime}/${parkingEndTime}/${parkingLotId}`)
			if (response.data.status === 'ALREADY_SURE' && response.data.id === id) {
				notification.success({
					message: 'Success',
					description:
						'预约成功！',
				})
				this.setState({
					isComfirmBtnShow: 'none'
				})
			}
		})


	}

	cancelOrder = () => {
		const { parkingStartTime, id } = this.props.bookOrder
		const date = new Date().getTime()
		if (date >= Date.parse(parkingStartTime)) {
			notification.warning({
				message: 'Sorry',
				description: '已超时，无法取消预约！',
			})
			this.setState({
				isCancelBtnShow: 'none'
			})
		} else {
			const { bookOrder } = this.props
			bookOrder.status = "DELETED"
			this.props.setBookOrder(bookOrder)
			cancelOrder(id).then((response) => {
				if (response.data.status === 'DELETED' && response.data.id === id) {
					notification.success({
						message: 'Success',
						description: '取消成功！',
					})
					this.setState({
						isCancelBtnShow: 'none'
					})
				}
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
		const { parkingLotName, location, carNumber, parkingStartTime, parkingEndTime, phoneNumber, price, status } = this.props.bookOrder
		const { isComfirmBtnShow, isCancelBtnShow } = this.state
		return (
			<div className="booking-content">
				<SockJsClient
					url='http://10.222.29.209:8090/endpoint'
					topics={this.state.topics}
					onMessage={(msg) => { alert(msg); }}
					ref={(client) => { this.clientRef = client }}
				/>
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
					<Descriptions.Item label="手机">{phoneNumber}</Descriptions.Item>
					<Descriptions.Item label="费用">
						￥
						{price}
					</Descriptions.Item>
					<Descriptions.Item label="订单状态">
						{/* <span className={status === "ALREADY_SURE" ? "completed" : "uncompleted"}> */}
						<span style={{ color: this.getOrderStatusColor(status) }}>
							{this.getOrderStatus(status)}
							<span className={status === "ALREADY_SURE" ? "QRcode" : "hiddenQRcode"} onClick={() => this.setModalVisible(true)}>点击查看停车码</span>
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
				<Modal
					className="fetchCodeModal"
					title="停车码"
					centered
					visible={this.state.displayModal}
					onOk={() => this.setModalVisible(false)}
					onCancel={() => this.setModalVisible(false)}
					footer={null}
				>
					<img src={this.state.fetchCode} alt="fetchCode" className="fetchCodeImg" />
				</Modal>
			</div>
		)
	}
}

OrderDetail.propTypes = {
	bookOrder: PropTypes.object.isRequired,
	setBookOrder: PropTypes.func.isRequired
}

export default OrderDetail