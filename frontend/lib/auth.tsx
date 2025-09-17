"use client"

import { createContext, useContext, useState, useEffect, ReactNode } from "react"

interface User {
  id: string
  name: string
  email: string
}

interface AuthContextType {
  user: User | null
  signin: (email: string, password: string) => Promise<boolean>
  signup: (name: string, email: string, password: string) => Promise<boolean>
  signout: () => void
  loading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const savedUser = localStorage.getItem("astitva_user")
    if (savedUser) setUser(JSON.parse(savedUser))
    setLoading(false)
  }, [])

  const signin = async (email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate API call
      const users = JSON.parse(localStorage.getItem("astitva_users") || "[]")
      const existingUser = users.find((u: any) => u.email === email && u.password === password)
      if (existingUser) {
        const userData = { id: existingUser.id, name: existingUser.name, email: existingUser.email }
        setUser(userData)
        localStorage.setItem("astitva_user", JSON.stringify(userData))
        setLoading(false)
        return true
      }
      setLoading(false)
      return false
    } catch {
      setLoading(false)
      return false
    }
  }

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setLoading(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000))
      const users = JSON.parse(localStorage.getItem("astitva_users") || "[]")
      const existingUser = users.find((u: any) => u.email === email)
      if (existingUser) {
        setLoading(false)
        return false
      }

      const newUser = { id: Date.now().toString(), name, email, password }
      users.push(newUser)
      localStorage.setItem("astitva_users", JSON.stringify(users))
      const userData = { id: newUser.id, name: newUser.name, email: newUser.email }
      setUser(userData)
      localStorage.setItem("astitva_user", JSON.stringify(userData))
      setLoading(false)
      return true
    } catch {
      setLoading(false)
      return false
    }
  }

  const signout = () => {
    setUser(null)
    localStorage.removeItem("astitva_user")
  }

  return <AuthContext.Provider value={{ user, signin, signup, signout, loading }}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within AuthProvider")
  return context
}
