import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import {Input} from 'antd'
import { SearchOutlined } from '@ant-design/icons';

const SearchPage = () =>{
    const location = useLocation();
    const [prompt, setPrompt]= useState(location.state?.prompt);


    const handleSearch=(e) =>{
        console.log(e.target.value);
    }


    return(
        <div className="container">
            <div className="search-container">
                <Input
                    value={prompt}
                    suffix={<SearchOutlined style={{ color: "#fff" }} />}
                    className="custom-input"
                    onPressEnter={handleSearch}
                />
            </div>

        </div>
    )
}

export default SearchPage;