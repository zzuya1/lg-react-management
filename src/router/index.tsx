//对象形式的写法
import React,{ lazy } from "react"
import Home from "../views/Home"
const About = lazy(()=>import("../views/About"))
const User = lazy(()=>import("../views/User"))
const Page1 = lazy(()=>import("../views/Page1"))
const Page2 = lazy(()=>import("../views/Page2"))
//懒加载的模式组件的写法，需要我们给它在外面套一个Loading提示加载组件

import {Navigate} from "react-router-dom"

const withLoadingComponent = (comp:JSX.Element)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
     {comp}
    </React.Suspense>
)

const routes = [
    //嵌套路由开始---------------
    {
        path:"/",
        element:<Navigate to="/page1"/>
    },
    {
        path:"/",
        element:<Home/>,
        children:[
            {
             path:"/Page1",
             element:withLoadingComponent(<Page1/>)
            },{
             path:"/Page2",
             element:withLoadingComponent(<Page2/>)
            } 
        ]
    }
    //嵌套路由结束----------------
    // {
    //     path:"/home",
    //     element:<Home/>
    // },
    // {
    //     path:"/about",
    //     element:
    //     withLoadingComponent(<About/>)
    // },
    // {
    //     path:"/user",
    //     element:withLoadingComponent(<User/>)
    //     // <React.Suspense fallback={<div>Loading...</div>}>
    //     //     <User/>
    //     // </React.Suspense>
    // },
]

export default routes