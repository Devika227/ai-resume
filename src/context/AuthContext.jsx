import { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export function AuthProvider({ children }) {
	const [user, setUser] = useState(null)
	const nav = useNavigate()

	function login({ email }) {
		setUser({ email })
		nav('/dashboard')
	}

	function register({ email }) {
		setUser({ email })
		nav('/dashboard')
	}

	function logout() {
		setUser(null)
		nav('/login')
	}

	return (
		<AuthContext.Provider value={{ user, login, register, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth() {
	return useContext(AuthContext)
}

export default AuthContext

