const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

function Root() {
  return(
    <div>
      <Clock />
      <Weather />
      <div className='interactive'>
        <Tabs panes={panes} />
        <AutoComplete names={names} />
      </div>
    </div>
  );
}

  ReactDOM.render(<Root/>, document.getElementById('root'));
