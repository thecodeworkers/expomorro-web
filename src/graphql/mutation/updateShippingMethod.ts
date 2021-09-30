import { cartQuery } from '../query'
import { v4 as uuidv4 } from 'uuid';

const updateShippingMethodMutation = (method) => {
  return `mutation updateShippingMethod {
    updateShippingMethod(input: {
      shippingMethods: "${method}",
      clientMutationId: "${uuidv4()}"
    }) {
      ${cartQuery}
    }
  }
  `
}

export default updateShippingMethodMutation
