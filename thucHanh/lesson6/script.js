import 'dotenv/config'; 

const BASE_URL = process.env.BASE_URL;

async function fetchData(resource) {
    const response = await fetch(`${BASE_URL}/${resource}`);
    return await response.json();
}


// Thực thi lấy 4 tài nguyên
const users = await fetchData('users');
const taskStatus = await fetchData('taskStatus');
const flags = await fetchData('flags');
const tasks = await fetchData('tasks');