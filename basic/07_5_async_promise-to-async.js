"use strict";

class UserStorage {
  delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async loginUser(id, password) {
    await this.delay(2000);
    if (
      (id === "ellie" && password === "dream") ||
      (id === "coder" && password === "dream")
    ) {
      return id;
    } else throw new Error("not found");
  }

  async getRoles(user) {
    await this.delay(1000);
    if (user === "ellie") {
      return { name: "ellie", role: "admin" };
    } else throw new Error("not access");
  }
}

const userStorage = new UserStorage();
const id = prompt("enter your id");
const password = prompt("enter your password");

async function findUserRole() {
  try {
    const user = await userStorage.loginUser(id, password);
    const userInfo = await userStorage.getRoles(user);

    return userInfo;
  } catch (error) {
    console.log(error);
  }
}

findUserRole()
  .then((userInfo) =>
    alert(`hellow ${userInfo.name}, you have a ${userInfo.role} role`)
  )
  .catch(console.log);
