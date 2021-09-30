import cart from "@graphql/query/entries/cart"
import { v4 as uuidv4 } from 'uuid'

const removeItemsFromCart = (key) => {

  return (
    `
      mutation removeItemsFromCart {
        removeItemsFromCart(input: {keys: "${key}", clientMutationId: "${uuidv4()}"}) {
          ${cart}
        }
      }
    `
  )
}

export default removeItemsFromCart
