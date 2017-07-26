const Card = (props) => {
	return (
  	<div>
      <img width="75" src={props.avatar_url} />
      <div style = {{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}> Name -: {props.name}</div>
        <div> Company Name -: {props.company}</div>
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
	state = {userName: '' }
	handleSubmit = (event) => {
  	event.preventDefault();
    console.log('Event: Form Submit', this.state.userName)
    axios.get('https://api.github.com/users/${this.state.userName}')
    .then(resp => {
    	//Console.log(resp); 
      this.props.onSubmit(resp.data);
    });
  };
  
	render(){
  return(
  	<form onSubmit={this.handleSubmit}>
      <input type = "text" 
      value={this.state.userName}
      onChange={(event) => this.setState({ userName: event.target.value })}
      placeholder="Github username"  required/>
      <button type="Submit">Add card</button>
    </form>
    );
  }
}

class App extends React.Component {
state = {
cards: [
	{
  name: "Rajesh",
  avatar_url: "https://avatars2.githubusercontent.com/u/7086440?v=4",
  company: "Cerner"
  },
  {
  name: "Ragnar",
  avatar_url: "https://avatars2.githubusercontent.com/u/42749?v=4",
  company: "Vikings"
  },
]
};

addNewCard = (cardInfo) => {
//console.log(cardInfo);
	 this.setState(prevState => ({
	 cards: prevState.cards.concat(cardInfo)
	 }));
}; 

	render(){
  	return(
    	<div>
        <Form onSubmit={this.addNewCard}/>
        <CardList cards={this.state.cards} />
      </div>
    );
  }
}

ReactDOM.render(<App />, mountNode);
