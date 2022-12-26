import React from "react";


function About(){
    return <div>

                <section id="about">

                    <div className="about">
                        <h1 className="header">About and Skills</h1>
                        <h4>I'am a student at Akdeniz University.</h4>

                    </div>

                        <div className="skills">      

                                    
                                    <table align="center">
                                        <tr>
                                            <th><img className="skill" src="images/html.png" /></th>
                                            <th><img className="skill" src="images/css.png" /></th>
                                            <th><img className="skill" src="images/bootstrap.png" /></th>
                                            <th><img className="skill" src="images/javascript.png" /></th>
                                            <th><img className="skill" src="images/node.png" /></th>
                                        </tr>   

                                        <tr>
                                            <th><h6>Html</h6></th>
                                            <th><h6>Css</h6></th>
                                            <th><h6>Bootsrap</h6></th>
                                            <th><h6>Javascript</h6></th>
                                            <th><h6>Node</h6></th>
                                        </tr>
                        </table>
                         </div>

                        
                        <hr />
                     </section>
            </div>     
}

export default About;