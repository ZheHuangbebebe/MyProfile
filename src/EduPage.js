import React, {useState} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Card, PageHeader, Tabs, Descriptions, Collapse, Typography } from "antd"
import { InfoCircleOutlined, QuestionCircleTwoTone } from '@ant-design/icons';
import unsw from "./unsw.jpg"
import usyd from "./usyd.png"
import reword1 from "./reward1.jpeg"
import reword2 from "./reward2.jpeg"
import reword3 from "./reward3.jpeg"
import reword4 from "./reward4.jpeg"

import QueueAnim from 'rc-queue-anim';
const { Meta } = Card;
const { TabPane } = Tabs;
const { Title, Paragraph, Text } = Typography;
const { Panel } = Collapse;

export function Education(props){

  const unsw_reward = (
    <div style={{width:"100%"}}>
      <br/>
      <Paragraph>
        在UNSW的三年时间对我不论是生活还是专业上的影响非常的大。
        <ul>
         <li>
            一个人在外生活的压力从一开始逃避然后慢慢适应，提高类自己的<b>抗压能力</b>。
          </li>
         <li>
            获取专业知识时大部分时间没有可以询问的人，提高了<b>自己解决问题的能力</b>(Google, Stackoverflow, GitHub)。
          </li>
          <li>
            学会特殊日常技能，比如在锅上垫个锡纸烤东西，就不用洗锅。
          </li>
        </ul>
        <br/>
        附一张UNSW主路的糊照<br/>
        <img style={{width:"80%", overflow:"hidden"}} src={reword1}/>
      </Paragraph>
     </div>
  )

  const unsw_courses = (
    <Collapse accordion bordered={false} style={{background:"inherit"}}>
      <Panel header={<b>Computer Systems Fundamentals</b>} key="1"
        extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP1521/"><QuestionCircleTwoTone /></a>}
      >
        <p>基础的计算机系统知识，学习C语言。<br/>包括进程与线程，编程语言的编译过程，简单的机器语言Mips编程等。</p>
      </Panel>
      <Panel header={<b>Software Engineering Fundamentals</b>} key="2"
       extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP1531/"><QuestionCircleTwoTone /></a>}
      >
        <p>软件设计的基础及Python编程。<br/>学习面向对象的基本特征、设计原则(如SRP、OCP)、静态或动态的设计图(UML、ER diagram、Sequence diagram等)。<br/>使用Python的类和Flask编写后台系统。</p>
      </Panel>
      <Panel header={<b>Software Construction: Techniques and Tools</b>} key="3"
             extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP2041/"><QuestionCircleTwoTone /></a>}
      >
        <p>运用各种语言制作工具。<br/>学习编写Shell脚本、Perl、JavaScript语言，各种常用工具(如git)。<br/>使用纯JavaScript编写类Reddit的博客前端.</p>
      </Panel>
      <Panel header={<b>Object-Oriented Design & Programming</b>} key="4"
       extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP2511/"><QuestionCircleTwoTone /></a>}
      >
        <p>学习面向对象及Java编程。<br/>基于Java加深理解面向对象的基本特征，学习各种设计模式(状态模式、策略模式、组件模式等)，加深理解Java并发。<br/>运用各种设计模式及JavaFX实现一个类地下城的小游戏。</p>
      </Panel>
      <Panel header={<b>Data Structures and Algorithms</b>} key="5"
             extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP2521/"><QuestionCircleTwoTone /></a>}
      >
        <p>常用数据结构及算法。<br/>学习数据结构(如LinkedList、Tree、Queue、Stack等)、最短路径算法、BFS、DFS，各种排序方法的复杂度等。</p>
      </Panel><Panel header={<b>Concepts of Programming Languages</b>} key="6"
                     extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3161/"><QuestionCircleTwoTone /></a>}
    >
      <p>计算机语言的理论基础(Syntax, Operatational, Axiomatic和Denotational semantics), 学习Haskell编程。函数式编程的概念及实现(Haskell的动态，强类型，多态性，重载等)。使用Haskell实现实现乌龟作图</p>
    </Panel><Panel header={<b>Database Systems</b>} key="7"
                   extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3311/"><QuestionCircleTwoTone /></a>}
    >
      <p>学习常用数据库及语句。<br/>学习常用常用数据库(MySQL、PostgreSQL)、PHP操作数据库。</p>
    </Panel><Panel header={<b>Computer Networks and Applications</b>} key="8"
                   extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3331/"><QuestionCircleTwoTone /></a>}
    >
      <p>计算机网络基础知识。<br/>学习OSI五层模型，各层的常用协议，学习基础的网络编程。<br/>使用Python，用UDP传输模拟TCP传输，即用UDP实现TCP的各种特性。</p>
    </Panel><Panel header={<b>Artificial Intelligence</b>} key="9"
                   extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP3411/"><QuestionCircleTwoTone /></a>}
    >
      <p>对AI对认知与设计，学习Prolog逻辑编程。对主流的AI算法了解(如决策树，强化学习和神经网络)、学习搜索算法(A*、Monte Carlo)及剪枝等、对逻辑式编程进行了解。使用Prolog编写<a target="_blank" href="https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe">Nine-Board-Tic-Toc-Toe</a>的决策算法。</p>
    </Panel><Panel header={<b>Management and Ethics</b>} key="10"
                   extra={<a target="_blank" href="https://www.handbook.unsw.edu.au/undergraduate/courses/2020/COMP4920/"><QuestionCircleTwoTone /></a>}
    >
      <p>计算机的管理与道德。<br/>了解敏捷开发并使用<a target="_blank" href="https://www.pivotaltracker.com/">Pivotal Tracker</a>。<br/>团队合作开发一款产品</p>
    </Panel>
    </Collapse>
  )

  const usyd_courses = (
    <Collapse accordion bordered={false} style={{background:"inherit"}}>
      <Panel header={<b>Professional Practice in IT</b>} key="1"
             extra={<a target="_blank" href="https://www.sydney.edu.au/units/INFO5990/"><QuestionCircleTwoTone /></a>}
      >
        <p>还没开始学</p>
      </Panel>
      <Panel header={<b>Machine Learning and Data Mining</b>} key="2"
             extra={<a target="_blank" href="https://www.sydney.edu.au/units/COMP5318/"><QuestionCircleTwoTone /></a>}
      >
        <p>还没开始学</p>
      </Panel>
      <Panel header={<b>Natural Language Processing</b>} key="3"
             extra={<a target="_blank" href="https://www.sydney.edu.au/units/COMP5046/"><QuestionCircleTwoTone /></a>}
      >
        <p>还没开始学</p>
      </Panel>
      <Panel header={<b>	Parallel and Distributed Computing</b>} key="4"
             extra={<a target="_blank" href="https://www.sydney.edu.au/units/COMP5426/"><QuestionCircleTwoTone /></a>}
      >
        <p>还没开始学</p>
      </Panel>
      <Panel header={<b>Deep Learning</b>} key="5"
             extra={<a target="_blank" href="https://www.sydney.edu.au/units/COMP5329/"><QuestionCircleTwoTone /></a>}
      >
        <p>还没开始学</p>
      </Panel>
    </Collapse>
  )

  const unsw_detail = (
    <PageHeader
      key = "1"
      avatar = {{src:unsw, size:50}}
      style={{width:"50%", height:"100%", float:"left"}}
      title="新南威尔士大学"
      subTitle="UNSW"
      extra={<a target="_blank" href="https://www.unsw.edu.au/"><InfoCircleOutlined style={{fontSize:16}}/></a>}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="主要课程" key="1">
            {unsw_courses}
          </TabPane>
          <TabPane tab="其他收获" key="2" >
            {unsw_reward}
          </TabPane>
        </Tabs>
      }
    >
      <Descriptions key = "2" size="small" column={2}>
        <Descriptions.Item label="入学时间">Feb 2017</Descriptions.Item>
        <Descriptions.Item label="毕业时间">Dec 2019</Descriptions.Item>
        <Descriptions.Item label="所学专业">Computer Science</Descriptions.Item>
        <Descriptions.Item label="学位">本科</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  )

  const usyd_detail = (
    <PageHeader
      key="2"
      avatar = {{src:usyd, size:50}}
      style={{width:"50%", height:"100%", float:"right"}}
      title="悉尼大学"
      subTitle="USYD"
      extra={<a target="_blank" href="https://www.sydney.edu.au/"><InfoCircleOutlined style={{fontSize:16}}/></a>}
      footer={
        <Tabs defaultActiveKey="1">
          <TabPane tab="主要课程" key="1" >
            {usyd_courses}
          </TabPane>
          <TabPane tab="其他收获" key="2" />
        </Tabs>
      }
    >
      <Descriptions size="small" column={2}>
        <Descriptions.Item label="入学时间">Aug 2020</Descriptions.Item>
        <Descriptions.Item label="预计毕业时间">Jun 2022</Descriptions.Item>
        <Descriptions.Item label="所学专业">Information Technology</Descriptions.Item>
        <Descriptions.Item label="学位">硕士</Descriptions.Item>
      </Descriptions>
    </PageHeader>
  )

  return (
    <div style={{height:"100%", overflow:"hidden", padding: 24}}>
    <QueueAnim type="top" delay={props.display?700:100}>
      {props.display ?
        [
        unsw_detail,
        usyd_detail
        ]
      :null}
    </QueueAnim>
    </div>
  )
}