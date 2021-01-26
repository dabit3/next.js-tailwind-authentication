import Input from './Input'
import SocialSignIn from './SocialSignIn'

function SignIn({
  setUiState, onChange, signIn
}) {
  return (
    <>
      <p className="text-3xl font-black">Sign in to your account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <label className="text-sm">
          Password
          <span
            onClick={() => setUiState('forgotPassword')}
            className="ml-8 sm:ml-48 text-pink-500"
          >Forgot your password?</span>
          </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button onClick={signIn} className="text-white w-full mt-6 bg-pink-600 p-3 rounded">
        Continue
      </button>
      <SocialSignIn />
      <p className="mt-12 text-sm font-light">
      Don't have an account?
        <span
          onClick={() => setUiState('signUp')}
          role="button"
          className="cursor-pointer text-pink-600"> Sign Up.</span>
    </p>
    </> 
  )
}

export default SignIn