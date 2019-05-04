import React from 'react';
import { Button, Modal } from 'antd';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';

import './index.less';


export default class Editor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState('111'),
    visible: false,
  }

  setEditorContent = () => {
    this.setState({
      editorState: BraftEditor.createEditorState('这是我设置的富文本的内容'),
    });
  }

  getEditorContent = () => {
    this.setState({ visible: true });
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState });
  }

  render() {
    const { editorState } = this.state;
    return (
      <div className="content-wrap">
        <Button className="btn" type="primary" onClick={this.setEditorContent}>设置富文本内容</Button>
        <Button className="btn" type="primary" onClick={this.getEditorContent}>获取富文本内容</Button>
        <BraftEditor
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
        />
        <Modal
          title="富文本内容"
          visible={this.state.visible}
          onOk={() => { this.setState({ visible: false }); }}
          onCancel={() => { this.setState({ visible: false }); }}
        >
          <p>
            { this.state.editorState.toHTML() }
          </p>
        </Modal>
      </div>
    );
  }
}
