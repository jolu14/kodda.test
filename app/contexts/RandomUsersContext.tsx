import * as React from 'react'
import API from '../utils/API'


type User = {
    id:string,
    email:string, 
    gender:string,
    name: {
      title: string,
      first: string,
      last: string,
    },
    dob: {
      age: number
    },
    picture: {
      large: string,
      medium: string,
      thumbnail: string
    },
}

type Action = {type: 'set users', value:any} 
type Dispatch = (action: Action) => void
type State = {users: User[]}
type RandomUsersProviderProps = {children: React.ReactNode}

const RandomUsersStateContext = React.createContext<{state: State; dispatch: Dispatch} | undefined>(undefined)




function userRandomReducer(state: State, action: Action) {
    switch (action.type) {
      case 'set users': {
        return {...state, users: action.value}
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}
  
function RandomUsersProvider({children}: RandomUsersProviderProps) {
    const [state, dispatch] = React.useReducer(userRandomReducer, {users: []})
    const value = {state, dispatch}
    return (
      <RandomUsersStateContext.Provider value={value}>
        {children}
      </RandomUsersStateContext.Provider>
    )
}
  
function useRadomUsers() {
  const context = React.useContext(RandomUsersStateContext)
  if (context === undefined) {
      throw new Error('useRadomUsers must be used within a RandomUsersProvider')
  }
  return context
}

export {RandomUsersProvider, useRadomUsers}