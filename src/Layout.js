import React from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import "./Layout.css"
import { Menu, Layout, Popover, Button, Steps } from 'antd';
import { MailOutlined, AppstoreOutlined, GithubOutlined, WechatOutlined, LinkedinOutlined, PhoneOutlined,ProfileTwoTone,IdcardTwoTone,ProjectTwoTone, ContainerTwoTone } from '@ant-design/icons';
import { Profile } from "./introPage";
import { Education } from "./EduPage";
import { Skill } from "./SkillPage";
import qrcode from "./qrcode.jpeg"
import reward2 from "./reward2.jpeg"
import {Experience} from "./ExpPage";
const { Content, Footer } = Layout;
const { Step } = Steps
// let ua = navigator.userAgent;
//
// let ipad = ua.match(/(iPad).*OS\s([\d_]+)/)
// const isIphone =!ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/)
// const isAndroid = ua.match(/(Android)\s+([\d.]+)/)
// const isMobile = isIphone || isAndroid

let leftAnim = null;
let rightAnim = null;

export default class MainLayout extends React.Component {
  state = {
    current: '1',
    page: 1
  };

  // handleClick = id => {
  //   if(id==="left"){
  //     this.setState({page:this.state.page-1})
  //     if (leftAnim){
  //       leftAnim.restart()
  //     }
  //     else{
  //       leftAnim = anime({
  //         targets: "#left",
  //         scale: 1.8,
  //         loop: 1,
  //         direction: 'alternate',
  //         duration:400
  //       });
  //     }
  //   }
  //   else if(id==="right"){
  //     this.setState({page:this.state.page+1})
  //     if (rightAnim){
  //       rightAnim.restart()
  //     }
  //     else{
  //       rightAnim = anime({
  //         targets: "#right",
  //         scale: 1.8,
  //         loop: 1,
  //         direction: 'alternate',
  //         duration:400
  //       });
  //     }
  //   }
  // };

  render() {
    const { current } = this.state;
    return (
      <Layout id="layout" style={{height:"100vh", backgroundImage:{reward2}}}>
        <Menu  style={{height:"48px", background: "#ebfaff"}}  theme="light" onClick={this.handleClick} selectedKeys={[current]} mode="horizontal">
          <Menu.Item key="0" icon={<AppstoreOutlined />}>
            bebebe
          </Menu.Item>
          <Menu.Item style={{float:"right"}} key="3" disabled icon={<AppstoreOutlined />}>
            我的学习博客
          </Menu.Item>
          <Menu.Item style={{float:"right"}} key="1" icon={<MailOutlined />} >
            我的简介
          </Menu.Item>
        </Menu>
        <Content id="content" style={{overflowY:"auto"}}>
          <div>
          <Profile display={this.state.page===1?true:false}/>
          </div>
          <div>
          <Education display={this.state.page===2?true:false}/>
          </div>
          <div>
            <Skill display={this.state.page===3?true:false}/>
          </div>
          <div>
            <Experience display={this.state.page===4?true:false}/>
          </div>
        </Content>
        <div style={{marginLeft:"30%", width:"40%", textAlign:"center", display:"inline", marginBottom:16}}>
          <Steps type="navigation" size="small"current={this.state.page-1} onChange={(p)=>{this.setState({page:p+1})}}>
            <Step icon={<ProfileTwoTone />} title="首页" />
            <Step icon={<IdcardTwoTone />} title="教育经历" />
            <Step icon={<ProjectTwoTone />} title="个人技能" />
            <Step icon={<ContainerTwoTone />} title="项目/实习经历" />
          </Steps>
          {/*<LeftOutlined style={{fontSize:36, marginRight:12, display:this.state.page===1?"none":"inline-block"}} id="left" onClick={()=>{this.handleClick("left")}}/>*/}
          {/*<RightOutlined style={{fontSize:36, marginLeft:12, display:this.state.page===3?"none":"inline-block"}} id="right" onClick={()=>{this.handleClick("right")}}/>*/}
        </div>
        <Footer style={{ textAlign: 'center', background:"#ebfaff" }}>
          <p style={{fontSize:"20px", display:"inline"}}>联系我：</p>
          <Popover content={<img width="512" src={qrcode}/>}><WechatOutlined style={{fontSize:"32px", marginRight:12}}/></Popover>
          <Popover content={<>点击进入我的主页</>}>
          <LinkedinOutlined onClick={()=>{
            let a = document.createElement("a")
            a.href = "https://www.linkedin.com/in/%E5%96%86-%E9%BB%84-8b60931a5/"
            a.target = "_blank"
            a.click()
          }} style={{fontSize:"32px", marginRight:12}}/>
          </Popover>
          <Popover content={<>点击进入我的主页</>}>
          <GithubOutlined onClick={()=>{
            let a = document.createElement("a")
            a.href = "https://github.com/ZheHuangbebebe"
            a.target = "_blank"
            a.click()
          }} style={{fontSize:"32px", marginRight:12}}/>
          </Popover>
          <Popover content={<b>+86 18221383588<br/>+61 420215892</b>}><PhoneOutlined style={{fontSize:"32px", marginRight:12}} /></Popover>
          <Popover content={<b>772684267@qq.com</b>}>
          <MailOutlined style={{fontSize:"32px", marginRight:12}}/>
          </Popover>
          <br/>
          MyBlog 2020 Created by Zhe Huang</Footer>
      </Layout>
    );
  }
}

