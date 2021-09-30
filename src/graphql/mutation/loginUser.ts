import { v4 as uuidv4 } from 'uuid'

const loginUser = ({ email, password }) => {
  return (`
  mutation LoginUser {
    login(input: {clientMutationId: "${uuidv4()}", username: "${email}", password: "${password}"}) {
      authToken
      sessionToken
      customer {
        databaseId
        sessionToken
        jwtAuthToken
        billing {
          address1
          address2
          city
          country
          email
          firstName
          lastName
          phone
          postcode
          state
        }
        shipping {
          state
          postcode
          phone
          lastName
          firstName
          email
          country
          company
          city
          address2
          address1
        }
        orders(first: 1000000) {
          nodes {
            id
            orderNumber
            total
            subtotal
            status
            shippingTotal
            date
            transactionId
            needsPayment
            lineItems {
              nodes {
                product {
                  id
                  name
                  image {
                    mediaItemUrl
                    slug
                  }
                  attributes {
                    nodes {
                      label
                      name
                      options
                    }
                  }
                  ... on SimpleProduct {
                    price
                  }
                  ... on VariableProduct {
                    price
                    stockQuantity
                    totalSales
                    variations(first: 100000) {
                      nodes {
                        id
                        databaseId
                        manageStock
                        price
                        stockQuantity
                        name
                        attributes(first: 100000) {
                          nodes {
                            id
                            name
                            value
                          }
                        }
                      }
                    }
                  }
                }
                total
                quantity
              }
            }
          }
        }
      }
      user {
        email
        firstName
        lastName
        jwtAuthToken
        jwtRefreshToken
      }
    }
  }
  `)
}

export default loginUser
