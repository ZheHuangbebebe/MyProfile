import React, {useState, useEffect} from "react";
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Tag, Typography, Timeline } from "antd"
import { Bar, Pie } from '@ant-design/charts';
import QueueAnim from "rc-queue-anim";
import "./SkillPage.css";
const { Text, Title } = Typography;
export function Skill(props){

  const LanguageBar = () => {
    const data = [
      {
        language: 'Python',
        熟悉程度: 80,
        category: "Python",
      },
      {
        language: 'JavaScript',
        熟悉程度: 70,
        category: 'JavaScript',
      },
      {
        language: 'Java',
        熟悉程度: 60,
        category: 'Java',
      },
      {
        language: 'Golang',
        熟悉程度: 50,
        category: 'Golang',
      },
      {
        language: 'C',
        熟悉程度: 50,
        category: 'C',
      },
      {
        language: 'Haskell',
        熟悉程度: 50,
        category: 'Haskell',
      },
    ];
    const config = {
      forceFit: true,
      title: {
        style:{fontSize:16},
        visible: true,
        text: '我熟悉的编程语言',
      },

      data,
      xField: '熟悉程度',
      yField: 'language',
      colorField: 'category',
      color: ['#91d5ff', '#69c0ff', '#40a9ff', "#1890ff", "#096dd9"],
      label: {
        visible: true,
        position: 'middle',
        adjustColor: true,
        formatter: (v) => v + '%',
      },
      tooltip:{
        visible:false
      },
    };
    return <Bar {...config}/>;
  };

  const SkillBar = () => {
    const data = [
      {
        type: 'React',
        value: 28,
      },
      {
        type: 'Flask',
        value: 23,
      },
      {
        type: 'RDBMS',
        value: 14,
      },
      {
        type: 'Spring-boot/Mybatis',
        value: 14,
      },
      {
        type: 'NoSQL',
        value: 8,
      },
      {
        type: 'MachineLearning',
        value: 8,
      },
    ];
    const config = {
      appendPadding: 10,
      data,
      title: {
        style:{fontSize:16},
        visible: true,
        text: '我熟悉的技术栈',
      },
      angleField: 'value',
      colorField: 'type',
      tooltip:{
        showContent: false,
      },
      radius: 0.8,
      label: {
        type: 'spider',
        formatter: (v, i) => {
          console.log(i)
          return i._origin.type + "\n" + i._origin.value + "%";
        }
      },
    };
    return <Pie {...config}/>;
  };

  return (
      <div >
        <QueueAnim type="bottom" delay={props.display?700:100}>
        {props.display?
        [
          <div key="1" style={{width:"40%", display:"inline-block"}}>
            <div style={{width:"80%",float:"left"}}>
              <LanguageBar/>
            </div>
            <div key="2" style={{width:"100%",float:"left"}}>
              <SkillBar/>
            </div>
          </div>,
            <div key="3" style={{width: "50%", display:"inline-block", marginTop:24, verticalAlign:"top", textAlign:"center"}}>
              <div style={{marginBottom:24}}>
                <Text style={{fontSize:16}} strong>我的时间线</Text>
              </div>
              <Timeline mode="left" pending="还在继续...">
                <Timeline.Item dot={<div style={{background:"inherit"}}>🏁</div>} label="Feb 2017">开始UNSW的学习</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>📖</div>} label="Jul 2017">学习基础的编程和基础数据结构等</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>📖</div>} label="Nov 2017">学习计算机系统，软件设计原则，基础数据结构及算法</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>📖</div>} label="Jul 2018">学习更多算法，面向对象设计模式</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>📖</div>} label="Nov 2018">学习计算机网络，函数式编程，数据库</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>📖</div>} label="Jul 2019">学习逻辑式编程，基础的机器学习及深度学习的概念</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>🎓</div>} label="Nov 2019">学习敏捷开发流程，完成毕业项目并毕业</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>👨‍💻</div>} label="Dec 2019">于寒假开始实习，设计并编写测试用例集，对微服务简单了解</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>😥</div>} label="Mar 2020">应疫情原因，延期入学半年，开始新的实习</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>👨‍💻</div>} label="Jul 2020">实习期间根据需求开发小工具，学习React，加深对Python的理解及项目的业务流程等</Timeline.Item>
                <Timeline.Item dot={<div style={{background:"inherit"}}>🏁</div>} label="Aug 2020">开始USYD的线上授课，开始新的实习</Timeline.Item>
              </Timeline>
          </div>,
        ]:null}
        </QueueAnim>
      </div>
  )
}