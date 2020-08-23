import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Card, Col, Row, Typography, Tag } from 'antd';
import QueueAnim from "rc-queue-anim";
const { Title } = Typography
const { Meta } = Card

export function Experience(props){
  return (
    <QueueAnim delay={props.display?700:100}>
      { props.display?
      <div key="1" style={{padding:16}}>
        <Row gutter={16}>
          <Col span={12}>
            <Title level={2}>我的项目经历</Title>
            <Card style={{marginBottom:16}} hoverable title="RPG Maker" bordered={false} extra={[
              <Tag color="#ffa39e">Java</Tag>,
              <Tag color="#ff7875">JavaFX</Tag>,
              <Tag color="#ff4d4f">面向对象编程</Tag>,
              <Tag color="#f5222d">设计模式</Tag>
              ]}>
              <Meta title="简介" description="一个地下城类RPG小游戏制作器。" />
              <br/>
              <Meta title="MVC" description="基于MVC模式，使用JavaFX制作的应用。" />
              <br/>
              <Meta title="设计模式" description="学习并应用面向对象设计概念及设计模式，如策略模式、状态模式、观察者模式、组件模式等。" />
              <br/>
              <Meta title="Github地址" description="学校项目，无代码地址" />
            </Card>
            <Card style={{marginBottom:16}} hoverable title="UniChat" bordered={false} extra={[
              <Tag color="#91d5ff">Python</Tag>,
              <Tag color="#69c0ff">Flask</Tag>,
              <Tag color="#40a9ff">Flask-login</Tag>,
              <Tag color="#1890ff">SocketIO</Tag>,
              <Tag color="#096dd9">MSSQL</Tag>,
              <Tag color="#0050b3">敏捷开发</Tag>
            ]}>
              <Meta title="简介" description="用于校园内的网页端聊天工具。" />
              <br/>
              <Meta title="生命周期(SDLC)" description="使用Pivotal Tracker进行管理并应用敏捷开发生命周期进行版本迭代。" />
              <br/>
              <Meta title="后端框架" description="后端基于Flask，使用Flask-login实现用户登陆操作，Flask-socketio配合前端实现双向通信。" />
              <br/>
              <Meta title="数据库/数据收集" description="使用MicroSoft SQL Server作为服务器并管理数据，调用API爬取UNSW2020的课程信息。"/>
              <br/>
              <Meta title="Github地址" description="学校项目，无代码地址" />
            </Card>
            <Card style={{marginBottom:16}} hoverable title="Daily Pixiv" bordered={false} extra={[
              <Tag color="#95de64">JavaScript</Tag>,
              <Tag color="#73d13d">React</Tag>,
              <Tag color="#52c41a">AntDesign</Tag>,
            ]}>
              <Meta title="简介" description="调用现有API实现，无需VPN即可查看Pixiv排行榜或根据作者/标签查看作品的纯前端项目。" />
              <br/>
              <Meta title="框架" description="基于AntDesign组件，使用React实现的UI" />
              <br/>
              <Meta title="Github地址" description={<a target="_blank" href="https://github.com/ZheHuangbebebe/Daily_Pixiv">https://github.com/ZheHuangbebebe/Daily_Pixiv</a>} />
            </Card>
          </Col>
          <Col span={12}>
            <Title level={2}>我的实习经历</Title>
            <Card style={{marginBottom:16}} hoverable title="上海贞历网络科技有限公司" bordered={false} extra={[
              <Tag color="#ffc069">Docker</Tag>,
              <Tag color="#ffa940">GraphQL</Tag>,
              <Tag color="#fa8c16">Blender</Tag>,
              <Tag color="#d46b08">微服务</Tag>,
            ]}>
              <Meta title="职位" description="测试开发" />
              <br/>
              <Meta title="开始时间 - 结束时间" description="Dec 2019 - Feb 2020" />
              <br/>
              <Meta title="自动化测试" description="编写电商平台微服务的自动化测试，掌握基础的 Docker, Redis, GraphQL 与微服 务的架构等。" />
              <br/>
              <Meta title="Blender 脚本开发" description="用 python 编写 blender 脚本。"/>
            </Card>
            <Card style={{marginBottom:16}} hoverable title="北京字节跳动科技有限公司" bordered={false} extra={[
              <Tag color="#87e8de">软件测试</Tag>,
              <Tag color="#5cdbd3">CI/CD</Tag>,
              <Tag color="#36cfc9">代码覆盖率</Tag>,
              <Tag color="#13c2c2">React</Tag>,
              <Tag color="#08979c">Gin/Kite</Tag>,
              <Tag color="#006d75">RPC</Tag>,

            ]}>
              <Meta title="职位" description="测试开发" />
              <br/>
              <Meta title="开始时间 - 结束时间" description="Mar 2020 - Jul 2020" />
              <br/>
              <Meta title="测试基本概念及业务流程" description="学习黑盒/白盒，动态/静态测试，抓包、接口测试、静态扫描、代码覆盖率等。 熟悉测试业务流程如:冒烟测试、功能性测试、回归测试等。" />
              <br/>
              <Meta title="系统(集成)代码覆盖率平台" description="学习公司内其他部门系统代码覆盖率工具，协调并推广部门内的开发和测试人员搭建覆盖率平台。"/>
              <br/>
              <Meta title="开发辅助测试或标注的工具" description="调用下游服务的 API 或 SDK，编写帮助提效的小工具，如:OCR(图片转文字)后 通过正则批量筛选指定图片;给定参数自动生成接口测试用例等。"/>
              <br/>
              <Meta title="字节云平台及 DevOps 学习" description="学习并使用开发机，TOS 对象储存，NoSQL，SCM 仓库等。"/>
            </Card>
          </Col>
        </Row>
      </div>
      :null }
    </QueueAnim>
  )
}