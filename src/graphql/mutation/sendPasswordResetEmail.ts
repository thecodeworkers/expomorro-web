const sendPasswordResetEmail = email => {
  return (`
    mutation {
      sendPasswordResetEmail(input: {
        username: "${email}"
      }) {
        user {
          email
        }
      }
    }
  `)
}

export default sendPasswordResetEmail
