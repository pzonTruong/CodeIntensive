import { useEffect, useState } from 'react'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_MY_API_KEY;
    
    fetch(`https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${apiKey}`)
      .then(res => res.json())
      .then(json => setData(json))
  }, [])

  return (
    <div>
      <h1>Dữ liệu từ API:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}

export default App