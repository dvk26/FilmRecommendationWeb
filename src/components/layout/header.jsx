
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
        console.log("message logout: ", user)
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
            
            navigate("/");
        }
    }
    const items = [
        {
        label: <NavLink to="/">Home</NavLink>,
        key: 'home',
        icon: <HomeOutlined  />,
        },
        {
            label: <NavLink to="/users">Users</NavLink>,
            key: 'users',
            icon: <UsergroupAddOutlined  />,
        },
        {
            label: <NavLink to="/products">Products</NavLink>,
            key: 'products',
            icon: <AuditOutlined />,
        },
        {
            label: <NavLink to="/main">Main</NavLink>,
            key: 'main',
            incon: <HomeOutlined />,
        },
        {
            label: <NavLink to="/intro">Intro</NavLink>,
            key: 'intro',
            incon: <HomeOutlined />,
        },
        
        ...(!user?.id ?
            [
                {
                    label: <Link to = {"/login"}>Login</Link>,
                    key: 'login',
                    icon:<LoginOutlined/>,
                }
            ]:[]
        ),
        ...(user?.id ?  
            [
                {
                    label: `Welcome ${user.fullName}`,
                    key: 'setting',
                    icon:<AliwangwangOutlined/>,
                    children:
                    [
                        {
                            label:<span onClick={()=>handleLogout()}>Đăng xuất</span>,
                            key:"logout"
                        }
                    ]
                }
            ]:[]
        ),

    ];
    return (
        <div className="header">
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode="horizontal"
                items={items}
            />
            <Divider variant="bold" style={{ borderColor: 'white',margin:'0px'}}></Divider>
        </div>
        
    );
}

export default Header;