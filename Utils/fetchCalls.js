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

export const fetchPost = (url, options) => {
	return fetch(url, options)
		.then(response => {
			if(!response.ok) {
				throw Error('Error posting data')
			} else {
				return response.json()	
			}
		})
}
