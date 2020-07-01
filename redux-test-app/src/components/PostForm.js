import React from "react";

export default class PostForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const {title} = this.state

        const newPost = {
            title, id:  new Date().getTime()
        }


        this.setState({title: ''})
    }

    changeInputHandler = e => {
        e.persist()
        this.setState(prev => ({...prev, ...{
            [e.target.name]: e.target.value
        }}))
    }

    render() {
        return (

                <form onSubmit={this.submitHandler}>
                    <div className="input-field">
                        <input placeholder="Type the title of post" id="title" name="title" type="text"
                               className="validate" value={this.state.title} onChange={this.changeInputHandler}/>
                        <input type="submit" className="btn-small" value="Create"/>
                        <label htmlFor="first_name">Post</label>
                    </div>
                </form>
            )
    }


}