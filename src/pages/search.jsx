import {useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {Input, Button, Row, Col, Flex} from 'antd'
import { SearchOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { searchAPI } from "../services/api_service";
import "./search.css"

const SearchPage = () =>{
    const location = useLocation();
    const navigate= useNavigate();

    const [prompt, setPrompt]= useState(location.state?.prompt);

    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);

    const fetchFilmList = async (prompt) => {
        try {
          const response = await searchAPI(prompt);
          console.log("check film list:", response.data);
          setFilms(response.data); // Store films in state
        } catch (error) {
          console.error("Error fetching films:", error);
          setError(error.message); // Handle error
        }
    };

    useEffect(() => {
        fetchFilmList(prompt);
    }, [prompt]);


    let new_prompt = "";
    const handleSearch = (e) => {
        
        const value = e.target.value; // Lấy giá trị từ input
        new_prompt=value // Cập nhật state
        console.log("prompt: ", new_prompt);

        navigate("/search", { state: { new_prompt } });
    };


    return(
        <div style={{paddingRight:"110px", paddingLeft:"110px"}}>
            {/* <div className="search-container">
                <Input
                    defaultValue={prompt}
                    suffix={<SearchOutlined style={{ color: "#fff" }} />}
                    className="custom-input"
                    onPressEnter={handleSearch}
                />
            </div> */}

            {error && <p>Error: {error}</p>}
            {films.length > 0 ? (
                films.map((film, index) => (
                <Row key={index}>
                    <Col span={8} style={{paddingTop: "40px"}}>
                        <img style={{width:"100%", maxHeight:"85%", borderRadius: "5%"}} src={film.imageUrl} alt="Poster1"/>    
                    </Col>

                    <Col span={16} style={{paddingTop: "40px", paddingLeft: "70px"}}>
                        <div>
                            <p className="siteTitle" style={{fontSize: "43px"}}>{film.title}</p>

                            <Flex gap={"large"} style={{marginTop: "15px", fontWeight: "bold"}}>
                                <p className="siteContent">{film.imdbRating} IMDb</p>
                                <p className="siteContent" style={{marginLeft:"90px"}}>{film.year}</p>
                                <p className="siteContent" style={{marginLeft:"90px"}}><ClockCircleOutlined />&nbsp; {film.time}m</p>
                            </Flex>

                            <p className="siteContent" style={{fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}}>{film.genres}</p>
                            <hr style={{width:"70%"}}/>

                            <p className="siteContent" style={{textAlign: "justify", marginTop: "15px", fontSize: "25px"}}>
                            {film.overview}
                            </p>
                        </div>
                        

                        <div style={{position: "absolute", bottom: "0"}}>
                            <Button className= "myListButton" id="ButtonAbout" style={{marginBottom: "100px"}}> + My List</Button>
                            <Button className='dis_LikeButton' style={{marginLeft: "40px"}}><LikeOutlined /></Button>
                            <Button className='dis_LikeButton' style={{marginLeft: "40px"}}><DislikeOutlined /></Button>
                        </div>
                    </Col>
                </Row>
                ))
                ) : (
                <p>No films found.</p>
            )}
        </div>
    )
}

export default SearchPage;