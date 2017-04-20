class ItemLister extends React.Component {
	constructor() {
  	super();
 		 this.state={items:[]};
  }
  componentDidMount(){
  	fetch(`http://127.0.0.1:8000/band/api/1/?format=json`)
        .then(result=>result.json())
        .then(newItem => this.setState((prevState, props) => {
      return { items: [...prevState.items, newItem] };
    }))
  }
  render() {
  	return(
    	<ul>
          {this.state.items.length ?
          	this.state.items.map(item=><li key={item.id}>{item.name}{item.bio}</li>)
            : <li>Loading...</li>
          }
      </ul>
   )
  }
}

ReactDOM.render(
  <ItemLister />,
  document.getElementById('container')
);
