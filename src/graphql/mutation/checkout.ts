import { v4 as uuidv4 } from 'uuid';

const checkoutMutation = (user, billing, shipping, paymentMethod, paymentData) => {

  return (`
  mutation Checkout {
    checkout(input: {
      billing: {
        address1: "${billing?.address}",
        city: "${billing?.city}",
        country: VE,
        email: "${user?.email}",
        firstName: "${billing?.name}",
        lastName: "${billing?.lastname}"
        overwrite: true,
        phone: "${billing?.phone}",
        postcode: "${billing?.postalCode}",
        state: "${billing?.municipality}",
      },
      clientMutationId: "${uuidv4()}",
      isPaid: false
      paymentMethod: "alg_custom_gateway_1",
      shipping: {
        address1: "${shipping?.address}",
        address2: "${shipping?.referencePoint}",
        city: "${shipping?.city}",
        country: VE,
        email: "${user?.email}",
        firstName: "${shipping?.name}",
        lastName: "${shipping?.lastname}"
        overwrite: false,
        phone: "${shipping?.phone}",
        postcode: "${shipping?.postalCode}",
        state: "${shipping?.municipality}"
      },
      customerNote: "${user?.name} ${user?.lastname}, Teléfono: ${user?.phone}, CI ${user?.document}, Correo: ${user?.email}, Fecha de entrega: ${billing?.date},  Hora de entrega: ${billing?.hour},  ${paymentData ? `Nombre: ${paymentData?.name}, Referencia: ${paymentData?.referenceNumber}, Banco: ${paymentData?.bank}` : "" } ",
      shipToDifferentAddress: true,
    }) {
      result
      order {
        orderNumber
      }
    }
  }
  `)
}

export default checkoutMutation
