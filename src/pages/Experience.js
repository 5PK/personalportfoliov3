import React from 'react';
import * as c from '../components/Styled.Components'

function Experience() {
    return (
        <div className="container">
            <c.pageHeader className="row center">
                <h4>Experience</h4>
            </c.pageHeader>
            <c.pageContent className="row">
                <ul>
                    <li>
                        <div className="card z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">RANKD - Technical Director <em style={{fontSize:'12px'}}>(current)</em></span>
                                <c.blockquote>Leading a small development team working on a public tennis matchmaker. I manage and delegate tasks to the team, coach junior devs to deliver best practices and make holistic decisions to ensure there is no stagnation in delivering functionality. <br></br><br></br> Our stack is React Native and C#/JS Azure functions. Github Pages for CI/CD. Jest and xUnit for testing.</c.blockquote>
                            </div>
                        </div>
                        <div className="card z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Method Integration - Intermediate Full Stack <em style={{fontSize:'12px'}}>(current)</em></span>
                                <c.blockquote>Working on creating re-usable components in a No-code CRM. Focused on React and dotnet core.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">MiStall Insight Inc.</span>
                                <c.blockquote>My first official full-time software gig!  My official title was Junior Software Engineer, but I had my hands in a lot of pots.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Evenica Corp.</span>
                                <c.blockquote>I interned at Evenica as a TSQL Developer.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Tomson Automotive</span>
                                <c.blockquote>Oil Changes, Brake jobs etc.</c.blockquote>
                            </div>
                        </div>

                    </li>
                </ul>
            </c.pageContent>

        </div>

    )

}



export default Experience;