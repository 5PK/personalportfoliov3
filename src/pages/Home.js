import { useEffect } from "react";
import * as c from "../components/Styled.Components";
import M from 'materialize-css/dist/js/materialize.min.js';

function Home(props) {

  const { isMobile } = props;

  var i = 0;
  const txt = " Hi there! I'm Kevin Tran, a software dev from Hamilton, Ontario.";
  const speed = 50;

  const profilePicSize = isMobile ? "150" : "250";

  useEffect(() => {
    const carosel = document.getElementById("homeCarosel");
    M.Carousel.init(carosel, {numVisible: 1});
    autoplay();
    // document.getElementById("typeEle").innerHTML = "";
    // typeWriter();
  });

  function autoplay() {
    const carosel = document.getElementById("homeCarosel");
    if(carosel){
      M.Carousel.getInstance(carosel).next();
      setTimeout(autoplay, 5000);
    }
  }

  function typeWriter(id) {
      if (i < txt.length) {
          document.getElementById("typeEle").innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, speed);
      }
  }

  return (

    <div className="container">
      <div className="row center" style={{padding:'5%'}}>
        <c.profilePic src="media/images/home/avatar3.png" alt="Avatar" height={profilePicSize} width={profilePicSize}/>
      </div>
      <div className="row center" style={{paddingBottom: '3%'}}>
        <p className="flow-text">Hi there! I'm Kevin Tran, a software dev from Hamilton, Ontario.</p>
      </div>
      <div className="row center">
        <div className="center">
          <ul style={{listStyle: 'none'}}>
            <c.homeLink ><a className="black-text homeLink" href="https://www.linkedin.com/in/ktran95/">LinkedIn</a></c.homeLink>
            <c.homeLink  style={{padding:'0 10% 0 10%'}}><a className="black-text homeLink" href="https://github.com/5PK">Github</a></c.homeLink>
            <c.homeLink ><a className="black-text homeLink" href="mailto:1trankev@gmail.com">Email</a></c.homeLink>
          </ul>
        </div>
      </div>
      <div className="row center">
        <c.carosel id="homeCarosel" className="carousel" isMobile={isMobile}>
          <div className="carousel-item black-text" style={{width:"100%", textAlign: "center", marginTop:'50px'}}>
            <h6 style={{margin:"auto"}}><i>"I like rock climbing, music and readable code." ~ Kevin Tran, 2019</i></h6>
          </div>
          <div className="carousel-item black-text" style={{width:"100%", textAlign: "center", marginTop:'50px'}}>
            <h6 style={{margin:"auto"}}><i>"Sometimes all it takes to solve problems is just sense." ~ Gary Paulsen, Hatchet</i></h6>
          </div>
          <div className="carousel-item black-text" style={{width:"100%", textAlign: "center", marginTop:'50px'}}>
            <h6 style={{margin:"auto"}}><i>"The line dividing good and evil cuts through the heart of every human being." ~ Aleksandr Solzhenitsyn, The Gulag Archipelago</i></h6>
          </div>
        </c.carosel >
      </div>
    </div>



  );


}

export default Home;