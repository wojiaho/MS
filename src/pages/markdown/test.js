import React from 'react';
import ReactMarkdown from 'react-markdown';

const content = `# This is a header\n\nAnd this is a paragraph\n\n # 测试\n\n  <a href="https://en.wikipedia.org/wiki/HTML">HTML</a> \n\n
 <div>测试代码块</div>`;
export default class HighLighter extends React.Component {
  render() {
    return (
      <ReactMarkdown 
        source={content} 
        escapeHtml={true} 
        skipHtml={false} 
        sourcePos={true}
        rawSourcePos={true}
        includeNodeIndex={true}
      />
    );
  }
}