import React from 'react';

const Link = ({ className, href, children }) => {
	const onClick = (event) => {
		// prevents a full page reload
		event.preventDefault();
		window.history.pushState({}, '', href);

		// communicates to components the route has changed
		const navEvent = new PopStateEvent('popstate');
		window.dispatchEvent(navEvent);
	};

	return (
		<a onClick={onClick} className={className} href={href}>
			{children}
		</a>
	);
};

export default Link;
