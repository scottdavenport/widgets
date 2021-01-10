import React, { useState } from 'react';
import Dropdown from './Dropdown';

const options = [
	{
		label: 'Afrikaans',
		value: 'af',
	},
	{
		label: 'Arabic',
		value: 'ar',
	},
	{
		label: 'Hindi',
		value: 'hi',
	},
];

const label = 'Select a Language';

const Translate = () => {
	const [language, setLanguage] = useState(options[0]);

	return (
		<div>
			<Dropdown selected={language} onSelectedChange={setLanguage} options={options} label={label} />
		</div>
	);
};

export default Translate;
