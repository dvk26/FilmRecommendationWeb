import Input from "antd/es/input/Input";
import {Form, Button, notification, Row, Col, Select} from "antd";
import { registerAPI } from "../services/api_service";
import { useNavigate } from "react-router-dom";
const RegisterPage = () => {
    const navigate = useNavigate();
    const [form]= Form.useForm();
    const onFinish = async (values) => {
        const res= await registerAPI(values.username,values.fullname,values.email,values.password,values.phone, values.gender);

        if(res ||res.data ){
            notification.success({
                message: "Success register user",
                description: "Register user thành công"
            })
            navigate("/login")
            }
        else{
            notification.error({
            message:"Error register user",
            description: JSON.stringify(res.message)
        })
        }
    }
    const gender_options = [
        {
            value: 'MALE',
            label: 'Male',
        },
        {
            value: 'FEMALE',
            label: 'Female',
        },
        {
            value: 'OTHER',
            label: 'Other',
        },
    ];
    return (
        <Form
            layout="vertical"
            
            form={form}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            // onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                <Form.Item
                    label="Fullname"
                    name="fullname"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your username!',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>
            
            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                <Form.Item
                    form ={form}
                    
                    label="Email"
                    name="email"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your email!',
                        },
                    ]}
                    >
                    <Input />
                </Form.Item>
                </Col>
            </Row>

            
            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                        required: true,
                        message: 'Please input your password!',
                        },
                    ]}
                    >
                    <Input.Password />
                </Form.Item>
                </Col>
            </Row>
            

            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                    <Form.Item
                    label="Phone number"
                    name="phone"
                    rules={[
                        {
                        pattern: new RegExp(/\d+/g),
                        message: 'Wrong format!',
                        },
                    ]}
                    >
                <Input />
                  </Form.Item>
                </Col>
            </Row>

            <Row style={{justifyContent:"center"}}>
                <Col xs={24} md={6}>
                    <Form.Item
                        name="gender"
                        rules={[{ required: true, message: 'Please select your gender!' }]}
                    >
                        <Select defaultValue="Gender" options={gender_options} />
                    </Form.Item>
                </Col>
            </Row>


            
            
            <Row style={{justifyContent:"center"}} >
                <Col xs={24} md={6}>
                    <Button onClick={()=>{form.submit()}} type="primary">
                        Register
                    </Button>
                </Col>
            </Row>
    
        </Form>
        )
}

export default RegisterPage;