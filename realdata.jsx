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
  name: "Rajesh",
  pic: "",
  Company: "Cerner"
  },
  {
  name: "Ragnar",
  pic: "",
  Company: "Vikings"
  },
];

const CardList = (props) => {
return (
	<div>
    <Card 
    Name="Rajesh"
    pic="https://avatars2.githubusercontent.com/u/7086440?v=4"
    companyName="Cerner"
    />
  </div>
	);
}

ReactDOM.render(<CardList />, mountNode);
