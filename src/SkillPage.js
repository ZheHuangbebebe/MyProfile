import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom"
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less';
import { Tag } from "antd"
import { Bar } from '@ant-design/charts';
import QueueAnim from "rc-queue-anim";

export function Skill(props){
  function Detail() {
    return null
  }
  const LanguageBar: React.FC = () => {
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
      description:{
        visible:true,
        text:"点击图表查看详情"
      }
    };
    return <Bar {...config}/>;
  };
  return (
      <div>
        <div style={{width:"50%", display:"inline-block"}}>
        <QueueAnim delay={700}>
        {props.display?
        [
          <LanguageBar key="1"/>
        ]:null}
        </QueueAnim>
        </div>
        <div style={{width:"50%", float:"right"}}>
          {/*<QueueAnim delay={currKey?300:0}>*/}
          {/*</QueueAnim>*/}
        </div>
      </div>
  )
}