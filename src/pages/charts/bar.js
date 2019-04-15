import React from 'react';
import { Chart, Tooltip, Axis, Bar, Legend, Coord } from 'viser-react';
import { Row, Col } from 'antd';
import './index.less';
const DataSet = require('@antv/data-set');

const data1 = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];
const scale1 = [{
  dataKey: 'sales',
  tickInterval: 20,
}];

const sourceData = [
  { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, 'May': 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
  { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, 'May': 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
];

const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'fold',
  fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
  key: '月份',
  value: '月均降雨量',
});
const data2 = dv.rows;

const sourceData2 = [
  { label: 'Mon.', series1: 2800, series2: 2260 },
  { label: 'Tues.', series1: 1800, series2: 1300 },
  { label: 'Wed.', series1: 950, series2: 900 },
  { label: 'Thur.', series1: 500, series2: 390 },
  { label: 'Fri.', series1: 170, series2: 100 },
];
const dv2 = new DataSet.View().source(sourceData2);
dv2.transform({
  type: 'fold',
  fields: ['series1', 'series2'],
  key: 'type',
  value: 'value',
});
const data3 = dv2.rows;

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Row className="chart-row" gutter={16}>
          <Col  span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data1} scale={scale1}>
                <Tooltip />
                <Axis />
                <Bar position="year*sales" />
              </Chart>
            </div>
          </Col>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart  forceFit height={400} data={data2}>
                <Tooltip />
                <Axis />
                <Legend />
                <Bar position="月份*月均降雨量" color="name" adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]} />
              </Chart>
            </div>
          </Col>
        </Row>
        <Row className="chart-row" gutter={16}>
          <Col  span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data1}>
                <Coord type="rect" direction="LB" />
                <Tooltip />
                <Axis dataKey="year" label={{ offset: 12 }} />
                <Bar position="year*sales" />
              </Chart>
            </div>
          </Col>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data3}>
                <Coord type="rect" direction="LT" />
                <Tooltip />
                <Legend />
                <Axis dataKey="value" position="right" />
                <Axis dataKey="label" label={{ offset: 12 }} />
                <Bar position="label*value" color="type" adjust={[{ type: 'dodge', marginRatio: 1 / 32 }]} />
              </Chart>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
