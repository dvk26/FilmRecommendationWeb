import Input from "antd/es/input/Input";
import {Form, Checkbox, Button, notification, Row, Col, Divider, message} from "antd";
import { useNavigate } from "react-router-dom";
import { loginAPI } from "../services/api_service";
import { useState, useContext } from "react";
import { AuthContext } from "../components/context/auth_context";
import "./login.css";

const LoginPage = () => {

    const [form]= Form.useForm();
    const [loading, setLoading] = useState(false)
    const {setUser} =useContext(AuthContext);
    const onFinish = async(events) =>{
        setLoading(true);
        
        const res= await loginAPI(events.username, events.password)
        
        if((res && !res.error)||(res.data && !res.error)){
            message.success("Đăng nhập thành công")
           // console.log("user: ", res.data.user)
            localStorage.setItem("access_token", res.data.access_token);
            setUser(res.data.user);
            navigate("/main")

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
        <div className="login-page">
            <Row style={{height:"100vh", overflowY:"hidden"}}>
                <Col span={12}>
                    <img
                            src= "/LoginPic.png"

                            alt="Signup Illignup.pngustration" 
                            style={{
                                height:"100%",
                                width:"100%",
                                display: "block",      // Đảm bảo hình ảnh là một block element
                            }}
                    />
                </Col>

                <Col span={12} style={{
                    margin: "0px",
                    padding: "0px"
                }}>
                    <div className="login-form">
                        <h2 className="siteTitle" style={{paddingLeft:"10px", color:"white"}}>Đăng nhập</h2>
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
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: "Vui lòng không để trống mục này!",
                                    },
                                ]}
                            >
                                <Input placeholder="Tên đăng nhập"style={{ fontSize: "x-large", color:"white" }} />
                            </Form.Item>
                        

                    
                            <Form.Item
                                name="password"
                                rules={[
                                    {
                                    required: true,
                                    message: 'Vui lòng không để trống mục này!',
                                    },
                                ]}
                                >
                                <Input
                                placeholder="Mật khẩu"style={{ fontSize: "x-large", color:"white" }}
                                />
                            </Form.Item>
                            
                            <div style={{display:"flex", padding:"0 10px 0 10px"}}>
                                <Form.Item name="remember">
                                    <Checkbox className="siteContent" style={{fontSize:"20px"}}>Ghi nhớ tôi</Checkbox>
                                </Form.Item>

                                <a href="#" className="siteContent" style={{fontSize:"20px", marginLeft:"auto", fontWeight:"bold"}}>Bạn quên mật khẩu?</a>
                            </div>
                            
                            <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%", marginBottom:"15px"}}>
                                <Button style={{ height:"90px" , width:"100%", borderRadius:"50px 50px", backgroundColor:"#B23F4C", border: ".5px solid white"}} onClick={() => { form.submit(); }} type="primary">
                                    <p style={{fontSize: "x-large", fontWeight:"bold"}}>Đăng nhập</p>
                                </Button>
                            </div>

                            <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%", fontSize: "x-large",height:"100%" ,  borderRadius:"20px" , color:"white"}}>
                                <span className="siteContent" style={{fontSize:"20px"}}>Bạn chưa có tài khoản?</span>
                                <Button className="siteContent" style={{padding:"50px 0 -4px 0", fontSize:"20px", color:"white", fontWeight:"bold"}}  type="link" htmlType="button" onClick={() => { navigate('/register'); }}>
                                    Đăng ký ngay!
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
        
        
    )
}

export default LoginPage;