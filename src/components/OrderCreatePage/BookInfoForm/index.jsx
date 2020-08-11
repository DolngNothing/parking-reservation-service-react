import React from 'react'

import moment from 'moment'
import { Form, Input, Button, DatePicker } from 'antd';
import { CarOutlined, PhoneOutlined, MailOutlined } from '@ant-design/icons';

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
    
    if(liscen!=''&&phone!=''&&mail!=''&&startTime!=''&&endTime!=''){
      console.log('可以传输啦！');
    }else{
      alert("请输入时间")
    }


  //   this.axios.post(URL,{'liscen':liscen,'phone':phone,
  //   'mail':mail,'startTime':startTime,'endTime':endTime
  // })

  }

  range(start, end) {
    let result = [];
    for (let i = start; i < end; i++) {
      result.push(i);
    }
    return result;
  }

  disabledDate(time) {
    return time < Date.now() - 8.64e7;
  }


  render() {
    const formItemLayout ={
      labelCol: { span: 4 },
      wrapperCol: { span: 6 },
    }
    const buttonItemLayout ={
      wrapperCol: { span: 6, offset: 0 },
    }
    const { liscenValiType } = this.state;
    const { phoneValitType } = this.state;
    const { mailValiType } = this.state;
    return (
      <div>
        <Form {...formItemLayout}
        layout={'horizontal'}
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
            />
          </Form.Item>
          <Form.Item
            rules={[{ required: true, message: 'Please input your password!' }]}
            hasFeedback
            required
          >
            <RangePicker 
            showTime 
            onChange={this.setDate} 
            disabledDate={this.disabledDate} 
            format="YYYY年MM月DD日 小时:HH" />
          </Form.Item>
          <Form.Item {...buttonItemLayout}>
            <Button type="primary" htmlType="submit" onClick={this.saveBookForm}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default BookInfoForm;