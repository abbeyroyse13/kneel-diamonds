import { getOrders } from "./database.js"
import { getMetals } from "./database.js"

const buildOrderListItem = (order) => {
    const metals = getMetals()

    // Remember that the function you pass to find() must return true/false
    const foundMetal = metals.find(
        (metal) => {
            if (metal.id === order.metalId) {
                return true
            }
        }
    )
    const totalCost = foundMetal.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    return `<li>
    Order #${order.id} cost ${costString}
    </li>`
}

export const Orders = () => {
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem)

    html += listItems.join("")
    html += "</ul>"

    return html
}