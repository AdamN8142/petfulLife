export const fetchData = (url) => {
	return fetch(url)
		.then(response => {
			console.log('hello out there friends')
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

export const fetchPatch = (url, options) => {
	return fetch(url, options)
		.then(response => {
			if(response.status !== 202) {
				throw Error('Error patching data')
			} else {
				return response	
			}
		})
}

