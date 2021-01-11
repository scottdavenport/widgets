import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
	const [term, setTerm] = useState('programming');
	const [debouncedTerm, setDebouncedTerm] = useState(term);
	const [results, setResults] = useState([]);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedTerm(term);
		}, 1000);

		return () => {
			clearTimeout(timerId);
		};
	}, [term]);

	useEffect(() => {
		const search = async () => {
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: debouncedTerm,
				},
			});

			setResults(data.query.search);
		};
		search();
	}, [debouncedTerm]);

	const renderedResults = results.map((result) => {
		return (
			<div className="ui">
				<div key={result.pageid} className="item">
					<table className="ui celled table">
						<thead>
							<tr>
								<th>{result.title}</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td data-label="Name">
									<span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
								</td>
								<td data-label="Name">
									<a className="ui button" href={`https://en.wikipedia.org?curid=${result.pageid}`}>
										Go
									</a>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		);
	});

	return (
		<div>
			<div className="ui form input">
				<div className="ui icon input">
					<input
						style={{ width: '500px' }}
						className="ui input text"
						value={term}
						onChange={(e) => setTerm(e.target.value)}
					/>
					<i className="search icon"></i>
				</div>
			</div>
			<div className="ui celled list">{renderedResults}</div>
		</div>
	);
};

export default Search;
