import React, { useEffect } from 'react';
import Card from './components/Card';
import { getResources } from './api';

function App() {
	useEffect(() => {
		(async () => {
			const allResources = await getResources();
			console.log(allResources);
		})();
	}, []);

	return (
		<div>
			<Card />
		</div>
	);
}

export default App;
