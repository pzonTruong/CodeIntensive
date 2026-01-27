const apiKey = import.meta.env.VITE_API_KEY;

async function fetchData() {
    const response = await fetch(`https://mindx-mockup-server.vercel.app/api/resources?apiKey=${apiKey}`);
    const data = await response.json();
    console.log(data);
}

