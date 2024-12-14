import {useLocation} from 'react-router-dom'
import {useState} from 'react'
import {Input, Button, Row, Col, Flex} from 'antd'
import { SearchOutlined, ClockCircleOutlined, LikeOutlined, DislikeOutlined } from '@ant-design/icons';
import "./search.css"

const SearchPage = () =>{
    const location = useLocation();
    const [prompt, setPrompt]= useState(location.state?.prompt);


    const handleSearch=(e) =>{
        console.log(e.target.value);
    }


    return(
        <div style={{paddingLeft:"90px"}}>
            <Row>
                <Col span={18}>
                    <p className='siteContent' style={{marginTop: "30px", fontWeight: "bold", fontSize: "40px"}}>Danh sách cho Harry Potter</p>

                    <Row style={{marginTop: "30px"}}>
                        <Col span={8}>
                            <img style={{width:"100%", maxHeight:"85%", borderRadius: "5%"}} src="/Poster_1.jpg" alt="Poster1"/>    
                        </Col>

                        <Col span={15} style={{paddingLeft: "30px"}}>
                            <div>
                                <p className="siteTitle" style={{fontSize: "35px"}}>Harry Potter và Bảo bối Tử thần: Phần 1</p>

                                <Flex gap={"large"} style={{marginTop: "5px", fontWeight: "bold"}}>
                                    <p className="siteContent" style={{fontSize: "35px"}}>7.7 IMDb</p>
                                    <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}>2010</p>
                                    <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}><ClockCircleOutlined /> 146m</p>
                                </Flex>

                                <p className="siteContent" style={{fontSize: "35px", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}}>Phiêu lưu, Huyền bí</p>
                                <hr style={{width:"80%"}}/>

                                <p className="siteContent" style={{textAlign: "justify", marginTop: "15px", fontSize: "25px"}}>
                                Harry, Ron và Hermione rời khỏi năm học cuối cùng tại Hogwarts để tìm và phá hủy những Horcrux còn lại, 
                                chấm dứt âm mưu trường sinh bất tử của Voldemort. Nhưng với việc Dumbledore, người thầy yêu quý của Harry, 
                                đã qua đời và các Tử thần thực tử của Voldemort đang hoành hành, thế giới trở nên nguy hiểm hơn bao giờ hết.
                                </p>
                            </div>
                        </Col>
                    </Row>

                    <Row style={{marginTop: "30px"}}>
                        <Col span={8}>
                            <img style={{width:"100%", maxHeight:"85%", borderRadius: "5%"}} src="/Poster_2.jpg" alt="Poster1"/>    
                        </Col>

                        <Col span={15} style={{paddingLeft: "30px"}}>
                            <div>
                                <p className="siteTitle" style={{fontSize: "35px"}}>Harry Potter và Bảo bối Tử thần: Phần 2</p>

                                <Flex gap={"large"} style={{marginTop: "5px", fontWeight: "bold"}}>
                                    <p className="siteContent" style={{fontSize: "35px"}}>8.1 IMDb</p>
                                    <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}>2011</p>
                                    <p className="siteContent" style={{marginLeft:"90px", fontSize: "35px"}}><ClockCircleOutlined /> 130m</p>
                                </Flex>

                                <p className="siteContent" style={{fontSize: "35px", fontWeight: "bold", marginTop: "10px", marginBottom: "10px"}}>Phiêu lưu, Huyền bí</p>
                                <hr style={{width:"80%"}}/>

                                <p className="siteContent" style={{textAlign: "justify", marginTop: "15px", fontSize: "25px"}}>
                                Harry, Ron và Hermione tiếp tục cuộc hành trình tiêu diệt Voldemort mãi mãi. Khi mọi thứ dường như trở nên vô 
                                vọng đối với những phù thủy trẻ, Harry phát hiện ra một bộ ba bảo bối huyền bí, ban cho cậu sức mạnh đủ mạnh để 
                                đối đầu với những kỹ năng đáng gờm của Voldemort.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Col>

                <Col span={6} className='sideBar' style={{padding: "0px 40px 0px 40px"}}>
                    <p className='siteContent' style={{textAlign: "center", fontWeight: "bold", fontSize: "35px", marginTop: "40px"}}>Danh sách của tôi</p>
                    <div className='container' style={{justifyContent: "center", marginTop: "15px", marginBottom: "25px"}}>
                        <Button className= "addButton">Thêm</Button>
                    </div>

                    <ul style={{paddingLeft:"40px", listStyleType: "square", listStyle: "square inside", fontSize: "28px", color: "white", lineHeight: 2, textIndent: "-40px"}}>
                        <li><a href="">Phim Tết</a></li>
                        <li><a href="">Phim kinh dị</a></li>
                        <li><a href="">Ờ ven chờ</a></li>
                        <li><a href="">Phim tình cảm có hài hước</a></li>
                    </ul>
                </Col>
            </Row>
            
        </div>
    )
}

export default SearchPage;