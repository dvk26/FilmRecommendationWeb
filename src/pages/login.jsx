import Input from "antd/es/input/Input";
import {Form, Button, notification, Row, Col,Divider, message,Select} from "antd";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api_service";
import { useState, useContext } from "react";
import { AuthContext } from "../components/context/auth_context";

const LoginPage = () => {

    const [form]= Form.useForm();
    const [loading, setLoading] = useState(false)
    const {setUser} =useContext(AuthContext);
    const onFinish = async(events) =>{
        setLoading(true);
        
        const res= await loginAPI(events.fullname, events.password)
   
        if((res && !res.error)||(res.data && !res.error)){
            message.success("Đăng nhập thành công")
           // console.log("user: ", res.data.user)
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/")

        }
        else {
            notification.error({
            message:"Error login user",
            description: "Tên đăng nhập hoặc mật khẩu không đúng"
        })
        }
        setLoading(false)

    }
    const navigate = useNavigate();
    return (
        <Row justify={"center"} style={{margin:"30px"}}>
            <Col xs={24} md={16} lg={8}>
                <fieldset style={{
                    padding: "15px",
                    margin:"5px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}>
                    <legend>Đăng nhập</legend>
                    <Form
                        loading={loading}
                        layout="vertical"
                        style={{
                            padding: "20px",
                            backgroundColor: "#ffffff", // Nền trắng cho form
                            margin: "0 auto", // Căn giữa form
                        
                        }}
                        form={form}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        autoComplete="off"
                     >
                
                        <Form.Item
                            label="Username"
                            name="fullname"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your username!",
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                    

                
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
                        <Input.Password  onKeyDown={(event)=>{
                            if(event.key==='Enter') form.submit();
                        }}/>
                    </Form.Item>
                    
                    
                    <div style={{display: "flex", justifyContent: "center", textAlign: "center"}}>
                        <Button  onClick={() => { form.submit(); }} type="primary">
                            Login
                        </Button>
                        <Button type="link" htmlType="button" onClick={() => { navigate('/'); }}>
                            Go to home page
                        </Button>
                    </div>
                    
                    
            
                    <Divider variant="dashed" style={{ borderColor: '#7cb305' }}></Divider>
                    <div>
                        <span>Chưa có tài khoản?</span>
                        <Button type="link" htmlType="button" onClick={() => { navigate('/register'); }}>
                        Đăng ký tại đây
                        </Button>
                    </div>
                
        </Form>

                </fieldset>
            </Col>
        </Row>
        
    )
}

export default LoginPage;