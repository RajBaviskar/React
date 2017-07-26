const Card = (props) => {
	return (
  	<div>
      <img width="75" src={props.pic} />
      <div style = {{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}> Name -: {props.Name}</div>
        <div> Company Name -: {props.companyName}</div>
      </div>
    </div>
  );
};

const CardList = (props) => {
return (
	<div>
      {props.cards.map(card => <Card {...card} />)}
  </div>
	);
}

class Form extends React.Component {
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log('Event: Form Submit',this.state.userNameInput.value)
    axios.get('https://api.github.com/users/${this.userNameInput.value}')
  };
  
	render(){
  return(
  	<form onSubmit={this.handleSubmit}>
      <input type = "text" 
      ref = {(input) => this.userNameInput = input}
      placeholder = "Github username"  />
      <button type = "submit" > Add card </button>
    </form>
    );
  }
}

class App extends React.Component {
state = {
cards: [
	{
  Name: "Rajesh",
  pic: "https://avatars2.githubusercontent.com/u/7086440?v=4",
  companyName: "Cerner"
  },
  {
  Name: "Ragnar",
  pic: "https://avatars2.githubusercontent.com/u/42749?v=4",
  companyName: "Vikings"
  },
]
};

addNewCard = (cardInfo) => {
console.log(cardInfo);
}

	render(){
  	return(
    	<div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards = {this.state.cards} />
      </div>
    );
  }
}


ReactDOM.render(<App />, mountNode);
