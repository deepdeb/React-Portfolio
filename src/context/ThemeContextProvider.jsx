import React, { createContext, useEffect, useState } from 'react'
export const ThemeContext = createContext()

const ThemeContextProvider = ({ children }) => {
    const [theme, setTheme] = useState('dark')

    useEffect(() => {
        // if (theme == 'dark') {
        //     document.documentElement.classList.add('dark')
        // } else {
        //     document.documentElement.classList.remove('dark')
        // }
        document.documentElement.dataset.theme = theme;
    }, [theme])

    const toggleTheme = () => {
        setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider