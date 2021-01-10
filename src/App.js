import React, { useState } from 'react';
// import Accordion from './components/Accordion';
// import Search from './components/Search';

import Translate from './components/Translate';

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
	return (
		<div>
			<Translate />
		</div>
	);
};
