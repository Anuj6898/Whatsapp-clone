import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth,provider } from './firebase'
import {actionTypes} from './reducer.js'
import { useStateValue } from './StateProvider.js'

function Login() {
    const [{}, dispatch] = useStateValue()

    const signIn =()=>{
         auth.signInWithPopup(provider)
         .then(result=> {
             dispatch({
                 type: actionTypes.SET_USER,
                 user: result.user
             })
         })
         .catch(error=> alert(error.message))
    }
    return (
        <div className="login">
            <div className="login_container">
            {/* <img src="" alt="Whatsapp" /> */}
            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 39 39"><path fill="#00E676" d="M10.7 32.8l.6.3c2.5 1.5 5.3 2.2 8.1 2.2 8.8 0 16-7.2 16-16 0-4.2-1.7-8.3-4.7-11.3s-7-4.7-11.3-4.7c-8.8 0-16 7.2-15.9 16.1 0 3 .9 5.9 2.4 8.4l.4.6-1.6 5.9 6-1.5z"></path><path fill="#FFF" d="M32.4 6.4C29 2.9 24.3 1 19.5 1 9.3 1 1.1 9.3 1.2 19.4c0 3.2.9 6.3 2.4 9.1L1 38l9.7-2.5c2.7 1.5 5.7 2.2 8.7 2.2 10.1 0 18.3-8.3 18.3-18.4 0-4.9-1.9-9.5-5.3-12.9zM19.5 34.6c-2.7 0-5.4-.7-7.7-2.1l-.6-.3-5.8 1.5L6.9 28l-.4-.6c-4.4-7.1-2.3-16.5 4.9-20.9s16.5-2.3 20.9 4.9 2.3 16.5-4.9 20.9c-2.3 1.5-5.1 2.3-7.9 2.3zm8.8-11.1l-1.1-.5s-1.6-.7-2.6-1.2c-.1 0-.2-.1-.3-.1-.3 0-.5.1-.7.2 0 0-.1.1-1.5 1.7-.1.2-.3.3-.5.3h-.1c-.1 0-.3-.1-.4-.2l-.5-.2c-1.1-.5-2.1-1.1-2.9-1.9-.2-.2-.5-.4-.7-.6-.7-.7-1.4-1.5-1.9-2.4l-.1-.2c-.1-.1-.1-.2-.2-.4 0-.2 0-.4.1-.5 0 0 .4-.5.7-.8.2-.2.3-.5.5-.7.2-.3.3-.7.2-1-.1-.5-1.3-3.2-1.6-3.8-.2-.3-.4-.4-.7-.5h-1.1c-.2 0-.4.1-.6.1l-.1.1c-.2.1-.4.3-.6.4-.2.2-.3.4-.5.6-.7.9-1.1 2-1.1 3.1 0 .8.2 1.6.5 2.3l.1.3c.9 1.9 2.1 3.6 3.7 5.1l.4.4c.3.3.6.5.8.8 2.1 1.8 4.5 3.1 7.2 3.8.3.1.7.1 1 .2h1c.5 0 1.1-.2 1.5-.4.3-.2.5-.2.7-.4l.2-.2c.2-.2.4-.3.6-.5s.4-.4.5-.6c.2-.4.3-.9.4-1.4v-.7s-.1-.1-.3-.2z"></path></svg>
            <div className="login_text">
                <h1>Sign in to WhatsApp</h1>
            </div>
                <Button onClick={signIn}><img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0xNy42NCA5LjIwNWMwLS42MzktLjA1Ny0xLjI1Mi0uMTY0LTEuODQxSDl2My40ODFoNC44NDRhNC4xNCA0LjE0IDAgMCAxLTEuNzk2IDIuNzE2djIuMjU5aDIuOTA4YzEuNzAyLTEuNTY3IDIuNjg0LTMuODc1IDIuNjg0LTYuNjE1eiIgZmlsbD0iIzQyODVGNCIgZmlsbC1ydWxlPSJub256ZXJvIj48L3BhdGg+PHBhdGggZD0iTTkgMThjMi40MyAwIDQuNDY3LS44MDYgNS45NTYtMi4xOGwtMi45MDgtMi4yNTljLS44MDYuNTQtMS44MzcuODYtMy4wNDguODYtMi4zNDQgMC00LjMyOC0xLjU4NC01LjAzNi0zLjcxMUguOTU3djIuMzMyQTguOTk3IDguOTk3IDAgMCAwIDkgMTh6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iPjwvcGF0aD48cGF0aCBkPSJNMy45NjQgMTAuNzFBNS40MSA1LjQxIDAgMCAxIDMuNjgyIDljMC0uNTkzLjEwMi0xLjE3LjI4Mi0xLjcxVjQuOTU4SC45NTdBOC45OTYgOC45OTYgMCAwIDAgMCA5YzAgMS40NTIuMzQ4IDIuODI3Ljk1NyA0LjA0MmwzLjAwNy0yLjMzMnoiIGZpbGw9IiNGQkJDMDUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjxwYXRoIGQ9Ik05IDMuNThjMS4zMjEgMCAyLjUwOC40NTQgMy40NCAxLjM0NWwyLjU4Mi0yLjU4QzEzLjQ2My44OTEgMTEuNDI2IDAgOSAwQTguOTk3IDguOTk3IDAgMCAwIC45NTcgNC45NThMMy45NjQgNy4yOUM0LjY3MiA1LjE2MyA2LjY1NiAzLjU4IDkgMy41OHoiIGZpbGw9IiNFQTQzMzUiIGZpbGwtcnVsZT0ibm9uemVybyI+PC9wYXRoPjxwYXRoIGQ9Ik0wIDBoMTh2MThIMHoiPjwvcGF0aD48L2c+PC9zdmc+" height="20" width="20" />Sign In With Google</Button>
            </div>            
        </div>
    )
}

export default Login
