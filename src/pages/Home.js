import { useEffect } from "react";
import * as c from "./Styled.Components";
import M from 'materialize-css/dist/js/materialize.min.js';

function Home() {

  var i = 0;
  const txt = "Hi there! I'm Kevin Tran, a software dev from Hamilton, Ontario.";
  const speed = 50;

  useEffect(() => {
    const carosel = document.getElementById("homeCarosel");
    M.Carousel.init(carosel, {numVisible: 1});
    autoplay();
    typeWriter();
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
        <c.profilePic src="media/images/home/avatar3.png" alt="Avatar" height="250" width="250"/>
      </div>
      <div className="row center" style={{paddingBottom: '3%'}}>
        <p id="typeEle" className="flow-text"></p>
      </div>
      <div className="row center">
        <div className="center">
          <ul style={{listStyle: 'none'}}>
            <c.homeLink><a className="grey-text" href="https://www.linkedin.com/in/ktran95/">LinkedIn</a></c.homeLink>
            <c.homeLink style={{padding:'0 10% 0 10%'}}><a className="grey-text" href="https://github.com/5PK">Github</a></c.homeLink>
            <c.homeLink><a className="grey-text modal-trigger" href="mailto:1trankev@gmail.com">Email</a></c.homeLink>
          </ul>
        </div>
      </div>
      <div className="row center">
        <c.carosel id="homeCarosel" className="carousel">
          <div className="carousel-item white black-text" style={{width:"100%"}}>
            <h6><i>"I like rock climbing, music and readable code." ~ Kevin Tran, 2019</i></h6>
          </div>
          <div className="carousel-item white black-text" style={{width:"100%"}}>
            <h6><i>"Sometimes all it takes to solve problems is just sense." ~ Gary Paulsen, Hatchet</i></h6>
          </div>
          <div className="carousel-item white black-text" style={{width:"100%"}}>
            <h6><i>"The line dividing good and evil cuts through the heart of every human being." ~ Aleksandr Solzhenitsyn, The Gulag Archipelago</i></h6>
          </div>
        </c.carosel >
      </div>
    </div>



  );


}

export default Home;