import React from 'react';
import { Chart, Tooltip, Axis, Line, Point, Legend } from 'viser-react';
import { Row, Col } from 'antd';
import './index.less';

const DataSet = require('@antv/data-set');
const data = [
  { year: '1991', value: 3 },
  { year: '1992', value: 4 },
  { year: '1993', value: 3.5 },
  { year: '1994', value: 5 },
  { year: '1995', value: 4.9 },
  { year: '1996', value: 6 },
  { year: '1997', value: 7 },
  { year: '1998', value: 9 },
  { year: '1999', value: 13 },
];

const scale = [{
  dataKey: 'value',
  min: 0,
},{
  dataKey: 'year',
  min: 0,
  max: 1,
}];

const sourceData = [
  { month: 'Jan', Tokyo: 7.0, London: 3.9 },
  { month: 'Feb', Tokyo: 6.9, London: 4.2 },
  { month: 'Mar', Tokyo: 9.5, London: 5.7 },
  { month: 'Apr', Tokyo: 14.5, London: 8.5 },
  { month: 'May', Tokyo: 18.4, London: 11.9 },
  { month: 'Jun', Tokyo: 21.5, London: 15.2 },
  { month: 'Jul', Tokyo: 25.2, London: 17.0 },
  { month: 'Aug', Tokyo: 26.5, London: 16.6 },
  { month: 'Sep', Tokyo: 23.3, London: 14.2 },
  { month: 'Oct', Tokyo: 18.3, London: 10.3 },
  { month: 'Nov', Tokyo: 13.9, London: 6.6 },
  { month: 'Dec', Tokyo: 9.6, London: 4.8 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Tokyo', 'London'],
  key: 'city',
  value: 'temperature',
});
const data2 = dv.rows;

const scale2 = [{
  dataKey: 'month',
  min: 0,
  max: 1,
}];

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row className="chart-row" gutter={16}>
          <Col  span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data} scale={scale}>
                <Tooltip />
                <Axis />
                <Line position="year*value" />
                <Point position="year*value" shape="circle"/>
              </Chart>
            </div>
          </Col>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data2} scale={scale2}>
                <Tooltip />
                <Axis />
                <Legend />
                <Line position="month*temperature" color="city" />
                <Point position="month*temperature" color="city" size={4} style={{ stroke: '#fff', lineWidth: 1 }} shape="circle"/>
              </Chart>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}