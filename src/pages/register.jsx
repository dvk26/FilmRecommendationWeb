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
                message:"Error register user",
                description: "Password không khớp"
            })
        }
        else {
            const res= await registerAPI(values.username,values.email,values.password);

            if(res.data ){
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
            <Row justify={"center"} style={{ margin: "0px", padding: "20px 0", width:"100%",display:"flex",justifyContent: "flex-start", alignItem: "center"}}>
                <Col xs={24} md={16} lg={12} style={{
                    padding: 0, // Loại bỏ padding
                    display: "flex",
                    justifyContent: "flex-start", 
                    alignItem: "center",
                }}>
                
                <fieldset
                style={{
                    margin: "5px",
                    border: "none",
                    borderRadius: "5px",
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                }}
                >
                    <div className="register-form" >
                        <h1>Đăng ký</h1>
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
                                <Input placeholder="Tên đăng nhập"style={{ fontSize: "large" }} />
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
                                <Input placeholder="Email" style={{ fontSize: "large" }}/>
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
                                <Input placeholder="Mật khẩu" style={{ fontSize: "large" }} />
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
                                <Input placeholder="Nhập lại mật khẩu" style={{ fontSize: "large" }} />
                            </Form.Item>

                            <Button onClick={() => form.submit()}  color="danger" style={{
                                display: "block",
                                margin: "10px auto",
                                padding: "0px 20px",
                                textAlign: "center",
                                backgroundColor: "#B23F4C",
                                color : "white",
                                width:"100%",
                                borderRadius:"20px",
                                fontSize:"large",
                            }}>
                                Register
                            </Button>
                        </Form>
                    </div>
                </fieldset>

                <img
                    src= "/images/signup.png"

                    alt="Signup Illignup.pngustration" 
                    style={{
                        width: "100%",        // Chiều rộng hình ảnh chiếm toàn bộ container
                        maxWidth: "600px",    // Chiều rộng tối đa
                        margin: "20px auto",  // Căn giữa hình ảnh
                        display: "block",      // Đảm bảo hình ảnh là một block element
                        padding: "20px"
                    }}
                />
                
                </Col>
            </Row>
        </div>
    )
}

export default RegisterPage;