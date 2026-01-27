const apiKey = "6974cfa6912a2afb2f310c68";

async function fetchData() {
    const resources = ['users', 'taskStatus', 'flags', 'tasks']

    for (let i = 0; i < resources.length; i++) {
        const url = `https://mindx-mockup-server.vercel.app/api/resources/${resources[i]}?apiKey=${apiKey}`;
        // console.log(url)
        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(`Dữ liệu ${resources[i]}:`, data);
        } catch (error) {
            console.error("Lỗi rồi bạn ơi:", error);
        }

    }

}
const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
async function addUsers() {
    const url = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${apiKey}`;
    const newUser = { userId: 5, name: 'Pzon' };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newUser)
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Đã thêm user mới:", result);

            // FIX: Gọi lại hàm lấy danh sách để cập nhật console
            console.log("--- Danh sách mới sau khi cập nhật ---");
            fetchAndShowUsers();
        }
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

// Hàm bổ trợ để lấy danh sách
async function fetchAndShowUsers() {
    const url = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.table(data); // Dùng console.table cho đẹp và không bị 'root' che khuất
}
// Gọi hàm để thực thi
fetchData();

async function delayAddUser() {
    await sleep(5000);
    console.log('Done')
    addUsers();
}

delayAddUser()

async function addTask() {
    const url = `https://mindx-mockup-server.vercel.app/api/resources/users?apiKey=${apiKey}`;
    const newTask = {
        taskId:
            1,
        title:
            "Mobile Wireframes",
        description:
            "Lên bố cục ứng dụng thích nghi cho Mobile.",
        statusId:
            1,
        flagId:
            3,
        assignedTo:
            1,
        deadline:
            "2025-04-12"
    };

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newTask)
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Đã thêm task mới:", result);

            console.log("--- Danh sách mới sau khi cập nhật ---");
            fetchAndShowTasks();
        }
    } catch (error) {
        console.error("Lỗi:", error);
    }
}

async function fetchAndShowTasks() {
    const url = `https://mindx-mockup-server.vercel.app/api/resources/tasks?apiKey=${apiKey}`;
    const res = await fetch(url);
    const data = await res.json();
    console.table(data); // Dùng console.table cho đẹp và không bị 'root' che khuất
}

async function delayAddTasks() {
    await sleep(5000);
    console.log('Done')
    addTask();
}

delayAddTasks();

async function updateUser(id) {
    const apiKey = "YOUR_VITE_MY_API_KEY";
    // Thêm id vào cuối đường dẫn API để chỉ định đối tượng cần sửa
    const url = `https://mindx-mockup-server.vercel.app/api/resources/users/${id}?apiKey=${apiKey}`;

    const updatedData = {
        name: "Pzon Updated",
        userId: 5 // Giữ nguyên hoặc thay đổi tùy ý
    };

    try {
        const response = await fetch(url, {
            method: "PUT", // Sử dụng phương thức PUT để cập nhật
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedData)
        });

        const result = await response.json();

        if (response.ok) {
            console.log("Cập nhật thành công!", result);
        } else {
            console.error("Cập nhật thất bại:", result);
        }
    } catch (error) {
        console.error("Lỗi kết nối:", error);
    }
}

// Gọi hàm để cập nhật user có id là 5
updateUser(5);