interface Human {
    height: number
}

interface Engineer extends Human{
    role: string
}

enum Role {
    CS,
    STAY
}

interface TallPerson {
    height: number
    role: Role
}

const manager: Engineer = {
    height: 120,
    role: 'CS'
}

// class ManagerManager implements Engineer, TallPerson {
class ManagerManager implements Omit<Engineer, 'role'>, TallPerson {
    height = 190
    role= Role.CS
    // role= 'CS'
}

