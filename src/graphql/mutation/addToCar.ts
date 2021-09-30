import cart from "@graphql/query/entries/cart"
import { v4 as uuidv4 } from 'uuid'

const addToCart = ({ product, quantity, variationId }) => {

  const variation = (variationId) ? `, variationId: ${variationId}` : ''

  return (
    `
      mutation AddCart {
        addCartItems(input: { items: {productId: ${product}, quantity: ${quantity}${variation}}, clientMutationId: "${uuidv4()}"}) {
          ${cart}
        }
      }
    `
  )
}

export default addToCart
