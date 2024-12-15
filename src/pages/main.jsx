import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect,useContext} from "react"
import { AuthContext } from "../components/context/auth_context";
import './main.css'

const MainPage = () => {
    const navigate= useNavigate();
    const {prompt,setPrompt} = useContext(AuthContext)
    


    const handleSearch = (e) => {
        
       const value = e.target.value; // Get the input value
        setPrompt(value); // Update state
        console.log("prompt: ", value); // Use the current input value
        navigate("/search", { state: { prompt: value } }); // Pass the updated value
    };

    return(
        <div>
            <div className="container">
                <img  src= "/images/poster.png" alt="" />
            </div>
            <div className="search-container">
                <Input
                    placeholder="Search..."
                    suffix={<SearchOutlined style={{ color: "#fff" }} />}
                    className="custom-input"
                    onPressEnter={handleSearch}
                />
            </div>
        </div>
    )
}

export default MainPage;