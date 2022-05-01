import React from 'react';
import * as c from './Styled.Components'

function Experience() {
    return (
        <div className="container">
            <c.pageHeader className="row center">
                <h4>Projects</h4>
            </c.pageHeader>
            <c.pageContent className="row">

                <ul>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Seize Alert</span>
                                <c.blockquote>Prototype mobile application using BLE wrist sensors to detect erratic movements, to be applied to epilepsy patients or falls.
                                    Built on React Native and Express.js.
                                </c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">Patent Alert</span>
                                <c.blockquote>Client Management System which emails notifications based on matching patents. Written in React Web and Express.js.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">silk</span>
                                <c.blockquote>Another python microblog using markdown to display blogposts. Upgrade in the works.</c.blockquote>
                            </div>
                        </div>

                    </li>
                    <li>
                        <div className="card white z-depth-0">
                            <div className="card-content black-text">
                                <span className="card-title">text-to-thought</span>
                                <c.blockquote>A simple text messaging service that logs your text message where you can view it on a webpage
                                    at a later date.
                                </c.blockquote>
                            </div>
                        </div>

                    </li>
                </ul>
            </c.pageContent>
        </div>

    )

}



export default Experience;