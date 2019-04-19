import React from 'react';
import Code from './code';

export default class HighLighter extends React.Component {
  render() {
    return (
      <Code lang="jsx">
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
    );
  }
}
