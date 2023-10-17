import {User, UserRole} from "./model/User";
import {beveragesManager} from "./data/data";

function main() {
  const admin: User = {
    id: 1,
    name: 'Barista',
    role: UserRole.admin
  }

  const member2: User = {
    id: 2,
    name: 'aaa',
    role: UserRole.customer
  }

  const member3: User = {
    id: 3,
    name: 'bbb',
    role: UserRole.customer
  }

  beveragesManager.addBeverage(admin, {name: 'americano', price: 4000});
  beveragesManager.addBeverage(admin, {name: 'latte', price: 4500});
  beveragesManager.addBeverage(admin, {name: 'coldBrew', price: 5000});


}

main()