import React, { useState } from 'react';
import Accordion from './components/Accordion';
import Dropdown from './components/Dropdown';
import Search from './components/Search';
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

const showAccordion = () => {
	if (window.location.pathname === '/') {
		return <Accordion items={items} />;
	}
};

const showList = () => {
	if (window.location.pathname === '/list') {
		return <Search />;
	}
};

const showDropdown = () => {
	if (window.location.pathname === '/dropdown') {
		return <Dropdown />;
	}
};

const showTranslate = () => {
	if (window.location.pathname === '/translate') {
		return <Translate />;
	}
};

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
	return (
		<div>
			{showAccordion()}
			{showList()}
			{showDropdown()}
			{showTranslate()}
		</div>
	);
};
