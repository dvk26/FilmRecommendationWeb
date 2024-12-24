
import { SearchOutlined, HomeFilled, MenuUnfoldOutlined } from '@ant-design/icons';
import { Divider, Menu, message, Input, Flex } from 'antd';
import { useContext, useEffect, useState } from 'react';
import { Link, NavLink, useNavigate, useLocation } from "react-router-dom";
import { logoutAPI } from "../../services/api_service";
import { AuthContext } from "../context/auth_context";
import "./header.css";
const Header = () =>{
    const [current, setCurrent] = useState('');
    const {user,setUser} = useContext(AuthContext);
    const {prompt,setPrompt} = useContext(AuthContext);
    const location = useLocation();
    const isHomePage = location.pathname === '/main';

    // console.log("check data >>>>>>:",user)
    const onClick = (e) => {
        setCurrent(e.key);
    };
    const handleSearch = (e) => {
        
        const value = e.target.value; // Lấy giá trị từ input
        setPrompt(value);
        navigate("/search", { state: { prompt: value } });
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

            navigate("/");
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
        !isHomePage && {
                            label:
                            <Input
                                    value={`${prompt}`}
                                    onChange={(e) => setPrompt(e.target.value)}
                                    suffix={<SearchOutlined style={{ color: "#fff" }} />}
                                    className="custom-input-header"
                                    onPressEnter={handleSearch}
                            />,
                            key: 'searchBar',
        },
        {
            label: <NavLink to="/main"><img src='./Home.svg'></img></NavLink>,
            key: 'main',
            style: {marginLeft: 'auto', marginTop: "30px"},
        },
        {
            label: <NavLink to="/collection"><img src='./Collection.svg'></img></NavLink>,
            key: 'collection',
            style: {marginLeft: '45px',marginTop: "35px"},
        },
        
        {
            label: 
            <Flex>
                <img src="./Avatar.svg" alt="" style={{maxWidth:"50px", maxHeight:"50px"}}/>
                <p style={{fontSize: "20px", paddingTop: "5px", marginLeft: "10px", fontWeight: "bold"}}>{user.fullName}</p>
            </Flex>,
            key: 'setting',
            children:
            [
                {
                    label:<span onClick={()=>handleLogout()}>Đăng xuất</span>,
                    key:"logout"
                }
            ],
            style: {marginLeft: '45px',marginTop: "25px"},
        },

    ];
    return (
        <Menu   
            style={{paddingRight:"50px", paddingLeft:"60px"}}
            className = "Navbar"
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        ></Menu>
    );
}

export default Header;