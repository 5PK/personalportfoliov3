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
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Method Integration</span>
                                <c.blockquote>Intermediate Full Stack developer. Focused on React and dotnet core.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">MiStall Insight Inc.</span>
                                <c.blockquote>My first official full-time software gig!  My official title was Junior Software Engineer, but I had my hands in a lot of pots.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Evenica Corp.</span>
                                <c.blockquote>I interned at Evenica as a TSQL Developer.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
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