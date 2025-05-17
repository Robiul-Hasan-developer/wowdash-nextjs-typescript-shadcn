type User = {
  id: string
  email: string
  name: string
  password: string
}


const users: User[] = [
  {
    id: "1",
    email: "wowdash@gmail.com",
    name: "Wowdash",
    // password: "$2a$10$eN0VvTPF3e0..."
    password: "1122"
  }
]

export async function getUserFromDb(email: string, hashedPassword: string): Promise<User | null> {
  const find = users.find(user => user.email === email && user.password === hashedPassword)
  return find || null
}
