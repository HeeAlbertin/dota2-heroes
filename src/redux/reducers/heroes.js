import * as types from '../actions/types'

const heroes = (state = [], action) => {
	switch (action.type) {
		case types.SET_HEROES:
			return action.heroes
		default:
			return state
	}
}

export default heroes
