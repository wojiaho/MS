import React from 'react';
import { Chart, Tooltip, Axis, Legend, Pie, Coord, Sector } from 'viser-react';
import { Row, Col } from 'antd';
import './index.less';

const DataSet = require('@antv/data-set');

const sourceData = [
  { item: '事例一', count: 40 },
  { item: '事例二', count: 21 },
  { item: '事例三', count: 17 },
  { item: '事例四', count: 13 },
  { item: '事例五', count: 9 },
];

const scale = [{
  dataKey: 'percent',
  min: 0,
  formatter: '.0%',
}];
const dv = new DataSet.View().source(sourceData);
dv.transform({
  type: 'percent',
  field: 'count',
  dimension: 'item',
  as: 'percent',
});
const data = dv.rows;

const data2 = [
  { year: '2001', population: 41.8 },
  { year: '2002', population: 38 },
  { year: '2003', population: 33.7 },
  { year: '2004', population: 30.7 },
  { year: '2005', population: 25.8 },
  { year: '2006', population: 31.7 },
  { year: '2007', population: 33 },
  { year: '2008', population: 46 },
  { year: '2009', population: 38.3 },
  { year: '2010', population: 28 },
  { year: '2011', population: 42.5 },
  { year: '2012', population: 30.3 },
];

export default class PieChart extends React.Component {
  render() {
    return (
      <div>
        <Row className="chart-row" gutter={16}>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data} scale={scale}>
                <Tooltip showTitle={false} />
                <Coord type="theta" />
                <Axis />
                <Legend dataKey="item" />
                <Pie
                  position="percent"
                  color="item"
                  style={{ stroke: '#fff', lineWidth: 1 }}
                  label={['percent', {
                    formatter: (val, item) => {
                      return `${item.point.item}: ${val}`;
                    },
                  }]}
                />
              </Chart>
            </div>
          </Col>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data} scale={scale}>
                <Tooltip showTitle={false} />
                <Axis />
                <Legend dataKey="item" />
                <Coord type="theta" />
                <Pie
                  position="percent"
                  color="item"
                  style={{ stroke: '#fff', lineWidth: 1 }}
                  label={['percent', {
                    offset: -40,
                    textStyle: {
                      rotate: 0,
                      textAlign: 'center',
                      shadowBlur: 2,
                      shadowColor: 'rgba(0, 0, 0, .45)',
                    },
                  }]}
                />
              </Chart>
            </div>
          </Col>
        </Row>
        <Row className="chart-row" gutter={16}>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data} scale={scale}>
                <Tooltip showTitle={false} />
                <Axis />
                <Legend dataKey="item" />
                <Coord type="theta" radius={0.75} innerRadius={0.6} />
                <Pie
                  position="percent"
                  color="item"
                  style={{ stroke: '#fff', lineWidth: 1 }}
                  label={['percent', {
                    formatter: (val, item) => {
                      return `${item.point.item}: ${val}`;
                    },
                  }]}
                />
              </Chart>
            </div>
          </Col>
          <Col span={12}>
            <div className="chart-wrap">
              <Chart forceFit height={400} data={data2}>
                <Tooltip />
                <Legend position="right" dataKey="year" offsetX={-140} />
                <Coord type="polar" />
                <Sector position="year*population" color="year" style={{ stroke: '#fff', lineWidth: 1 }} />
              </Chart>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}
