import Input from './Input'

function FogotPasswordSubmit({ setUiState, onChange, forgotPasswordSubmit }) {
  return (
    <>
      <p className="text-3xl font-black">Reset password</p>
      <div className="mt-10">
        <label className="text-sm">Confirmation Code</label>
        <Input onChange={onChange} name="authCode" />
      </div>
      <div className="mt-6">
        <label className="text-sm">
          New Password
        </label>
        <Input type="password" name="password" onChange={onChange} />
      </div>
      <button
        onClick={() => forgotPasswordSubmit()}
        className="text-white w-full mt-4 bg-pink-600 p-3 rounded">
        Continue
      </button>
      <button
      onClick={() => setUiState('signIn')}
      className="text-sm mt-6 text-pink-500">Cancel</button>
    </> 
  )
}

export default FogotPasswordSubmit