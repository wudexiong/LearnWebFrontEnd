import React from 'react'
import {BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
// import List from './pages/List'
// import Home from './pages/Home'
import Video from './pages/video/Video'
import './index.css'


let routeConfig =[
    {path:'/',title:'博客首页',exact:true,component:Index},
    {path:'/video/',title:'视频教程',exact:false,component:Video},
]
function AppRouter() {
    return (
        // 基础路由
        // <Router>
        // <ul>
        //     <li> <Link to="/">首页</Link> </li>
        //     <li><Link to="/list/123">列表</Link> </li>
        // </ul>
        // <Route path="/home/" component={Home} />
        // <Route path="/" exact component={Index} />
        // <Route path="/list/:id" component={List} />
        // </Router>


        // 嵌套路由
        <Router>
          <div className="mainDiv">
            <div className="leftNav">
                <h3>一级导航</h3>
                <ul>
                    {routeConfig.map((item,index)=>{
                        return (<li key={index+item}> <Link to={item.path}>{item.title}</Link> </li>)
                    })}
                </ul>
            </div>

            <div className="rightMain">
                    {routeConfig.map((item,index)=>{
                        return (<Route key={index} path={item.path}  exact component={item.component} />)
                    })}
                <Route path="/"  exact component={Index} />
                <Route path="/video"  component={Video} />
            </div>
          </div>
      </Router>
    )
}

export default AppRouter