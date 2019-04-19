import React from 'react';
import {Card, Carousel} from 'antd';
import './index.less';

export default class MSCarousel extends React.Component {
  render() {
    const imgs = ['1.png', '2.png', '3.png', '4.png', '5.png'];
    const imgList = imgs.map((item, index) => {
      return <div key={index} className="img-list"><img  src={require(`../../resource/images/gallery/${item}`)} alt=""/></div>;
    });
    return (
      <div>
        <Card className="card card-wrap" title="跑马灯">
          <Carousel autoplay>
            <div><h3>1</h3></div>
            <div><h3>2</h3></div>
            <div><h3>3</h3></div>
            <div><h3>4</h3></div>
          </Carousel>
        </Card>
        <Card className="card card-wrap slider-wrap" title="跑马灯">
          <Carousel autoplay>
            {imgList}
          </Carousel>
        </Card>
      </div>
    );
  }
}