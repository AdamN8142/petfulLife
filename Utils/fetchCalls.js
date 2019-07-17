export const fetchData = (url) => {
	return fetch(url)
		.then(response => {
			if(!response.ok) {
				throw Error('Error fetching data')
			} else {
				return response.json()
			}
		})
}

