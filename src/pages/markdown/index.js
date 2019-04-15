import React from 'react';
import { Row, Col } from 'antd';
import ReactMarkdown from 'react-markdown';
import './index.less';

export default class MarkDown extends React.Component {
  state = {
    content: '请在这里输入markdown'
  }
  render() {
    return (
      <Row gutter={16}>
        <Col span={12}>
          <textarea value={this.state.content}  onChange={e => this.setState({ content: e.target.value })}></textarea>
        </Col>
        <Col span={12}>
          <ReactMarkdown className="markdown-wrap" source={this.state.content} 
          escapeHtml={true} 
          skipHtml={false} 
          sourcePos={true}
          rawSourcePos={true}
          includeNodeIndex={true}
          />
        </Col>
      </Row>
    )
  }
}