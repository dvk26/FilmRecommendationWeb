import Input from "antd/es/input/Input";
import {Form, Button, notification, Row, Col,Divider, message} from "antd";
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
        <div className="login-page">
            <Row justify={"center"} style={{ margin: "0px", padding: "20px 0", width:"100%",display:"flex",justifyContent: "flex-start", alignItem: "center"}}>
                <Col xs={24} md={16} lg={12}
                    style={{
                        padding: 0, // Loại bỏ padding
                        display: "flex",
                        justifyContent: "flex-start", 
                        alignItem: "center",
                    }}
                >
                    <img
                        src= "/images/login.png"

                        alt="Signup Illignup.pngustration" 
                        style={{
                            height:"98%",
                            width: "102%",        // Chiều rộng hình ảnh chiếm toàn bộ container
                            maxWidth: "600px",    // Chiều rộng tối đa
                            margin: "20px auto",  // Căn giữa hình ảnh
                            display: "block",      // Đảm bảo hình ảnh là một block element
                            padding: "10px 50px 20px 10px",
                            marginLeft: "20px",
                        }}
                    />
                    <fieldset style={{
                        margin: "0px",
                        border: "none",
                        borderRadius: "5px",
                        padding: "10px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                    }}>
                        <div className="login-form" >
                            <h2 style={{paddingLeft:"40px"}}>Đăng nhập</h2>
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
                                            message: "Please input your username!",
                                        },
                                    ]}
                                >
                                    <Input placeholder="Username"style={{ fontSize: "x-large" }} />
                                </Form.Item>
                            

                        
                                <Form.Item

                                    name="password"
                                    rules={[
                                        {
                                        required: true,
                                        message: 'Please input your password!',
                                        },
                                    ]}
                                    >
                                    <Input.Password   onKeyDown={(event)=>{
                                        if(event.key==='Enter') form.submit();
                                    }}
                                    placeholder="Password"style={{ fontSize: "x-large", height:"100%" }}
                                    />
                                </Form.Item>
                                
                                
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%"}}>
                                    <Button style={{ fontSize: "x-large",height:"190%" , width:"100%", borderRadius:"20px", backgroundColor:"#B23F4C"}} onClick={() => { form.submit(); }} type="primary">
                                        Đăng nhập
                                    </Button>
                                </div>
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%"}}>
                                    <Button style={{ fontSize: "x-large",height:"100%" , width:"100%", borderRadius:"20px" , color:"white"}} 
                                         type="link" htmlType="button" onClick={() => { navigate('/'); }}>
                                        Go to home page
                                    </Button>
                                </div>
                                    
                                
                                
                        
                                <Divider variant="dashed" style={{ borderColor: 'white' }}></Divider>
                                <div style={{display: "flex", justifyContent: "center", textAlign: "center" , width:"100%", fontSize: "x-large",height:"100%" ,  borderRadius:"20px" , color:"white"}}>
                                    <span>Chưa có tài khoản?</span>
                                    <Button style={{padding:"5px 5px -4px 5px",fontSize:"large", color:"white"}}  type="link" htmlType="button" onClick={() => { navigate('/register'); }}>
                                    Đăng ký tại đây
                                    </Button>
                                </div>
                            
                            </Form>
                        </div>
                        

                    </fieldset>
                </Col>
            </Row>
        </div>
        
        
    )
}

export default LoginPage;