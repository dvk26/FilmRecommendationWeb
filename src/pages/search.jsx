import {useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {Input, Radio, Button, Row, Col, Flex, Dropdown, Select, Form, Checkbox} from 'antd'
import { SearchOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { searchAPI } from "../services/api_service";
import { AuthContext } from "../components/context/auth_context";
import "./search.css"

const SearchPage = () =>{
    const location = useLocation();
    const navigate= useNavigate();

    const {prompt,setPrompt} = useContext(AuthContext)

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
        if (location.state && location.state.prompt) {
            setPrompt(location.state.prompt);
            fetchFilmList(prompt)
        }
    }, [location, setPrompt]);

    const [value, setValue] = useState(null); // Use null for no selection initially

    const handleClickRadio = (clickedValue) => {
        setValue((prevValue) => (prevValue === clickedValue ? null : clickedValue)); // Toggle if the same value
    };

    const [active_like, setLikeActive] = useState(false);
    const [active_dislike, setDisLikeActive] = useState(false);

    useEffect(() => {
        setLikeActive(false); // Reset to inactive state on page load
        setDisLikeActive(false);
    }, []);

    const handleClickLike = () => {
        setLikeActive(true); // Toggle active state
        setDisLikeActive(false);
    };
    
    const handleClickDisLike = () => {
        setLikeActive(false);
        setDisLikeActive(true); 
    };

    const onFinish = (values) => {
        console.log("Selected values:", values["checkbox-group"]);
    };

    const items = [
        {
            key: "1",
            label: (
                <div className="dropdownContent" style={{
                    width: "250px", 
                    height: "210px",
                    overflowX: "hidden",
                    overflowY: "hidden"
                     
                }}>
                    <p className="siteTitle" style={{ fontSize: "25px", margin: "0" }}>
                        Danh sách của tôi
                    </p>
                    <hr style={{ margin: "0 0 10px 0" }} />

                    <Form
                        name="checkboxForm"
                        onFinish={onFinish}
                        initialValues={{
                            "checkbox-group": [],
                        }}
                    >
                        <Checkbox.Group 
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent dropdown from closing
                            }}

                            style={{
                                maxHeight:"100px",
                                overflowY: "auto", 
                                overflowX: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                width: "100%"
                            }}
                        >
                            <Row>
                                <Col span={24}>
                                    <Checkbox value="Phim Tết" style={{ marginBottom: "10px"}}>
                                        <p>Phim Tết11111111111 11111111111111111111111111111111111111111111111111111111111111111111</p>
                                    </Checkbox>
                                </Col>

                                <Col span={24}>
                                    <Checkbox value="Phim kinh dị" style={{ marginBottom: "10px" }}>
                                        <p>Phim kinh dị</p>
                                    </Checkbox>
                                </Col>
                                
                                <Col span={24}>
                                    <Checkbox value="Ở ven chờ" style={{ marginBottom: "10px" }}>
                                        <p>Ở ven chờ</p>
                                    </Checkbox>
                                </Col>

                                <Col span={24}>
                                    <Checkbox value="New colletion" style={{ marginBottom: "10px" }}>
                                        <p>New Collection</p>
                                    </Checkbox>
                                </Col>
                            </Row>
                        </Checkbox.Group>
                        
                        <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
                            <Button htmlType="button" style={{ background: "#fff", border: "1px solid #ccc" }}>
                                Hủy
                            </Button>
                            <Button htmlType="submit" type="primary" style={{ background: "#28a745", border: "none" }}>
                                Lưu
                            </Button>
                        </div>
                    </Form>
                </div>
            ),
        },
    ];

    return(
        <div style={{paddingRight:"110px", paddingLeft:"110px"}}>
            {}

            {error && <p>Error: {error}</p>}
            {Array.isArray(films) && films.length > 0 ? (
                films.map((film, index) => (
                <Row key={index}>
                    <Col span={8} style={{paddingTop: "40px"}}>
                        {/* <img style={{width:"100%", maxHeight:"85%", borderRadius: "5%"}} src={film.imageUrl} alt="/GroupPhoto.svg"/>     */}
                        <img
                            style={{ width: "100%", maxHeight: "85%", borderRadius: "5%" }}
                            src={film.imageUrl || "/testGrayPicture.svg"} // Use fallback if `imageUrl` is null
                            alt="Group Photo"
                            onError={(e) => {
                                e.target.onerror = null; // Prevent infinite loop in case fallback image also fails
                                e.target.src = "/testGrayPicture.svg"; // Set fallback image
                            }}
                        />
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
                            <Dropdown
                                menu={{
                                items,
                                }}
                                placement="topLeft" 
                                trigger={['click']}
                            >
                                <Button className= "myListButton" id="ButtonAbout" style={{marginBottom: "100px"}}> + My List</Button>
                            </Dropdown> 
    
                            <Button
                                className="dis_LikeButton"
                                style={{
                                    marginLeft: "40px",
                                    backgroundColor: active_like ? "#1890ff" : "transparent", // Active state background
                                    color: active_like ? "#fff" : "inherit", // Change text/icon color
                                    border: active_like ? "1px solid #1890ff" : "1px solid #d9d9d9", // Border color
                                }}
                                onClick={handleClickLike}
                                >
                                <LikeOutlined />
                            </Button>

                            <Button
                                className="dis_LikeButton"
                                style={{
                                    marginLeft: "40px",
                                    backgroundColor: active_dislike ? "#1890ff" : "transparent", // Active state background
                                    color: active_dislike ? "#fff" : "inherit", // Change text/icon color
                                    border: active_dislike ? "1px solid #1890ff" : "1px solid #d9d9d9", // Border color
                                }}
                                onClick={handleClickDisLike}
                                >
                                <DislikeOutlined />
                            </Button>
                        </div>
                    </Col>
                </Row>
                ))
                ) : (
                <p>Waiting films found.</p>
            )}
        </div>
    )
}

export default SearchPage;