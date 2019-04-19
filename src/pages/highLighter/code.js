import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import PropTypes from 'prop-types';

export default class Code extends React.Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
  }

  render() {
    return (
      <SyntaxHighlighter
        showLineNumbers
        startingLineNumber={0}
        language={this.props.lang}
        style={dark}
        lineNumberStyle={{ color: '#ddd', fontSize: 20 }}
        wrapLines
        lineProps={(num) => { console.log(num); }}
      >
        {this.props.children.replace(/^\s+|\s+$/g, '')}
      </SyntaxHighlighter>
    );
  }
}
