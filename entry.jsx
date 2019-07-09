
ReactDOM.render(
    <Clock />,
    document.getElementById("root")
);
const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

ReactDOM.render(
    <Tabs panes={panes} />,
    document.getElementById("root")
);
