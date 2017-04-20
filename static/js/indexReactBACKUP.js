axios.get("http://127.0.0.1:8000/band/api/1/?format=json")
  .then(function(result) {
    // we got it!
  });

var bands = [
    {name: "Muse", image: "http://muse.mu/ugc-1/themes/band/band-1.jpg?5"},
    {name: "Snoop Dogg", image: "http://gazettereview.com/wp-content/uploads/2017/01/snoop-dogg.jpg"},
    {name: "Pavlov Stelar", image: "http://cps-static.rovicorp.com/3/JPG_400/MI0003/858/MI0003858554.jpg?partner=allrovi.com"},
];

// A show of state on our django template
var BandComponent = React.createClass({
    getInitialState: function () {
        return {
            customText: "You haven't clicked yet"
        }
    },
    customClickFunction: function () {
        this.setState({customText: "You clicked the button"});
    },
    render: function () {
        var testStyle = { fontSize: '18px', marginRight: '20px'};
        return (
            <div style={testStyle}>
                <h1>{this.state.customText}</h1>
                <button onClick={this.customClickFunction}>Click Me!!</button>
                {this.props.bands.map(function (band) {
                    return (
                        <Band name={band.name} image={band.image} />
                    )
                })}

            </div>
        )
    }
});

// Our band component which renders title and image
var Band = React.createClass({
   render: function () {
       return (
           <div>
               <h2>{this.props.name}</h2>
               <img src={this.props.image} />
           </div>
       )
   } 
});

// Passing in the data as a prop
ReactDOM.render(
    <BandComponent bands={bands} />,
    document.getElementById("content")
);
