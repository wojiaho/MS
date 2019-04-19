import React from 'react';
import { Map, Marker, Polygon, InfoWindow  } from 'react-amap';
import './index.less';

const polygonStyle = {
  strokeColor: "#1791fc", 
  strokeWeight: 6,
  fillOpacity: 0.4,
  fillColor: '#1791fc'
};

const ZoomCtrl = (props) => {
  // const map = props.__map__;
  return (<div>
    <button >zoom in</button>
    <button>zoom out</button>
  </div>);
};

export default class ReactAMap extends React.Component {
  constructor() {
    super();
    this.state = {
      center: null, // 中心位置坐标
      path: [ // 多边形路径
        [121.651987, 31.153176],
        [121.686319, 31.154645],
        [121.671127, 31.134958],
        [121.648725, 31.135472]
      ],
      position: { // 坐标点位置
        longitude: 121.6616,
        latitude: 31.140982
      },
      status: {
        showIndoorMap :  true,// 是否在有矢量底图的时候自动展示室内地图，PC默认true,移动端默认false
        resizeEnable :  false, //是否监控地图容器尺寸变化，默认值为false
        dragEnable :  false, // 地图是否可通过鼠标拖拽平移，默认为true
        keyboardEnable :  false,//地图是否可通过键盘控制，默认为true
        doubleClickZoom :  false,// 地图是否可通过双击鼠标放大地图，默认为true
        zoomEnable :  true, //地图是否可缩放，默认值为true
        rotateEnable :  false// 地图是否可旋转，3D视图默认为true，2D视图默认false
      },
      windowVisible: false, // 是否显示窗体信息
      offset: [0, 0], // 窗体偏移量

    };
    this.mapEvents = {
      created: (map) => {
        this.mapInstance = map;
        this.showCenter();
      },
      moveend: () => {
        this.showCenter();
      }
    };
  }
  // 设置中心位置
  showCenter = () => {
    this.setState({
      center: `${this.mapInstance.getCenter()}`
    });
  }
  // 切换状态
  toggeleStatus = (type) => {
    this.setState({
      status: {
        ...this.state.status,
        [type]: !this.state.status[type]
      }
    });
  }
  // 切换窗体显示状态
  toggleWindowShow = () => {
    this.setState({
      windowVisible: !this.state.windowVisible
    });
  }
  // 修改窗体偏移量
  changeOffset = () => {
    this.setState({
      offset: [Math.random() * 10, Math.random() * 10]
    });
  }
  render() {
    const { status } = this.state;
    return (
      <div style={{height: 500}}>
        <Map className="map" amapkey='a882e480c766326f01ba0e9d4d1f5c6e' zoom={14}    events={this.mapEvents} center={this.state.position} status={ status }> 
          <Marker position={this.state.position} />
          <Polygon path={this.state.path} style={polygonStyle}/>
          <InfoWindow
            position={this.state.position}
            visible={this.state.windowVisible}
            size={{
              width: 200,
              height: 140,
            }}
            offset={this.state.offset}
            isCustom
          >
          这里是: {this.state.center}
          </InfoWindow>
          <div className="customLayer"> 
            <h4>A Custom Layer</h4>
            <p>中心坐标是: {this.state.center}</p>
          </div>
          <div className="map-status-wrap"> 
            <h4>当前地图状态</h4>
            <ul>
              {Object.keys(status).map((item, index) => {
                return <li key={index}>{item} : {`${status[item]}`}</li>; 
              })}
            </ul>
          </div>
          <div>
            <button onClick={() => this.toggeleStatus('zoomEnable')}>{ status.zoomEnable ? '禁用缩放' : '启用缩放'}</button>
            <button onClick={() => this.toggeleStatus('dragEnable')}>{ status.dragEnable ? '禁用拖拽' : '启用拖拽'}</button>
            <button onClick={() => this.toggeleStatus('doubleClickZoom')}>{ status.doubleClickZoom ? '禁用双击放大地图' : '启用双击放大地图'}</button>
            <button onClick={this.toggleWindowShow}>{ this.state.windowVisible ? '关闭自定义窗体' : '显示自定义窗体'}</button>
            <button onClick={this.changeOffset}>修改窗体偏移量</button>
          </div>
        </Map>
        <div style={{display: 'none'}}>
          <Map>
            <ZoomCtrl />
          </Map>
        </div>
        
      </div>
    );
  }
}