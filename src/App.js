import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
import Translate from './components/Translate';
import Route from './components/Route';

// manually created array
// eslint-disable-next-line no-unused-vars
const items = [
	{
		title: 'What is React?',
		content: 'A front end JS framework',
	},
	{
		title: 'Why use React?',
		content: 'React is a favorite JS library among engineers',
	},
	{
		title: 'How do you use React?',
		content: 'You use React by creating components',
	},
];

const options = [
	{
		label: 'The Color Red',
		value: 'red',
	},
	{
		label: 'The Color Green',
		value: 'green',
	},
	{
		label: 'A shade of Blue',
		value: 'blue',
	},
];

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	const [selected, setSelected] = useState(options[0]);

	return (
		<div>
			<Route path="/">
				<Accordion items={items} />
			</Route>
			<Route path="/list">
				<Search />
			</Route>
			<Route path="/dropdown">
				<Dropdown label="Select a color" options={options} selected={selected} onSelectedChange={setSelected} />
			</Route>
			<Route path="/translate">
				<Translate />
			</Route>
		</div>
	);
};
