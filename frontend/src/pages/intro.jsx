import {useContext} from 'react'
import introPic from '../assets/intro/intro_picture.png';
import movie1 from '../assets/intro/movie_rank_1.png';
import movie2 from '../assets/intro/movie_rank_2.png';
import movie3 from '../assets/intro/movie_rank_3.png';
import aiPolygon from '../assets/intro/ai_polygon.svg';
import Aicamera from '../assets/intro/noto_movie-camera.svg';
import iconFavorite from '../assets/intro/carbon_user-favorite.svg';
import iconFree from '../assets/intro/emojione-monotone_free-button.svg';
import iconHappy from '../assets/intro/tdesign_happy-filled.svg';
import iconTime from '../assets/intro/tdesign_time-filled.svg';
import logo from '../assets/intro/logo.svg';
import {  useNavigate } from "react-router-dom";
import {AuthContext} from '../components/context/auth_context';
import '../pages/intro.css';

const IntroPage = () => {
    const {user,setUser} = useContext(AuthContext)

    const navigate = useNavigate();
    const handleClickLogin=() =>{
        console.log("user id: ", user.id);
        navigate("/login")
    }
    const handleClickRegister=() =>{
        navigate("/register")
    }

    return (
        <div >
       
            <div className="container" style={{display:"flex", flexDirection:"column", marginBottom:"20px", marginTop:"20px"}}>
                <img src={introPic} style={{width:"100%",height:"71vh",margin:"auto", opacity:"0.7"}} />

                <div style={{position:"absolute", height:"80%", width:"95%"}}>
                    <p style={{height: "75%"}}></p>
                    <div style={{display:"flex"}}>
                        <p style={{width:"10px"}}></p>
                        <p className="intro-text" style={{fontSize:"50px", marginTop:"auto", marginLeft:"auto"}}>Movies that sync with your soul.</p>
                    </div>
                </div>
                
                <button className="try-now-button">Try now</button>
            </div>

            <div style={{display:"flex", flexDirection:"column"}}>
                <h2 style={{marginLeft: "7%", fontSize:"70px"}}>THỊNH HÀNH</h2>
                <div className="movies-container">
                    <div className="movie-item" style={{top: "110px"}}>
                        <span className="movie-rank">2</span>
                        <img src={movie2} alt="The Substance" className="movie-poster" />
                        
                        <p className="movie-title">The Substance</p>
                    </div>
                    <div className="movie-item">
                        <span className="movie-rank">1</span>
                            <img src={movie1} alt="Venom: The Last Dance" className="movie-poster" />
                            <p className="movie-title">Venom: The Last Dance</p>
                        </div>
                    <div className="movie-item" style={{top: "130px"}}>
                        <span className="movie-rank">3</span>
                        <img src={movie3} alt="Don't Move" className="movie-poster" />
                        <p className="movie-title">Don't Move</p>
                    </div>
                </div>
            </div>

            <div style={{display:"flex", flexDirection:"column", position:"relative"}}>
                <h2 style={{marginLeft: "7%", fontSize:"70px"}}>TRỢ THỦ AI HOÀN HẢO</h2>
                <img src={aiPolygon} style={{width:"80%", margin:"auto"}}/>

                <div style={{display:"flex"}}>
                    <p style={{marginRight:"auto"}}></p>
                    <img src={Aicamera} style={{width:"12%", position:"absolute", left:"78%", top:"75%"}}/>
                </div>

                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"26%",left:"70%"}}>Phù hợp với</p>
                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"32%",left:"70%"}}>sở thích của bạn.</p>
                <img src={iconFavorite} style={{position:"absolute",width:"60px",top:"45%",left:"82%"}}/>

                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"39%",left:"51%"}}>Không gian</p>
                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"45%",left:"51%"}}>giải trí, thư giãn.</p>
                <img src={iconHappy} style={{position:"absolute",width:"60px",top:"58%",left:"61%"}}/>

                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"52%",left:"32%"}}>Trải nghiệm</p>
                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"58%",left:"32%"}}>miễn phí.</p>
                <img src={iconFree} style={{position:"absolute",width:"60px",top:"71%",left:"44%"}}/>

                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"65%",left:"13%"}}>Dùng ở</p>
                <p className='siteContent' style={{fontSize:"35px",position:"absolute",top:"71%",left:"13%"}}>mọi lúc, mọi nơi.</p>
                <img src={iconTime} style={{position:"absolute",width:"60px",top:"84%",left:"25%"}}/>
            </div>

            <div className="container" style={{marginTop:"5%"}}>
                <img src={logo} style={{width:"30%", marginRight:"5%"}}/>

                <div className="container" style={{display:"flex", flexDirection:"column"}}>
                    <h2 className="intro-text" style={{fontSize:"13vw"}}>MIUVIE</h2>
                    <p2 style={{fontFamily:"Bagel Fat One",color:"#D4C5C5",fontSize:"4.3vw"}} >Let’s move vì MIUVIE!</p2>

                    <div className='container' style={{gap:"10%", width:"100%", height:"100%"}}>
                        {!user?.id && (
                        <>
                            <button className="login-button" style={{ marginTop:"10%", fontSize:"2vw" }} onClick={handleClickRegister}>
                                Đăng ký
                            </button>
                            <button className="login-button" style={{ marginTop:"10%", fontSize:"2vw" }} onClick={handleClickLogin}>
                                Đăng nhập
                            </button>
                        </>
                        )}
                    </div>
                </div>

                
            </div>
        </div>
    )
}

export default IntroPage;