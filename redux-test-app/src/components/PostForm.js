import React from "react";
import {connect} from 'react-redux'
import {createPost, showAlert} from "../redux/post.actions";

class PostForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: ''
        }
    }

    submitHandler = e => {
        e.preventDefault()

        const {title} = this.state

        if(!title.trim())
            return this.props.showAlert('Empty string!')

        this.props.showAlert(null)

        const newPost = {
            title, id:  new Date().getTime()
        }

        this.props.createPost(newPost)
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
                    {this.props.myalert && <h5 className="red-text text-darken-3">{this.props.myalert}</h5>}
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

const mapDispatchToProps = {
    createPost: createPost,
    showAlert: showAlert
}

const mapStateToProps = state => ({
    myalert: state.app.alert
})

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)