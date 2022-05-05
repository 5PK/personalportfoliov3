import React, { useEffect } from 'react';
import * as c from '../components/Styled.Components'
import './35mm.css'

function Pictures() {

    useEffect(() => {
        loadImages()
    });

    function loadImages() {
        var imgCount = 46;
        var albumLimit = 36;

        var imgArr = createImgArr(imgCount);

        for (var i = 1; i < albumLimit + 1; i++) {

            var imgContainer = document.getElementById("img" + i);

            imgContainer.src = "media/images/35mm/" + imgArr[i] + ".JPG";

        }
    }

    function createImgArr(len) {
        var arr = [];

        for (var i = 1; i < len + 1; i++) {
            arr.push(i);
        }

        return shuffle(arr);
    }

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }


    return (
        <div className="container">
            <c.pageHeader className="row center">
                <h4 style={{ paddingBottom: '3%' }}>35mm</h4>
                <h6 style={{ paddingBottom: '5%' }} id="typeEle">Assorted film photos taken on an old Olympus camera.</h6>
                <div className="progress black" style={{ width: '80%', margin: 'auto' }}>
                    <div className="determinate black" style={{ width: '100%' }}></div>
                </div>
            </c.pageHeader>
            <div className="imgRow">
                <div className="imgColumn">
                    <c.filmPic alt='film pic' id="img1" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img2" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img3" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img4" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img5" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img6" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img31" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img32" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img33" className="materialboxed" />
                </div>
                <div className="imgColumn">
                    <c.filmPic alt='film pic' id="img7" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img8" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img9" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img10" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img11" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img12" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img34" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img35" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img36" className="materialboxed" />
                </div>
                <div className="imgColumn">
                    <c.filmPic alt='film pic' id="img13" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img14" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img15" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img16" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img17" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img18" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img25" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img26" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img27" className="materialboxed" />

                </div>
                <div className="imgColumn">
                    <c.filmPic alt='film pic' id="img19" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img20" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img21" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img22" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img23" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img24" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img28" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img29" className="materialboxed" />
                    <c.filmPic alt='film pic' id="img30" className="materialboxed" />
                </div>
            </div>

        </div>


    )

}



export default Pictures;