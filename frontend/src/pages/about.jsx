import {Row, Col, Flex} from "antd";
import "./about.css";

const AboutPage = () => {
    return (
        <div style={{paddingRight:"90px", paddingLeft:"90px"}}>
            <Row justify={"center"} style={{marginTop: "40px", marginBottom: "50px"}}>
                <Col>
                    <p className="siteTitle" id="siteContent" style={{fontSize: "75px"}}>GIỚI THIỆU</p>
                </Col>
            </Row>

            <Row>
                <Col span={9} style={{paddingTop: "40px"}}>
                    <Row justify={"left"}>
                        <Col>
                            <img style={{width:"85%"}} src="/Layer 2.svg" alt="Logo"/>
                        </Col>
                    </Row>

                    <Row justify={"left"} style={{paddingLeft: "55px", marginTop: "10px"}}>
                        <Col>
                            <p className="logoTitle" id="siteContent" style={{fontSize: "95px", textAlign: "center"}}>MIUVIE</p>
                        </Col>
                    </Row>
                </Col>

                <Col span={15} style={{paddingLeft: "25px"}}>
                    <p className="siteTitle" id="siteContent" style={{fontSize: "53px"}}>VỀ MIUVIE</p>
                    <p className="siteContent" style={{textAlign: "justify", paddingLeft: "9px"}}>
                        Chào mừng bạn đến với MIUVIE – người bạn đồng hành lý tưởng cho những tín đồ điện ảnh. Với công nghệ AI 
                        tiên tiến, MIUVIE giúp bạn dễ dàng tìm kiếm phim yêu thích chỉ bằng vài từ gợi ý, từ thể loại, tâm trạng, 
                        diễn viên đến các chủ đề đặc biệt. Chúng tôi mang đến trải nghiệm cá nhân hóa với tính năng tạo danh sách phim, 
                        cho phép bạn đặt tên chủ đề và lưu lại những bộ phim yêu thích để thưởng thức sau.
                    </p>
                </Col>
            </Row>

            <Row style={{marginTop: "60px"}}>
                <Col span={15}>
                    <p className="siteTitle" id="siteContent" style={{fontSize: "53px", paddingLeft: "2px"}}>ĐỘI NGŨ PHÁT TRIỂN</p>
                    <p className="siteContent" style={{textAlign: "justify"}}>
                    MIUVIE là thành quả của nhóm Nguyễn Văn Đức, Nguyễn Văn Hậu, Phạm Nguyên Khánh, Đặng Văn Kỳ, 
                    và Lê Thành Lợi. Dự án được thực hiện với niềm đam mê và sự nỗ lực trong suốt quá trình học 
                    tập và nghiên cứu. Từ lập trình, thiết kế giao diện đến tối ưu tính năng, chúng tôi đều dồn hết 
                    tâm huyết để mang đến một sản phẩm hoàn thiện nhất. MIUVIE không chỉ là một nền tảng tìm kiếm phim, 
                    mà còn là cầu nối đưa bạn đến gần hơn với thế giới điện ảnh đầy màu sắc.
                    </p>
                </Col>

                <Col span={9}>
                    <Flex  style={{paddingTop: "90px"}} justify={"flex-end"} align={"flex-start"}>
                        <img style={{width: "90%", height: "530px", borderRadius: "10%"}} src="/ML_GroupPicture.jpg" alt="GroupPhoto"/>
                    </Flex>
                </Col>

                
            </Row>
        </div>
        
    );
}

export default AboutPage;