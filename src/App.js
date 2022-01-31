import react, { Component } from 'react'
import logo from './logo.svg'
import './App1.css'
import BlogCard from './BlogCard'
import { isArrayEmpty } from './utils'

class App extends Component {
  state = {
    showBlogs: true,
  }
  BlogArr = [
    {
      id: 1,
      email: 'george.bluth@reqres.in',
      first_name: 'George',
      last_name: 'Bluth',
      avatar: 'https://reqres.in/img/faces/1-image.jpg',
    },
    {
      id: 2,
      email: 'janet.weaver@reqres.in',
      first_name: 'Janet',
      last_name: 'Weaver',
      avatar: 'https://reqres.in/img/faces/2-image.jpg',
    },
    {
      id: 3,
      email: 'emma.wong@reqres.in',
      first_name: 'Emma',
      last_name: 'Wong',
      avatar: 'https://reqres.in/img/faces/3-image.jpg',
    },
    {
      id: 4,
      email: 'eve.holt@reqres.in',
      first_name: 'Eve',
      last_name: 'Holt',
      avatar: 'https://reqres.in/img/faces/4-image.jpg',
    },
    {
      id: 5,
      email: 'charles.morris@reqres.in',
      first_name: 'Charles',
      last_name: 'Morris',
      avatar: 'https://reqres.in/img/faces/5-image.jpg',
    },
    {
      id: 6,
      email: 'tracey.ramos@reqres.in',
      first_name: 'Tracey',
      last_name: 'Ramos',
      avatar: 'https://reqres.in/img/faces/6-image.jpg',
    },
  ]

  // showBlogs = true
  // const obj1 = {
  //   Blog_title: 'Blog title',
  //   description:
  //     ' lorem ipsun dolor lorem ipaun dolor loream ipsum lorem ipsun dolor lorem lorem ipsun dolor lorem ipson doler lorem ipsun dolor lorem ipsun dolor lorem ipsun dolor lorem ipsun dolor loren ipsun dolor lorem ipsun dolor',
  // }
  // const styles = {
  //   margin: '16px',
  //   padding: '16px',
  //   boxSizing: 'border-box',
  //   borderRadius: '5px',
  //   boxShadow: '0 2px 5px #ccc',
  // }
  // // blog_data = BlogArr['data']
  // // blog_data1 = this.blog_data.map((item1) => {
  // //   console.log('Blog data :' + item1)
  // // })

  blogCards = isArrayEmpty(this.BlogArr)
    ? []
    : this.BlogArr.map((item, pos) => {
        console.log(' hello this is: ' + item)
        console.log('This is: ' + item.first_name)
        console.log('id:' + item.id)
        return (
          // <div className="BlogCard" key={item.id}>
          //   <h3> {item.Blog_title} </h3>
          //   <p> {item.description} </p>
          // </div>
          <BlogCard
            className="Blog"
            key={pos}
            avatar={item.avatar}
            first_name={item.first_name}
            email={item.email}
            id={item.id}
          />
        )
      })
  onHideBtnClick = () => {
    // alert('Button Clicked')
    let currentState = this.state.showBlogs
    console.log('CurrentState ' + currentState)
    if (currentState === true) {
      this.setState({ showBlogs: false })
      console.log(this.state.showBlogs)
    } else {
      this.setState({ showBlogs: true })
      console.log(this.state.showBlogs)
    }
  }
  render() {
    console.log('Render is called')
    return (
      <div className="App">
        <nav className="topbar">
          <span className="nav2">
            <h1>LGVMP</h1>
          </span>
          <span className="nav1">
            <h3>
              {' '}
              <a href="#"> Home </a>
            </h3>
          </span>
          <span className="nav1">
            <h3>
              {' '}
              <a href="#">About</a>{' '}
            </h3>
          </span>
          <span className="nav1">
            <button className="btn1" onClick={this.onHideBtnClick}>
              {' '}
              {this.state.showBlogs ? 'Hide Users' : 'Get Users'}
            </button>
          </span>
        </nav>
        <br />
        {this.state.showBlogs ? this.blogCards : null}
        <div className="main"></div>
      </div>
    )
  }
}

export default App
