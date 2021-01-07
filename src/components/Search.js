import React, { useState, useEffect } from 'react';

const Search = () => {
	const [term, setTerm] = useState('');

	console.log('I RUN WITH EVERY RENDER');

	useEffect(() => {
		console.log('I ONLY RUN AFTER EVERY RENDER AND AT INITIAL RENDER');
	});

	return (
		<div className="ui form">
			<div className="field">
				<label>Enter Search Term</label>
				<input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
			</div>
		</div>
	);
};

export default Search;
