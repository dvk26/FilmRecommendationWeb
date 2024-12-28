import { useLocation } from 'react-router-dom'
import { useState, useEffect, useContext } from 'react'
import { Button, Row, Col, Flex, Dropdown, Select, Form, Checkbox } from 'antd'
import { ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import { searchAPI, likeAPI, disLikeAPI, getCollectionAPI, addToCollectionAPI, getTickedCollectionsAPI } from "../services/api_service";
import { AuthContext } from "../components/context/auth_context";
import "./search.css"
import FormItem from 'antd/es/form/FormItem';

const SearchPage = () =>{
    const location = useLocation();

    const {user, prompt,setPrompt} = useContext(AuthContext)

    const [filmsInCollection, setFilmsInCollection] = useState([]);

    const [films, setFilms] = useState([]);
    const [filmStates, setFilmStates] = useState({});
    const [error, setError] = useState(null);

    const fetchFilmList = async (prompt) => {
        try {
            const response = await searchAPI(prompt);
    
            // Ensure response.data is an array
            const filmData = Array.isArray(response.data) ? response.data : [];
    
            // Initialize states for each film (isLiked and isDisLiked)
            const initialStates = filmData.reduce((acc, film) => {
                acc[film.id] = {
                    isLiked: film.isLiked || false,
                    isDisLiked: film.isDisLiked || false,
                };
                return acc;
            }, {});
    
            setFilms(filmData); // Store films in state
            setFilmStates(initialStates); // Initialize film states
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

    const fetchCollection = async () => {
        const response = await getCollectionAPI(user.id);

        const filmCollectionData = Array.isArray(response.data) ? response.data : [];
        
        setFilmsInCollection(filmCollectionData);
    };

    useEffect(() => {
        fetchCollection();
    }, []);

    const createFilmCollectionsMap = async (films) => {
        const filmCollectionsMap = {};
        // const collections = await getTickedCollectionsAPI(3); // Fetch the API data
        // console.log(collections.data)
        // Use Promise.all to fetch data for all films concurrently
        await Promise.all(
            films.map(async (film) => {
                // console.log(film.id)
                const collections = await getTickedCollectionsAPI(film.id); // Fetch the API data
                // console.log(collections.data)
                filmCollectionsMap[film.id] = collections.data; // Set the id as the key and collections as the value
            })
            //Tui muốn tạo map dựa theo film.id để trong loop tui đặt dòng 185: "checkbox_group": [], . thành "checkbox_group": map[film.id],
        );
    
        return filmCollectionsMap;
    };

    createFilmCollectionsMap(films).then((map) => {
        console.log(map);
        // Example output:
        // {
        //     1: [/* List from getTickedCollectionsAPI(1) */],
        //     2: [/* List from getTickedCollectionsAPI(2) */],
        //     3: [/* List from getTickedCollectionsAPI(3) */],
        // }
    });

    const handleClickLike = (filmId) => {
        setFilmStates((prevState) => ({
          ...prevState,
          [filmId]: {
            isLiked: !prevState[filmId]?.isLiked, // Set "Like" active
            isDisLiked: false, // Deactivate "Dislike"
          },
        }));

        likeAPI(filmId);
    };
    
    // Handle "Dislike" button click
    const handleClickDisLike = (filmId) => {
        setFilmStates((prevState) => ({
            ...prevState,
            [filmId]: {
            isLiked: false, // Deactivate "Like"
            isDisLiked: !prevState[filmId]?.isDisLiked, // Set "Dislike" active
            },
        }));

        disLikeAPI(filmId);
    };

    const onFinish = (values, filmId) => {
        console.log(values.checkbox_group);
        console.log("Film ID:", filmId);

        addToCollectionAPI(filmId, values.checkbox_group);
    };

    return(
        <div style={{paddingRight:"110px", paddingLeft:"110px"}}>
            {}

            {error && <p>Error: {error}</p>}
            {Array.isArray(films) && films.length > 0 ? (
                films.map((film, index) => (
                <Row key={index}>
                    <Col span={8} style={{paddingTop: "40px"}}>
                        <img
                            style={{ width: "100%", maxHeight: "85%", borderRadius: "5%" }}
                            src={film.imageUrl || "/testGrayPicture.svg"}
                            alt="Poster"
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
                                   items: 
                                   [
                                        {
                                            key: `film-${film.id}`,
                                            label: (
                                            <div
                                                style={{
                                                width: "250px",
                                                height: "210px",
                                                overflowX: "hidden",
                                                overflowY: "hidden",
                                                }}
                                            >
                                                <p
                                                className="siteTitle"
                                                style={{ fontSize: "25px", margin: "0" }}
                                                >
                                                Danh sách của tôi
                                                </p>
                                                <hr style={{ margin: "0 0 10px 0" }} />
                                
                                                <Form
                                                name={`checkboxForm-${film.id}`}
                                                onFinish={(values) => onFinish(values, film.id)}
                                                initialValues={{
                                                    "checkbox_group": [],
                                                }}
                                                >
                                                    <FormItem name="checkbox_group">
                                                        <Checkbox.Group
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // Prevent dropdown from closing
                                                            }}
                                                            style={{
                                                            maxHeight: "100px",
                                                            overflowY: "auto",
                                                            overflowX: "hidden",
                                                            whiteSpace: "nowrap",
                                                            textOverflow: "ellipsis",
                                                            width: "100%",
                                                            }}
                                                        >
                                                            
                                                            <Row>
                                                                {Array.isArray(filmsInCollection) && filmsInCollection.length > 0 ? (
                                                                    filmsInCollection.map((collection) => (
                                                                        <Col span={24}>
                                                                            <Checkbox value={collection.id} style={{ marginBottom: "10px" }}>
                                                                                <p>{collection.name}</p>
                                                                            </Checkbox>
                                                                        </Col>
                                                                    ))
                                                                ) : (
                                                                    <p>No collection added</p>
                                                                )}
                                                            </Row>
                                                        </Checkbox.Group>
                                                    </FormItem>
                                    
                                                    <div
                                                        style={{
                                                        display: "flex",
                                                        justifyContent: "space-around",
                                                        marginTop: "20px",
                                                        }}
                                                    >
                                                        <Button
                                                            htmlType="button"
                                                            style={{ background: "#fff", border: "1px solid #ccc" }}
                                                        >
                                                        Hủy
                                                        </Button>

                                                        <Button
                                                            htmlType="submit"
                                                            type="primary"
                                                            style={{ background: "#28a745", border: "none" }}
                                                            {...Array.isArray(filmsInCollection) && filmsInCollection.length > 0 ? "" : disabled}
                                                        >
                                                        Lưu
                                                        </Button>
                                                    </div>
                                                </Form>
                                            </div>
                                            ),
                                        },
                                   ]
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
                                    backgroundColor: filmStates[film.id]?.isLiked ? "#1890ff" : "transparent", // Active state background
                                    color: filmStates[film.id]?.isLiked ? "#fff" : "inherit", // Change text/icon color
                                    border: filmStates[film.id]?.isLiked ? "1px solid #1890ff" : "1px solid #d9d9d9", // Border color
                                }}
                                onClick={() => handleClickLike(film.id)}
                                >
                                <LikeOutlined />
                            </Button>

                            <Button
                                className="dis_LikeButton"
                                style={{
                                    marginLeft: "40px",
                                    backgroundColor: filmStates[film.id]?.isDisLiked ? "#1890ff" : "transparent", // Active state background
                                    color: filmStates[film.id]?.isDisLiked ? "#fff" : "inherit", // Change text/icon color
                                    border: filmStates[film.id]?.isDisLiked ? "1px solid #1890ff" : "1px solid #d9d9d9", // Border color
                                }}
                                onClick={() => handleClickDisLike(film.id)}
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