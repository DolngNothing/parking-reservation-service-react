import React from 'react'
import PropTypes from 'prop-types';
import { Form, Input, Button, DatePicker ,notification } from 'antd';
import { CarOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';
import {saveOrder} from '../../../http/api'

import './index.css'

const { RangePicker } = DatePicker;
const licenseVailt = /^(([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z](([0-9]{5}[DF])|([DF]([A-HJ-NP-Z0-9])[0-9]{4})))|([京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领][A-Z][A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳使领]))$/;
const valitype = ['', 'success', 'error'];
const phoneValit = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
const mailValit = /^[a-zA-Z0-9.!#$%&'*+=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
class BookInfoForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      phoneValitType: 0,
      liscenValiType: 0,
      mailValiType: 0,
      liscen: '',
      phone: '',
      mail: '',
      startTime: '',
      endTime: ''
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

  isEmailNo = (e) => {
    if (mailValit.test(e.target.value)) {
      this.setState({ mailValiType: 1 })
      this.setState({ mail: e.target.value })
    } else {
      this.setState({ mailValiType: 2 })
      this.setState({ mail: '' })
    }
  }

  setDate = (e) => {
    if(e!=null){
    this.setState({ startTime: e[0]._d })
    this.setState({ endTime: e[1]._d })
    }else{
      this.setState({ startTime: '' })
      this.setState({ endTime: '' })
    }
  }

  saveBookForm = () => {
    const {liscen,phone,mail,startTime,endTime} =this.state;
    
    if(liscen!==''&&phone!==''&&mail!==''&&startTime!==''&&endTime!==''){
      const order ={'carNumber':liscen,'phone':phone,
        'email':mail,'parkingStartTime':startTime,'parkingEndTime':endTime
        ,'parkingLotId':this.props.parkingLot.id
      }
      saveOrder(order).then((response)=>{
        this.props.setBookOrder(response.data)
        // 还有个跳转
      }).catch((error)=>{
        console.log(error);
      })
    }else{
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
    for (let i = start; i < end; i+=1) {
      result.push(i);
    }
    return result;
  }

  disabledDate=(time)=> {
    return time < Date.now() - 8.64e7;
  }


  render() {
    const { liscenValiType } = this.state;
    const { phoneValitType } = this.state;
    const { mailValiType } = this.state;
    return (
      <div>
        <Form
          layout="horizontal"
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
            help="请填写正确的邮箱号码"
            validateStatus={valitype[mailValiType]}
            hasFeedback
          >
            <Input
              rules={[{ required: true }]}
              prefix={<MailOutlined />}
              onBlur={this.isEmailNo}
              required
              size="large"
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please input your password!' }]}
            hasFeedback
            required
            size="large"
          >
            <RangePicker 
            className="form-width"
            showTime 
            onChange={this.setDate} 
            disabledDate={this.disabledDate} 
            format="YYYY年MM月DD日 小时:HH"
            />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.saveBookForm}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

BookInfoForm.propTypes = {
  parkingLot:PropTypes.any.isRequired,
  setBookOrder:PropTypes.func.isRequired
}

export default BookInfoForm;