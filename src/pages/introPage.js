import React, {useState} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Avatar, Typography, Button } from "antd"
import Typed from 'typed.js';
import { UserOutlined, CodeTwoTone } from '@ant-design/icons';
import backgroundPic from "../asset/backgroundPic.jpg"
import base64 from "../asset/1.jpeg"
import QueueAnim from 'rc-queue-anim';

const { Title, Text, Paragraph } = Typography;


export function Profile(props){
  const mul = window.innerWidth*window.innerHeight
  const [size, setSize] = useState(mul/9000)
  let typed = null
  console.log(window)
  console.log(size)
  window.onresize = ()=>{
    setSize(window.innerWidth*window.innerHeight/9000)
  }
  function handleClick(text){
    let container = document.querySelector(".detail");
    let cursor
    console.log(container)
    if(container.innerText){
      container.innerText = "";
    }
    if (typed){
      typed.stop()
    }
    typed = new Typed('.detail', {
      // Waits 1000ms after typing "First"
      strings: [text],
      showCursor:false,
      smartBackspace: true,
      typeSpeed: 50,
      backSpeed: 50,
    });
  }
  return (
    <div style={{height:"100%", textAlign:"center",}}>
      <QueueAnim type="scale"delay={props.display?700:100} className="queue-simple">
        {props.display?
          [
          <div key="1" style={{lineHeight:"40vh"}}>
            <Avatar key="2" size={300} src={base64} />,
          </div>,
          <Title key="3" ><Text code className="code">echo "Hi!, This is Zhe"</Text></Title>,
          <div key="6">
            <Button key={props.display?"a":"5"} style={{fontSize:15, marginRight:12}} size="small" onClick={async()=>{
            handleClick("姓名：黄喆\n^200年龄：22\n^200目前就读于：悉尼大学IT硕士\n^200所在地：上海/悉尼\n^200这是我的个人简历😊")}}>关于我</Button>
            <Button key={props.display?"b":"4"} style={{fontSize:15, marginRight:12}} size="small" onClick={async()=>{
            handleClick("这是一个简单的前端项目\n^200用于展示我的个人信息\n^200基于React框架、Ant Design组件和animate.js制作\n你可以在我的Github主页上找到源码！")}}>关于我的首页</Button>
            <Paragraph><h4 className="detail"
            style={{ whiteSpace: 'pre' }}></h4></Paragraph>
          </div>]
          : null
        }
      </QueueAnim>
    </div>
  )
}