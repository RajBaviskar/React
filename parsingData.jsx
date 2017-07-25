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

let data = [
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
];

const CardList = (props) => {
return (
	<div>
      {props.cards.map(card => <Card {...card} />)}
  </div>
	);
}

ReactDOM.render(<CardList  cards={data} />, mountNode);
