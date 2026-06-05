import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(() => {
		try {
			const stored = localStorage.getItem('theme')
			return stored === 'dark' ? 'dark' : 'light'
		} catch {
			return 'light'
		}
	})

	useEffect(() => {
		const root = document.documentElement
		const body = document.body
		const darkMode = theme === 'dark'
		root.classList.toggle('dark', darkMode)
		body.classList.toggle('dark', darkMode)
		try { localStorage.setItem('theme', theme) } catch {}
	}, [theme])

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export function useTheme() {
	return useContext(ThemeContext)
}

export default ThemeContext

