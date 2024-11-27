import { SearchOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import {useState,useEffect} from "react"
import './main.css'

const MainPage = () => {
    const navigate= useNavigate();

    let prompt="";
    const handleSearch = (e) => {
        
        const value = e.target.value; // Lấy giá trị từ input
        prompt=value // Cập nhật state
        console.log("prompt: ", prompt);

        navigate("/search", { state: { prompt } });
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