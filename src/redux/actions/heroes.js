import * as types from './types'

import API from '../../api'

export const fetchHeroes = () => {
	// thunk is used here
	return (dispatch) => {
		API.get('/heroes')
			.then((response) => {
				dispatch(setHeroes(response.data))
			})
			.catch((err) => {
				console.error(err)
				alert('Error!')
			})
	}
}

// if success, fill the array
export const setHeroes = (heroes) => {
	return {
		type: types.SET_HEROES,
		heroes
	}
}
