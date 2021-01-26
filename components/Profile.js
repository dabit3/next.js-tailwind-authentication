import { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
 
function Profile({ setUiState }) {
  const [user, setUser] = useState(null)
  useEffect(() => {
    checkUser()
  }, [])
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser()
    setUser(user.attributes)
  }
  if (!user) return null
  return (
    <>
     <p className="text-xl font-black">Welcome, {user.email}</p>
     <button
        onClick={() => { Auth.signOut(); setUiState('signIn') }}
        className="text-white w-full mt-10 bg-pink-600 p-3 rounded">Sign Out
      </button>
    </> 
  )
}

export default Profile