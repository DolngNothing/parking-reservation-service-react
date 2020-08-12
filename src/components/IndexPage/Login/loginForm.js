import React from 'react';
import { Modal, Form, Input, message } from 'antd';
import { userLogin } from '../../../http/api'
import './index.css'

const valitype = ['', 'success', 'error'];
const phoneValit = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
let flag = 0;
export const CollectionCreateForm = (props) => {
  const {changeVisible, isModalVisible, saveLoginStatus} = props;
  const [form] = Form.useForm();

  const onCreate = values => {
    const requestBody = {
        phoneNumber: values.phone,
        password: values.password
      }

      userLogin(requestBody).then((response) => {
        if(response.status === 200){
          const userInfo = {
            session: response.data.session,
            id: response.data.id,
            username: response.data.username
          }
          message.success('登陆成功');
          saveLoginStatus(userInfo)
          changeVisible(false);
        }else{
          changeVisible(true);
        }
      }).catch(()=>{
        changeVisible(true);
      })
  };

  const onCancel = () => {
    changeVisible(false);
    form.resetFields();
  }

  const isPhoneNo = (e) => {
    if (phoneValit.test(e.target.value)) {
      flag = 1;
    } else {
      flag = 2;
    }
}

  
  return (
    <Modal
      visible={isModalVisible}
      title="Login"
      okText="Login"
      cancelText="Cancel"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields();
            onCreate(values);
          })
          .catch(info => {
            console.log('Validate Failed:', info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{
          modifier: 'public',
        }}
      >
        <Form.Item
            help="请填写正确的手机号"
            label="PhoneNumber"
            name="phone"
            validateStatus={valitype[flag]}
            hasFeedback
        >
            <Input
                rules={[{ required: true }]}
                onBlur={isPhoneNo}
                required
            />
        </Form.Item>
        <Form.Item
            help="密码不能为空"
            label="Password"
            name="password"
            validateStatus={valitype[flag]}
            rules={[{ required: true, message: '密码不能为空' }]}
            hasFeedback
        >
            <Input.Password />
        </Form.Item>
      </Form>
    </Modal>
  );
};