import '../configureAmplify'
import { useEffect, useState } from 'react'
import { Auth } from 'aws-amplify'
import SignIn from '../components/SignIn'
import SignUp from '../components/SignUp'
import Profile from '../components/Profile'
import ForgotPassword from '../components/ForgotPassword'
import ForgotPasswordSubmit from '../components/ForgotPasswordSubmit'
import ConfirmSignUp from '../components/ConfirmSignUp'

function App() {
  const [uiState, setUiState] = useState(null)
  const [formState, setFormState] = useState({
    email: '', password: '', authCode: ''
  })
  const { email, password, authCode } = formState
  useEffect(() => {
    checkUser()
  }, [])
  async function checkUser() {
    console.log('checking user...')
    try {
      setUiState('loading')
      await Auth.currentAuthenticatedUser()
      setUiState('signedIn')
    } catch(err) {
      setUiState('signIn')
    }
  }
  function onChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value })
  }
  async function signUp() {
    try {
      await Auth.signUp({ username: email, password, attributes: { email }})
      setUiState('confirmSignUp')
    } catch (err) { console.log({ err })}
  }
  async function confirmSignUp() {
    try {
      await await Auth.confirmSignUp(email, authCode)
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}

  }
  async function signIn() {
    try {
      await Auth.signIn(email, password)
      setUiState('signedIn')
    } catch (err) { console.log({ err })}
  }
  async function forgotPassword() {
    try {
      await Auth.forgotPassword(email)
      setUiState('forgotPasswordSubmit')
    } catch (err) { console.log({ err}) }
  }
  async function forgotPasswordSubmit() {
    await Auth.forgotPasswordSubmit(email, authCode, password)
    setUiState('signIn')
  }
  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="flex flex-col items-center">
          <div className="max-w-full sm:w-540 mt-14">
            <div className="mb-8">
              <p className="text-2xl tracking-tight font-semibold pl-4">amplify</p>
            </div>
            <div className="bg-white py-14 px-16 shadow-form rounded">
              {
                !uiState || uiState === 'loading' && <p className="font-bold">Loading ...</p>
              }
              {
                uiState === 'signedIn' && (
                  <Profile
                    setUiState={setUiState}
                    onChange={onChange}
                  />
                )
              }
              {
                uiState === 'signUp' && (
                  <SignUp
                    setUiState={setUiState}
                    onChange={onChange}
                    signUp={signUp}
                  />
                )
              }
              {
                uiState === 'confirmSignUp' && (
                  <ConfirmSignUp
                    setUiState={setUiState}
                    onChange={onChange}
                    confirmSignUp={confirmSignUp}
                  />
                )
              }
              {
                uiState === 'signIn' && (
                  <SignIn
                    setUiState={setUiState}
                    onChange={onChange}
                    signIn={signIn}
                  />
                )
              }
              {
                uiState === 'forgotPassword' && (
                  <ForgotPassword 
                    setUiState={setUiState}
                    onChange={onChange}
                    forgotPassword={forgotPassword}
                  />
                )
              }
              {
                uiState === 'forgotPasswordSubmit' && (
                  <ForgotPasswordSubmit
                    setUiState={setUiState}
                    onChange={onChange}
                    forgotPasswordSubmit={forgotPasswordSubmit}
                  />
                )
              }
            </div>
          </div>
        </div>
    </div>
  );
}

export default App;
