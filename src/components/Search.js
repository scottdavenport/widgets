import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [results, setResults] = useState([]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});

			setResults(data.query.search);
		};

		if (term && !results.length) {
			search();
		} else {
			const timeoutId = setTimeout(() => {
				if (term) {
					search();
				}
			}, 1000);

			console.log('Initial rendering or re-rendering');

			// everything is run initially
			// below is the clean-up function that is set on
			// first render.  It will be run before any other code
			// on the next rendering of component.
			return () => {
				clearTimeout(timeoutId);
				console.log('CLEANUP');
			};
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [term]);

	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
						Go
					</a>
				</div>
				<div className="content">
					<div className="header">{result.title}</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input className="input" value={term} onChange={(e) => setTerm(e.target.value)} />
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
