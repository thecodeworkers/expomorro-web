import { v4 as uuidv4 } from 'uuid'

const registerUser = ({ email, password, name, lastname }) => {
  return (`
    mutation RegisterUser {
      registerUser(
        input: {
          clientMutationId: "${uuidv4()}",
          username: "${email}",
          email: "${email}",
          password: "${password}",
          firstName: "${name}",
          lastName: "${lastname}"
        }) {
          user {
            email
            firstName
            lastName
            jwtAuthToken
            jwtRefreshToken
            wooSessionToken
            databaseId
          }
      }
    }
  `)
}

export default registerUser
