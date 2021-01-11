import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	const [translated, setTranslated] = useState('');

	useEffect(() => {
		const doTranslation = async () => {
			const { data } = await axios.post(
				'https://translation.googleapis.com/language/translate/v2',
				{},
				{
					params: {
						q: text,
						target: language.value,
						key: 'AIzaSyAJ9TW84BIdqFnLM38jVfciaPRcgz5aJPI',
					},
				}
			);
			setTranslated(data.data.translations[0].translatedText);
		};
		doTranslation();
	}, [language, text]);

	return (
		<div>
			<h1 className="ui header">{translated}</h1>
		</div>
	);
};

export default Convert;
