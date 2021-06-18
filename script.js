const initial = ` 
# Markdown Previewer
## By Srinidhi

###Links

[google](https://www.google.com "Search Engine")

###List

- list item 1
- list item 2
- list item 3

**bold**

### Images
![Galaxy](https://www.shutterstock.com/image-illustration/panorama-distant-planet-system-space-during-1107361055)

### Block Quote

> Some Infinities Are Bigger Than Other Infinities

### Code

\`npm run dev \`

### Code Block

\`\`\`
function hello(name){
  return "Hello" + " " + name
}
\`\`\`
`;
marked.setOptions({
  breaks: true });


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      preview: initial };

    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      preview: event.target.value });

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("textarea", { id: "editor", type: "text", value: this.state.preview, onChange: this.handleChange }), /*#__PURE__*/
      React.createElement("div", { id: "preview", dangerouslySetInnerHTML: { __html: marked(this.state.preview) } })));

  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));