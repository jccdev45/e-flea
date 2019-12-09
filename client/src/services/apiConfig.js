const JwtToken = localStorage.getItem('token') || null

const api = Axios.create({
	baseURL: apiUrl,
	headers: {
		Authorization: `Bearer ${JwtToken}`,
		'Access-Control-Allow-Origin': '*'
	}
})