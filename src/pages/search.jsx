import {useLocation, useNavigate} from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import {Input, Radio, Button, Row, Col, Flex, Dropdown} from 'antd'
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

    console.log(active_like);
    const items = [
        {
            key: '1',
            label: (
                <div>
                    <p className='siteTitle' style={{fontSize:"25px"}}>Danh sách của tôi</p>
                    <hr />

                    <ul
                        style={{
                            paddingLeft: "20px",
                            listStyle: "square",
                            color: "white",
                            width: "200px", 
                            maxHeight:"90px",
                            overflowY: "auto", 
                            overflowX: "hidden", 
                        }}
                    >
                        <li
                            style={{
                                alignItems: "center",
                                maxWidth: "200px",
                            }}
                        >
                            <Row style={{ width: "100%" }}>
                                <Col span={21}>
                                    <p
                                        className='siteContent' 
                                        style={{
                                            fontSize:"20px",
                                            margin: 0,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: "100%",
                                        }}
                                    >
                                        Collection 1111111111111111111111
                                    </p>
                                </Col>
                                <Col span={1}>
                                    <Radio
                                        value={1}
                                        checked={value === 1}
                                        onClick={() => handleClickRadio(1)}
                                        style={{ marginTop: "5px" }}
                                    />
                                </Col>
                            </Row>
                        </li>

                        <li
                            style={{
                                alignItems: "center",
                                maxWidth: "200px",
                            }}
                        >
                            <Row style={{ width: "100%" }}>
                                <Col span={21}>
                                    <p
                                        className='siteContent' 
                                        style={{
                                            fontSize:"20px",
                                            margin: 0,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: "100%",
                                        }}
                                    >
                                        Collection 2
                                    </p>
                                </Col>
                                <Col span={1}>
                                    <Radio
                                        value={1}
                                        checked={value === 2}
                                        onClick={() => handleClickRadio(2)}
                                        style={{ marginTop: "5px" }}
                                    />
                                </Col>
                            </Row>
                        </li>

                        <li
                            style={{
                                alignItems: "center",
                                maxWidth: "200px",
                            }}
                        >
                            <Row style={{ width: "100%" }}>
                                <Col span={21}>
                                    <p
                                        className='siteContent'
                                        style={{
                                            fontSize:"20px",
                                            margin: 0,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: "100%",
                                        }}
                                    >
                                        Collection 3
                                    </p>
                                </Col>
                                <Col span={1}>
                                    <Radio
                                        value={1}
                                        checked={value === 3}
                                        onClick={() => handleClickRadio(3)}
                                        style={{ marginTop: "5px" }}
                                    />
                                </Col>
                            </Row>
                        </li>

                        <li
                            style={{
                                alignItems: "center",
                                maxWidth: "200px",
                            }}
                        >
                            <Row style={{ width: "100%" }}>
                                <Col span={21}>
                                    <p
                                        className='siteContent'
                                        style={{
                                            fontSize:"20px",
                                            margin: 0,
                                            overflow: "hidden",
                                            whiteSpace: "nowrap",
                                            textOverflow: "ellipsis",
                                            width: "100%",
                                        }}
                                    >
                                        Collection 3
                                    </p>
                                </Col>
                                <Col span={1}>
                                    <Radio
                                        value={1}
                                        checked={value === 4}
                                        onClick={() => handleClickRadio(4)}
                                        style={{ marginTop: "5px" }}
                                    />
                                </Col>
                            </Row>
                        </li>
                    </ul>
                    {/* <Space direction="vertical" > */}
                    {/* <ul maxWidth="100" style={{paddingLeft:"20px", listStyle:"square", color:"white"}}>
                        <li style={{alignItems: "center", whiteSpace:"nowrap"}}>
                            <Row>
                                <Col span={5}>
                                    <p>Collection 1111111111111111111111111</p>
                                </Col>

                                <Col span={3}>
                                    <Radio
                                        value={1}
                                        checked={value === 1}
                                        onClick={() => handleClick(1)}
                                        style={{marginTop:"5px"}}
                                    />
                                </Col>
                            </Row>
                        </li>
                        {/* <li style={{ display: "flex", alignItems: "center", overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                            <Row>
                                <Col span={21}>
                                    <p style={{ margin: 0, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
                                        Collection 1111111111
                                    </p>
                                </Col>
                                <Col span={1}>
                                    <Radio
                                        value={1}
                                        checked={value === 1}
                                        onClick={() => handleClick(1)}
                                        style={{ marginTop: "5px" }}
                                    />
                                </Col>
                            </Row>
                        </li> 

                        <li>
                            <Space direction="horizontal">
                                <p>Collection 2</p>
                                <Radio
                                    value={2}
                                    checked={value === 2}
                                    onClick={() => handleClick(2)}
                                />
                            </Space>
                        </li>

                        <li>
                        <Space direction="horizontal">
                            <p>Collection 3</p>
                            <Radio
                                value={3}
                                checked={value === 3}
                                onClick={() => handleClick(3)}
                            />
                        </Space>
                        </li>

                        <li>
                        <Space direction="horizontal">
                            <p>Collection 4</p>
                            <Radio
                                value={4}
                                checked={value === 4}
                                onClick={() => handleClick(4)}
                            />
                        </Space>
                        </li>
                    </ul> */}
                    {/* </Space> */}
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