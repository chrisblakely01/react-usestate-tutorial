import React, { useState } from 'react';

const App = (props) => {
	const [age, setAge] = useState(20);
	const [address, setAddress] = useState({
		addressLine1: '14 read road',
		town: 'react town',
	});

	const handleUpdateAll = () => {
		setAge(35);
		setAddress({
			addressLine1: 'new address',
			town: 'new town',
		});
	};

	//handling simple forms - username, password
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = () => {
		alert(`username: ${username} password: ${password}`);
		// validation, API calls etc
	};

	// conditional render - showing/hide a modal
	const [showText, setShowText] = useState(false);

	// working with lists - rendering a list people

	const [people, setPeople] = useState([
		{ name: 'chris', job: 'developer' },
		{ name: 'jenny', job: 'developer' },
		{ name: 'claire', job: 'developer' },
  ]);
  
  const addPerson = () => {
    setPeople([...people, { name: "Jim", job: "developer"}]);
  }

	return (
		<>
			<div>age: {age}</div>
			<button onClick={() => setAge((previousAge) => previousAge + 1)}>Increase age</button>
			<hr />
			<div>address line 1: {address.addressLine1}</div>
			<div>town: {address.town}</div>
			<div>
				<button onClick={() => setAddress({ addressLine1: 'new addresss', town: 'new town' })}>update address</button>
			</div>
			<hr />
			<div>
				<button onClick={handleUpdateAll}>Update all</button>
			</div>
			<hr />
			<form onSubmit={handleSubmit}>
				<input value={username} onChange={(event) => setUsername(event.target.value)}></input>
				<input value={password} onChange={(event) => setPassword(event.target.value)}></input>
				<button type='onSubmit'>Submit</button>
			</form>
			<hr />
			{showText ? <span>Hello I am a modal :)</span> : null}
			<div>
				<button onClick={() => setShowText(!showText)}>Toggle text</button>
			</div>
			<hr />
			{people.map((person) => (
				<div>
					{person.name} is a {person.job}
				</div>
			))}
      <button onClick={addPerson}>Add a person</button>
		</>
	);
};

export default App;
