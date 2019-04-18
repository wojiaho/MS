import React from 'react';
import { Map, Marker, Polygon } from 'react-amap';
import './index.less';

const polygonStyle = {
  strokeColor: "#1791fc", 
  strokeWeight: 6,
  fillOpacity: 0.4,
  fillColor: '#1791fc'
}

const ZoomCtrl = (props) => {
  const map = props.__map__;
  console.log(map);
  return (<div>
    <button >zoom in</button>
    <button>zoom out</button>
  </div>);
}

export default class ReactAMap extends React.Component {
  constructor() {
    super();
    this.state = {
      center: null,
      path: [
        [121.651987, 31.153176],
        [121.686319, 31.154645],
        [121.671127, 31.134958],
        [121.648725, 31.135472]
      ],
      position: {
        longitude: 121.6616,
        latitude: 31.140982
      },
      status: {
        showIndoorMap :  false,
        resizeEnable :  true,
        dragEnable :  true,
        keyboardEnable :  false,
        doubleClickZoom :  false,
        zoomEnable :  false,
        rotateEnable :  false
      }
    };
    this.mapEvents = {
      created: (map) => {
        this.mapInstance = map;
        this.showCenter();
      },
      moveend: () => {
        this.showCenter();
      }
    }
  }
  showCenter = () => {
    this.setState({
      center: `${this.mapInstance.getCenter()}`
    });
  }
  toggeleZoomEnable = () => {
    this.setState({
      status: {
        ...this.state.status,
        zoomEnable: !this.state.status.zoomEnable
      }
    });
  }
  render() {
    const { status } = this.state;
    return (
      <div style={{height: 500}}>
        <Map className="map" amapkey='a882e480c766326f01ba0e9d4d1f5c6e' zoom={14}    events={this.mapEvents} center={this.state.position} status={ status }> 
          <Marker position={this.state.position} />
          <Polygon path={this.state.path} style={polygonStyle}/>
          <div className="customLayer"> 
            <h4>A Custom Layer</h4>
            <p>中心坐标是: {this.state.center}</p>
          </div>
          <div className="map-status-wrap"> 
            <h4>当前地图状态</h4>
            <ul>
              {Object.keys(status).map((item, index) => {
                return <li key={index}>{item} : {`${status[item]}`}</li> 
              })}
            </ul>
          </div>
          <div>
            <button onClick={this.toggeleZoomEnable}>{ status.zoomEnable ? '禁用缩放' : '启用缩放'}</button>
          </div>
        </Map>
        
        <div style={{display: 'none'}}>
          <Map>
            <ZoomCtrl />
          </Map>
        </div>
        
      </div>
    )
  }
}