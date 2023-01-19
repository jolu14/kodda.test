/**
 * Context tu handle teh information of the authenticated user, after a token validation or a login
 * 
 */


import * as React from 'react'



type Action =
  {type: 'logout'} | 
  {type: 'validate'} | 
  {type:"success login", value:{ email:string, firstName:string, lastName:string, token:string, image:string }}


type Dispatch = (action: Action) => void
type State = {user: {firstName:string, lastName:string, email:string, token:string, image:string,}}
type UserProviderProps = {children: React.ReactNode}


const UserStateContext = React.createContext<{state: State; dispatch: Dispatch} | undefined>(undefined)
const defaultState : State= {
  user:{
    firstName:"", 
    lastName:"",
    email:"",
    token:"",
    image:""
  }

}


function userReducer(state: State, action: Action): State {
    switch (action.type) {
      case 'success login': {
        return {...state, user: action.value}
      }
      case 'logout': {
        
        return defaultState
      }
      default: {
        throw new Error(`Unhandled action type: ${action.type}`)
      }
    }
}
  
function UserProvider({children}: UserProviderProps) {
    const [state, dispatch] = React.useReducer(userReducer, defaultState)
    
    const value = {state, dispatch}

    return (
      <UserStateContext.Provider value={value}>
        {children}
      </UserStateContext.Provider>
    )
}
  

function useUser() {
  const context = React.useContext(UserStateContext)
  if (context === undefined) {
      throw new Error('useUser must be used within a UserProvider')
  }
  return context
  }
  

export { UserProvider, useUser }