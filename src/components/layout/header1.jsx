
import { AliwangwangOutlined, AuditOutlined, HomeOutlined, LoginOutlined, UsergroupAddOutlined } from '@ant-design/icons';
import { Divider, Menu, message } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logoutAPI } from "../../services/api_service";
import { AuthContext } from "../context/auth_context";
import "./header.css";
const Header = () =>{
    const [current, setCurrent] = useState('');
    const {user,setUser} = useContext(AuthContext)

    useEffect(() => {
    console.log("User state updated:", user);
    }, [user]);

    console.log("check data >>>>>>:",user)
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const  navigate= useNavigate()
    const handleLogout = async()=>{
        const  res= await logoutAPI();
        if(res.data){
            //clear data
            localStorage.removeItem('access_token');
            setUser({
                email:"",
                phone:"",
                fullName:"",
                role: "",
                avatar:"",
                id:""
            })

            message.success("Logout thanh cong");

            navigate("/intro");
        }
    }
    const items = [
        {
            label: 
            <NavLink to="/intro" style={{}}>
                <div style={{ display: "inline-flex", alignItems: "center", marginTop: "10px", marginBottom: "25px"}}>
                    <img 
                        src="/Logo.svg" 
                        alt="Logo" 
                        style={{width: "75px", marginTop: "15px"}} 
                    />
                    <span className="logoTitle" id="LogoHeader" style={{fontSize: "30px", marginTop: "20px", marginLeft: "20px"}}>MIUVIE</span>
                </div>
            </NavLink>,
            key: 'intro',
        },
        {
            label: <NavLink to="/about" className="siteTitle" style={{fontSize: "28px"}}>GIỚI THIỆU</NavLink>,
            key: 'about',
            style: {marginLeft: 'auto', marginTop: "30px"},
        },
        {
            label: <NavLink to="/register" className="siteTitle" style={{fontSize: "28px"}}>ĐĂNG KÝ</NavLink>,
            key: 'register',
            style: {marginTop: "30px"},
        },
        {
            label: <NavLink to="/login" className="siteTitle" style={{fontSize: "28px"}}>ĐĂNG NHẬP</NavLink>,
            key: 'login',
            style: {marginTop: "30px"},
        },

    ];

    return (
        <div className="header">
            <Menu
                style={{paddingRight:"50px", paddingLeft:"60px"}}
                className = "Navbar"
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
            {/* <Divider variant="bold" style={{ borderColor: 'white',margin:'0px'}}></Divider> */}
        </div>
    );
}

export default Header;