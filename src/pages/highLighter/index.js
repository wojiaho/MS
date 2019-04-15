import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';


class Code extends React.Component {
  render() {
      return <SyntaxHighlighter showLineNumbers={true}
                                startingLineNumber = {0}
                                language={this.props.lang} 
                                style={dark} 
                                lineNumberStyle={{color: '#ddd', fontSize: 20}}
                                wrapLines={true}
                                lineProps={(num) => {console.log(num)} }>
                  {this.props.children.replace(/^\s+|\s+$/g, '')}
             </SyntaxHighlighter>
  }
}


export default class HighLighter extends React.Component {
  render() {
    return (
      <Code lang='jsx'>
        {`
          let codeInsertScript = <Code lang="js">{\`
          (function(d) {
              var wfAD = d.createElement('script'), sAD = d.scripts[0];
              wfAD.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';
              wfAD.async = true;
              sAD.parentNode.insertBefore(wfAD, sAD);
          })(document);
          \`}</Code>
        `}
      </Code>
    )
  }
}