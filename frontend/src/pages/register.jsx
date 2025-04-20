import { Button, Col, Form, notification, Row, Select } from "antd";
import Input from "antd/es/input/Input";
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { registerAPI } from "../services/api_service";
import "./register.css";

const RegisterPage = () => {
    const navigate = useNavigate();
    const [form]= Form.useForm();
    const onFinish = async (values) => {
        if (values.password !== values.password_1) {
            notification.error({
                message:"Mật khẩu không khớp"
            })
        }
        else {
            const res= await registerAPI(values.username,values.email,values.password);

            if(res.data ){
                notification.success({
                    message: "Đăng ký thành công"
                })
                navigate("/login")
                }
            else{
                notification.error({
                message:"Đăng ký thất bại"
            })
            }
        }
        
    }

    const location = useLocation();

    useEffect(() => {
        if (location.pathname === '/mypage') {
            document.documentElement.classList.add('custom-html');
        } else {
            document.documentElement.classList.remove('custom-html');
        }
    }, [location.pathname]);
    return (
        <div className="register-page">
            <Row style={{height:"100vh", overflowY:"hidden"}}>
                <Col span={12}>
                    <div className="register-form">
                        <h1 className="siteTitle" style={{marginBottom:"20px"}}>Đăng ký</h1>
                        <Form

                            layout="vertical"
                            form={form}
                            initialValues={{
                                remember: true,
                            }}
                            onFinish={onFinish}
                            autoComplete="off"
                            style={{
                                width: "100%", // Đảm bảo form chiếm toàn bộ chiều ngang
                                maxWidth: "750px", // Đặt chiều rộng tối đa cho form
                                fontSize:"x-large",
                            }}
                        >
                            <Form.Item
                                style={{
                                    fontSize:"x-large",
                                }}
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Phần này không được để trống!",
                                    },
                                ]}
                            >
                                <Input placeholder="Tên đăng nhập"style={{fontSize: "25px", color:"white" }} />
                            </Form.Item>

                            <Form.Item
                                name="email"
                                style={{
                                    fontSize:"x-large",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Phần này không được để trống!",
                                    },
                                ]}
                            >
                                <Input placeholder="Email" style={{ fontSize: "25px", color:"white" }}/>
                            </Form.Item>

                            <Form.Item
                                name="password"
                                style={{
                                    fontSize:"x-large",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Phần này không được để trống!",
                                    },
                                ]}
                            >
                                <Input placeholder="Mật khẩu" style={{ fontSize: "25px", color:"white" }} />
                            </Form.Item>
                            
                            <Form.Item
                                name="password_1"
                                style={{
                                    fontSize:"x-large",
                                }}
                                rules={[
                                    {
                                        required: true,
                                        message: "Phần này không được để trống!",
                                    },
                                ]}
                            >
                                <Input placeholder="Nhập lại mật khẩu" style={{ fontSize: "25px", color:"white" }} />
                            </Form.Item>

                            <Button className="siteContent" onClick={() => form.submit()}  color="danger" style={{
                                display: "block",
                                margin: "10px auto",
                                padding: "0px 20px",
                                textAlign: "center",
                                backgroundColor: "#B23F4C",
                                color : "white",
                                fontSize: "35px", height:"90px" , width:"100%", borderRadius:"50px 50px", fontWeight:"bold"
                            }}>
                                Đăng ký
                            </Button>

                            <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%", fontSize: "x-large",height:"100%" ,  borderRadius:"20px" , color:"white"}}>
                                <span className="siteContent" style={{fontSize:"20px"}}>Bạn đã có tài khoản?</span>
                                <Button className="siteContent" style={{padding:"50px 0 -4px 0", fontSize:"20px", color:"white", fontWeight:"bold"}}  type="link" htmlType="button" onClick={() => { navigate('/login'); }}>
                                    Đăng nhập ngay!
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>

                <Col span={12}>
                    <img
                        src= "/images/signup.png"

                        alt="Signup Illignup.pngustration" 
                        style={{
                            width: "100%",      
                            height: "100%",
                            maxWidth: "100%",  
                            display: "block",      
                        }}
                    />
                </Col>
            </Row>
        </div>
    )
}

export default RegisterPage;