import {Beverage} from "../model/Beverage";
import {Order} from "../model/Order";
import {User, UserRole} from "../model/User";
import {isUserRole} from "../service/UserService";

class BeverageManager {
  private beverages: Beverage[] = []

  public addBeverage (user: User, beverage: Required<Beverage>) {
    if(!isUserRole(user, UserRole.admin)) {
      console.log('not permitted')
      return
    }

    this.beverages.push({...beverage})
  }

  public removeBeverage (user: User, targetBeverageName: string) {
    if(!isUserRole(user, UserRole.admin)) {
      console.log('not permitted')
      return
    }

    this.beverages = this.beverages.filter((b) => b.name !== targetBeverageName)
  }

  public beverageList (user: User) {
    if(!user) return []

    return this.beverages
  }

  public findBeverage (targetBeverageName: string) {
    return this.beverages.find(b => b.name === targetBeverageName)
  }
}

export const beveragesManager = new BeverageManager()

class OrderManager {
  private orderId = 0;
  private orders: Order[] = []

  public placeOrder(user: User, targetBeverageName: string): number {
    if(!isUserRole(user, UserRole.customer)){
      console.log('not permitted')
      return -1
    }

    const beverage = beveragesManager.findBeverage(targetBeverageName)

    if(!beverage) {
      console.log(404)
      return -1
    }

    this.orders.push({
      orderId: this.orderId++,
      customerId: user.id,
      customerName: user.name,
      beverageName: beverage.name,
      status: 'placed',
    })

    return this.orderId
  }

  public readyForServe(user: User, orderId: number) {
    if(!isUserRole(user, UserRole.admin)) {
      console.log('not permitted')
      return
    }

    const order = this.orders.find(o => o.orderId === orderId)
    if(order) {
      order.status = 'completed'
      console.log(`[C-Noti] ${order.customerName}, your ${order.beverageName} has prepared`)
    }
  }

  public pickup(user: User, orderId: number) {
    const order = this.orders.find(o => o.orderId === orderId)

    if(!isUserRole(user, UserRole.customer) || !order || order.customerId !== user.id) {
      console.log('No user beverage')
      return
    }

    if(order.status !== 'completed') {
      console.log('beverage not completed or already picked up')
      return
    }

    order.status = 'picked-up'
    console.log(`[A-Noti] ${user.id} picked up ${order.orderId}`)
  }
}

export const orderManager = new OrderManager()