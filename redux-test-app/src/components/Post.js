import React from "react"

export default ({post}) => {
    return (
        <div className="row">
            <div className="col">
                <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                        <span className="card-title">{post}</span>
                        <p>I am a very simple card. I am good at containing small bits of information.
                            I am convenient because I require little markup to use effectively.</p>
                    </div>
                    {/*<div className="card-action">*/}
                    {/*    <a href="#">This is a link</a>*/}
                    {/*    <a href="#">This is a link</a>*/}
                    {/*</div>*/}
                </div>
            </div>
        </div>
    )
}