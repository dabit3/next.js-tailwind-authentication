import Input from './Input'

function SignUp({
  setUiState, signUp, onChange
}) {
  return (
    <>
      <p className="text-3xl font-black">Sign up for an account</p>
      <div className="mt-10">
        <label className="text-sm">Email</label>
        <Input onChange={onChange} name="email" />
      </div>
      <div className="mt-7">
        <p className="text-sm">
          Password
          <span
            className="ml-8 sm:ml-48 text-pink-500"
          >Forgot your password?</span>
          </p>
        <Input name="password" onChange={onChange} type="password" />
      </div>
      <button
        onClick={signUp}  
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded">
        Continue
      </button>
      <p className="mt-12 text-sm font-light">
      Already have an account?
        <span
          className="cursor-pointer text-pink-600"
          onClick={() => setUiState('signIn')}
        > Sign In.</span>
    </p>
    </> 
  )
}

export default SignUp