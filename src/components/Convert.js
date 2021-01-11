import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Convert = ({ language, text }) => {
	useEffect(() => {
		axios.post(
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
	}, [language, text]);

	return <div />;
};

export default Convert;
