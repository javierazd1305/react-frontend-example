import React, { Component } from 'react'
import Navbar from "./Navbar"
import axios from "axios"
import { Form, Row, Col, Button } from 'react-bootstrap'



export class index extends Component {
    constructor(props) {
        super(props)

        this.state = {
            posts: [],
            errorMsg: '',
            name: '',
            postMesg: ''
        }
    }
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = (e) => {
        e.preventDefault()
        const url = "https://django-post-example.herokuapp.com/post/examplepost2/"
        //const url = "http://localhost:8000/post/examplepost2/"
        axios.post(url, {
            data: this.state,
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(response => {
                console.log(response);
                this.setState({ postMesg: response.data })
                console.log(this.state)
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: "Error retreiving data" })
            })

    }

    componentDidMount() {
        const url = "https://django-post-example.herokuapp.com/post/examplepost/"
        //const url = "http://localhost:8000/post/examplepost/"
        axios.post(url, {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        })
            .then(response => {
                console.log(response);
                this.setState({ posts: response.data })
            })
            .catch(error => {
                console.log(error);
                this.setState({ errorMsg: "Error retreiving data" })
            })
    }

    render() {
        const { posts, errorMsg, name, postMesg } = this.state
        return (
            <div>
                <Navbar />
                <div className="second-page-header">
                    <div className="container pt-3">
                        {errorMsg ? <div>{errorMsg} </div> : null}
                    component Did Mount: {posts.data} {postMesg}
                        <Form onSubmit={this.submitHandler}>
                            <Row>
                                <Col>
                                    <Form.Control placeholder="First Name" value={name} name="name" onChange={this.changeHandler} />
                                </Col>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                    </Button>
                        </Form>

                    </div>
                </div>
            </div>
        )
    }
}

export default index
