import { combineReducers } from 'redux'

import heroes from './heroes'

const appReducers = combineReducers({
	heroes
})

export default appReducers
