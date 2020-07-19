import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';
import Card from './components/Card/Card';
//import Footer from './components/Footer/Footer';

const initialMd = `# Hello! 
## Welcome to my markdown previewer

[Google](https://www.google.com/)

Here is a list:
- list element
- list element

this is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~

Head 1 | Head 2 | Head 3
------ |--------| ------
item1 | item2 | item3
item4 | item5 | item6
item7 | item8 | item9

> example of blockquote

Inline \`code\`

\`\`\`
// code block

function sum (x, y) {
  return x + y;
}
\`\`\`
`;

class App extends Component {
  state = {
    markdownValue: initialMd
  };

  handleChange = e => {
    this.setState({
      markdownValue: e.target.value
    });
  };

  render() {
    const { markdownValue } = this.state;

    return (
      <div className="App">
        <h1 className="App-title">Markdown Previewer</h1>
        <main className="App-content">
          <Card title="Editor">
            <Editor
              onChange={this.handleChange}
              markdownValue={markdownValue}
            />
          </Card>
          <Card title="Preview">
            <Preview markdownValue={markdownValue} />
          </Card>
        </main>
      </div>
    );
  }
}

export default App;
