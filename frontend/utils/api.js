const BASE_URL = "http://localhost:5000/api"

export const saveToken = (token) => localStorage.setItem("authToken", token)
export const getToken = () => localStorage.getItem("authToken")

export const apiRequest = async (endpoint, method = "GET", body = null) => {
  const token = getToken()
  const headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
  }

  const res = await fetch(`${BASE_URL}/${endpoint}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  })

  if (!res.ok) {
    const errorData = await res.json()
    throw new Error(errorData.message || "API request failed")
  }

  return res.json()
}
