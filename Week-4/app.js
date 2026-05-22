const UserAPI = {
    fetchUsers: async function () {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const success = true;
                if (success) {
                    resolve([
                        { id: 1, name: "Bhavana", email: "bhavana@gmail.com" },
                        { id: 2, name: "Dharani", email: "dharani@gmail.com" },
                        { id: 3, name: "Radha", email: "radha@gmail.com" },
                        { id: 4, name: "Urmila", email: "urmila@gmail.com" },
                        { id: 5, name: "Arjun", email: "arjun@gmail.com" },
                        { id: 6, name: "Mahesh", email: "mahesh@gmail.com" },
                        { id: 7, name: "Navya", email: "navya@gmail.com" },
                        { id: 8, name: "Veda", email: "veda@gmail.com" },
                        { id: 9, name: "Pujith", email: "pujith@gmail.com" },
                        { id: 10, name: "Srinu", email: "srinu@gmail.com" }
                    ]);
                } else {
                    reject("Failed to fetch users");
                }
            }, 2000);
        });
    }
};
// UI Layer
const UI = {
    displayUsers(users) {
        const userList = document.getElementById("userList");
        userList.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.textContent = `${user.name} - ${user.email}`;
            userList.appendChild(li);
        });
    }
};
// Controller Layer
async function loadUsers() {
    try {
        console.log("Loading users...");
        const users = await UserAPI.fetchUsers();
        UI.displayUsers(users);
        console.log("Users loaded successfully");
    } catch (error) {
        console.error("Error:", error);
        alert("Something went wrong!");
    }
}

