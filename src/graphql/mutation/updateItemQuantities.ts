import cart from "@graphql/query/entries/cart"
import { v4 as uuidv4 } from 'uuid'

const updateItemQuantities = ({ product, quantity }) => {

  return (
    `
      mutation updateItemQuantities {
        updateItemQuantities(input: { items: {key: "${product}", quantity: ${quantity}}, clientMutationId: "${uuidv4()}"}) {
          ${cart}
        }
      }
    `
  )
}

export default updateItemQuantities
