import { useState } from 'react'
// import { Button } from 'antd'
// import {UpCircleOutlined} from '@ant-design/icons'
// import Comp1 from "@/components/Comp1"
// import Comp2 from "@/components/Comp2"

//import {Outlet,Link} from "react-router-dom"
import {useRoutes,Link} from "react-router-dom"
import router from "./router"

function App() {
  const [count, setCount] = useState(0)
  const outlet = useRoutes(router)
  return (
    <>
      {/* <p>这是app</p>
      <Link to="/home"> Home </Link> |
      <Link to="/about"> About </Link> |
      <Link to="/user"> User </Link> | */}
      {/* <Button type='primary'>我是ant的按钮</Button>
      <Button >我是ant的按钮</Button>
      <Button type='dashed'>我是ant的按钮</Button>
      <Button type='text'>我是ant的按钮</Button>
      <UpCircleOutlined style={{fontSize:'40px',color:'red'}} />
      <Comp1></Comp1>
      <Comp2></Comp2> */}

      {/* 占位符组件，类似于窗口，用来展示组件，有点像vue中的router-view */}
      {/* <Outlet></Outlet> */}
      {outlet}
    </>
  )
}

export default App
