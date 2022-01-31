import React, { Component } from 'react'
import { dumplogs } from './utils'
//import './BlogCard.css'
import './App1.css'
import classes from './BlogCard.module.css'

class BlogCard extends Component {
  state = {
    likeCount: 0,
  }
  onLikebtn = () => {
    this.setState((prevState, prevProp) => {
      return { likeCount: prevState.likeCount + 1 }
    })
  }
  render() {
    dumplogs(this.props)
    return (
      <div className={classes.NewBlogCard}>
        <img src={this.props.avatar} alt="avatar_1" height={300} width={300} />
        <h3> {this.props.first_name} </h3>
        <p> {this.props.email} </p>
        <p>{this.props.id} </p>
      </div>
    )
  }
}
export default BlogCard
console.clear()
