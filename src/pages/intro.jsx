import {useContext} from 'react'
import Header from "../components/layout/header";
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
       
            <div class="container">
                <img src={introPic} style={{width:"100%",height:"100%",margin:"auto"}} />
                <p class="intro-text" style={{fontSize:"50px",bottom:"110px",right:"50px"}}>Movies that sync with your soul.</p>
                <button className="try-now-button">Try now</button>
            </div>

            <div class="container" >
                <h2>THỊNH HÀNH</h2>
                <div class="movies-container">
                    <div class="movie-item" style={{top: "110px"}}>
                        <span class="movie-rank">2</span>
                        <img src={movie2} alt="The Substance" class="movie-poster" />
                        
                        <p class="movie-title">The Substance</p>
                    </div>
                    <div class="movie-item">
                        <span class="movie-rank">1</span>
                            <img src={movie1} alt="Venom: The Last Dance" class="movie-poster" />
                            <p class="movie-title">Venom: The Last Dance</p>
                        </div>
                    <div class="movie-item" style={{top: "130px"}}>
                        <span class="movie-rank">3</span>
                        <img src={movie3} alt="Don't Move" class="movie-poster" />
                        <p class="movie-title">Don't Move</p>
                    </div>
                </div>
            </div>

            <div class="container">
                <h2>TRỢ THỦ AI HOÀN HẢO</h2>
                <img src={aiPolygon} width="100%" style={{margin: "auto"}}/>
                <img src={Aicamera} style={{position:"absolute", bottom:"3%",right:"2%",width:"180px"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"3%",left:"81%"}}>Phù hợp với</p>
                <p style={{fontSize:"40px",position:"absolute",top:"12%",left:"79%"}}>sở thích của bạn.</p>
                <img src={iconFavorite} style={{position:"absolute",width:"60px",top:"29%",left:"86%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"25%",left:"66.5%"}}>Không gian</p>
                <p style={{fontSize:"40px",position:"absolute",top:"33%",left:"63.5%"}}>giải trí, thư giãn.</p>
                <img src={iconHappy} style={{position:"absolute",width:"60px",top:"50%",left:"70.5%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"37%",left:"49%"}}>Trải nghiệm</p>
                <p style={{fontSize:"40px",position:"absolute",top:"46%",left:"51%"}}>miễn phí.</p>
                <img src={iconFree} style={{position:"absolute",width:"60px",top:"63%",left:"54%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"52%",left:"37.5%"}}>Dùng ở</p>
                <p style={{fontSize:"40px",position:"absolute",top:"61%",left:"31.5%"}}>mọi lúc, mọi nơi.</p>
                <img src={iconTime} style={{position:"absolute",width:"60px",top:"81%",left:"39%"}}/>
            </div>

            <div class="container" style={{padding:"50px"}}>
                <img src={logo} style={{width:"460px",position: "relative"}}/>
                <h2 class="intro-text" style={{fontSize:"119px",top:"98%",left:"54%"}}>MIUVIE</h2>
                <p2 style={{fontFamily:"Bagel Fat One",color:"#D4C5C5",fontSize:"50px",position:"absolute",top:"100%",left:"50%"}} >Let’s move vì MIUVIE!</p2>
                

                {!user?.id && (
                    <>
                        <button className="login-button" style={{ top: "73%", left: "50%" }} onClick={handleClickRegister}>
                            Đăng ký
                        </button>
                        <button className="login-button" style={{ top: "73%", left: "70%" }} onClick={handleClickLogin}>
                            Đăng nhập
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default IntroPage;