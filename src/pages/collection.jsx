import {useLocation} from 'react-router-dom'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../components/context/auth_context';
import { Collapse, Input, Button, Row, Col, Flex, Form } from 'antd'
import { ClockCircleOutlined } from '@ant-design/icons';
import { createCollectionAPI, getCollectionAPI, getFilmsInCollectionAPI } from "../services/api_service";
import "./search.css"

const CollectionPage = () =>{
    const { user } = useContext(AuthContext);

    const [collectionsList, setcollectionsList] = useState([]);

    const [collectionName, setCollection] = useState("");
    const [currentCollectionFilms, setCurentCollectionFilms] = useState([]);

    const fetchCollection = async () => {
        const response = await getCollectionAPI(user.id);

        const collectionData = Array.isArray(response.data) ? response.data : [];
        
        setcollectionsList(collectionData);
    };

    useEffect(() => {
        fetchCollection();
    }, []);

    const fetchCollectionFilms = async (collectionId) => {
        const response = await getFilmsInCollectionAPI(user.id, collectionId);

        const collectionFilmsData = Array.isArray(response.data) ? response.data : [];
        
        setCurentCollectionFilms(collectionFilmsData);
    };

    useEffect(() => {
        if (collectionsList.length > 0) {
            setCollection(collectionsList[0].name);
            fetchCollectionFilms(collectionsList[0].id);
        } else {
            setCollection("");
            setCurentCollectionFilms([]);
        }
    }, [collectionsList]);

    const handleClick = (id) => {
        fetchCollectionFilms(id);
        
        const buffer = collectionsList.find(item => item.id === id);
        setCollection(buffer.name);
    };

    const onFinish = (values) => {
        createCollectionAPI(values.new_collection, user.id);
        window.location.reload();
    };

    const items = [
        {
          key: '1',
          label: 'Thêm',
          children: 
          <Form
                name="add_collection"
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label={null}
                    name="new_collection"
                    
                    rules={[
                        {
                        required: true,
                        },
                    ]}
                >
                <Input placeholder="New collection"/>
                </Form.Item>

                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
          ,
          showArrow: false,
          style:{textAlign:"center"}
        },
    ];

    return(
        <div style={{paddingLeft:"90px"}}>
            <Row>
                <Col span={18}>
                    <p className='siteContent' style={{marginTop: "30px", fontWeight: "bold", fontSize: "40px"}}>{collectionName}</p>

                    {Array.isArray(currentCollectionFilms) && currentCollectionFilms.length > 0 ? (
                        currentCollectionFilms.map((collection) => (
                            <Row style={{marginTop: "30px"}}>
                                <Col span={8}>
                                <img
                                    style={{ width: "100%", maxHeight: "85%", borderRadius: "5%" }}
                                    src={
                                        collection.imageUrl === "https://image.tmdb.org/t/p/w500null" || !collection.imageUrl
                                            ? "/testGrayPicture.svg"
                                            : collection.imageUrl
                                    }
                                    alt="Poster"
                                />
                                </Col>

                                <Col span={15} style={{paddingLeft: "30px"}}>
                                    <div>
                                        <p className="siteTitle" style={{fontSize: "35px"}}>{collection.title}</p>

                                        <Flex gap={"large"} style={{marginTop: "5px", fontWeight: "bold"}}>
                                            <p className="siteContent" style={{fontSize: "35px"}}>{collection.imdbRating} IMDb</p>
                                            <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}>{collection.year}</p>
                                            <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}><ClockCircleOutlined />&nbsp; {collection.time}m</p>
                                        </Flex>

                                        <p className="siteContent" style={{fontSize: "35px", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}}>{collection.genres}</p>
                                        <hr style={{width:"80%"}}/>

                                        <p className="siteContent" style={{textAlign: "justify", marginTop: "15px", fontSize: "25px"}}>{collection.overview}</p>
                                    </div>
                                </Col>
                            </Row>
                        ))
                    ) : (
                        <p>No film added to collection</p>
                    )}
                </Col>

                <Col span={6} className='sideBar' style={{padding: "0px 40px 0px 40px"}}>
                    <p className='siteContent' style={{textAlign: "center", fontWeight: "bold", fontSize: "35px", marginTop: "40px"}}>Danh sách của tôi</p>
                    <div className='container' style={{justifyContent: "center", marginTop: "15px", marginBottom: "25px"}}>
                        <Collapse items={items} style={{backgroundColor: "white", fontSize:"20px", width:"200px"}}/>
                    </div>

                    <ul style={{paddingLeft:"40px", listStyleType: "square", listStyle: "square inside", fontSize: "28px", color: "white", lineHeight: 2, textIndent: "-40px"}}>
                        {Array.isArray(collectionsList) && collectionsList.length > 0 ? (
                            collectionsList.map((collection) => (
                                <li>
                                    <a 
                                        href=""
                                        onClick={(e) => {
                                            e.preventDefault(); // Prevent the default navigation behavior
                                            handleClick(collection.id); // Call your onClick function
                                        }}
                                    >
                                        {collection.name}
                                    </a>
                                </li>
                            ))
                        ) : (
                            <p>No collection added</p>
                        )}
                    </ul>
                </Col>
            </Row>
            
        </div>
    )
}

export default CollectionPage;