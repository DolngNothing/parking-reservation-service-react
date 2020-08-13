import React from 'react'
import PropTypes from 'prop-types';
import SockJsClient from 'react-stomp';
import { Form, Input, Button, DatePicker, notification } from 'antd';
import { CarOutlined, PhoneOutlined } from '@ant-design/icons';
import locale from 'antd/es/locale/zh_CN';
import { saveOrder } from '../../../http/api'

import './index.css'

const { RangePicker } = DatePicker;
const licenseVailt = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
const valitype = ['', 'success', 'error'];
const phoneValit = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
class BookInfoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneValitType: 0,
      liscenValiType: 0,
      liscen: '',
      phone: '',
      startTime: '',
      endTime: '',
      topics: ['/topic/hello']
    }
  }

  isLicenseNo = (e) => {
    if (licenseVailt.test(e.target.value)) {
      this.setState({ liscenValiType: 1 })
      this.setState({ liscen: e.target.value })
    } else {
      this.setState({ liscenValiType: 2 })
      this.setState({ liscen: '' })
    }
  }

  isPhoneNo = (e) => {
    if (phoneValit.test(e.target.value)) {
      this.setState({ phoneValitType: 1 })
      this.setState({ phone: e.target.value })
    } else {
      this.setState({ phoneValitType: 2 })
      this.setState({ phone: '' })
    }
  }


  setDate = (e) => {
    const { id } = this.props.parkingLot
    if (e != null) {
      const startTime = new Date(e[0]._d).getTime(); // 本地时间距 1970 年 1 月 1 日午夜（GMT 时间）之间的毫秒数
      const endTime = new Date(e[1]._d).getTime();
      const topic= [`/topic/${startTime}/${endTime}/${id}`,'/topic/hello']
      this.setState({ topics:  []}, () => {
        this.setState({ topics:  topic})
        this.clientRef.sendMessage('/register', `/${startTime}/${endTime}/${id}`)
      })
      this.setState({ startTime })
      this.setState({ endTime })
    } else {
      this.setState({ startTime: '' })
      this.setState({ endTime: '' })
      this.setState({topics: ['/topic/hello']})
    }
  }

  saveBookForm = () => {
    const { liscen, phone, startTime, endTime } = this.state;
    if (liscen !== '' && phone !== '' && startTime !== '' && endTime !== '') {
      const order = {
        carNumber: liscen, phone,
         parkingStartTime: startTime, parkingEndTime: endTime,
         email:"1610692147@qq.com"
        , parkingLotId: this.props.parkingLot.id
      }
      saveOrder(order).then((response) => {
        this.props.setBookOrder(response.data)
        this.props.history.push('/orderDetail')
        // 还有个跳转
      }).catch((error) => {
        console.log(error);
      })
    } else {
      notification.error({
        message: '填写错误',
        description:
          '您的信息填写不完全',
      });
    }
    //   this.axios.post(URL,{'liscen':liscen,'phone':phone,
    //   'mail':mail,'startTime':startTime,'endTime':endTime
    // })
  }

  range = (start, end) => {
    const result = [];
    for (let i = start; i < end; i += 1) {
      result.push(i);
    }
    return result;
  }

  disabledDate = (time) => {
    return time < Date.now() - 8.64e7;
  }

  back= ()=>{
    this.props.history.push('/')
  }


  render() {
    const { liscenValiType } = this.state;
    const { phoneValitType } = this.state;
    console.log(this.state.topics);
    return (
      <div className="form-warp">
        <SockJsClient
          url='http://10.222.29.209:8090/endpoint'
          topics={this.state.topics}
          onMessage={(emptyPosition) => { this.props.saveEmptyPosition(emptyPosition); }}
          ref={(client) => { this.clientRef = client }}
        />
        <Form
          layout="inline"
        >
          <Form.Item
            help="请填写正确的车牌号"
            validateStatus={valitype[liscenValiType]}
            hasFeedback
            rules={[{ required: true }]}
          >
            <Input
              prefix={<CarOutlined />}
              onBlur={this.isLicenseNo}
              required
              size="large"
            />
          </Form.Item>
          <Form.Item
            help="请填写正确的手机号"
            validateStatus={valitype[phoneValitType]}
            hasFeedback
          >
            <Input
              rules={[{ required: true }]}
              prefix={<PhoneOutlined />}
              onBlur={this.isPhoneNo}
              required
              size="large"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true }]}
            hasFeedback
            required
            size="large"
          >
            <RangePicker
              className="form-width"
              showTime
              onChange={this.setDate}
              disabledDate={this.disabledDate}
              locale={locale}
              format="YYYY年MM月DD日 HH:00"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.saveBookForm}>
              提交预约
            </Button>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" onClick={this.back}>
              返回首页
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

BookInfoForm.propTypes = {
  parkingLot: PropTypes.any.isRequired,
  setBookOrder: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  saveEmptyPosition: PropTypes.func.isRequired
}

export default BookInfoForm;