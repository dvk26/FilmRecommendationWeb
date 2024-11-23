import React from "react";
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
import '../pages/intro.css';

const IntroPage = () => {
    return (
        <div >
            <Header />
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

                <p style={{fontSize:"40px",position:"absolute",top:"26%",left:"73%"}}>Phù hợp với</p>
                <p style={{fontSize:"40px",position:"absolute",top:"32%",left:"73%"}}>sở thích của bạn.</p>
                <img src={iconFavorite} style={{position:"absolute",width:"60px",top:"44%",left:"88%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"39%",left:"50.5%"}}>Không gian</p>
                <p style={{fontSize:"40px",position:"absolute",top:"45%",left:"50.5%"}}>giải trí, thư giãn.</p>
                <img src={iconHappy} style={{position:"absolute",width:"60px",top:"58%",left:"65.5%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"52%",left:"28%"}}>Trải nghiệm</p>
                <p style={{fontSize:"40px",position:"absolute",top:"58%",left:"28%"}}>miễn phí.</p>
                <img src={iconFree} style={{position:"absolute",width:"60px",top:"69%",left:"43%"}}/>

                <p style={{fontSize:"40px",position:"absolute",top:"65%",left:"5.5%"}}>Dùng ở</p>
                <p style={{fontSize:"40px",position:"absolute",top:"71%",left:"5.5%"}}>mọi lúc, mọi nơi.</p>
                <img src={iconTime} style={{position:"absolute",width:"60px",top:"84%",left:"21%"}}/>
            </div>

            <div class="container" style={{padding:"50px"}}>
                <img src={logo} style={{width:"460px",position: "relative"}}/>
                <h2 class="intro-text" style={{fontSize:"119px",top:"10%",left:"50%"}}>MIUVIE</h2>
                <p2 style={{fontFamily:"Bagel Fat One",color:"#D4C5C5",fontSize:"50px",position:"absolute",top:"45%",left:"50%"}} >Let’s move vì MIUVIE!</p2>
                <button class="login-button" style={{top:"73%",left:"50%"}}>Đăng ký</button>
                <button class="login-button" style={{top:"73%",left:"70%"}}>Đăng nhập</button>
            </div>
        </div>
    )
}

export default IntroPage;