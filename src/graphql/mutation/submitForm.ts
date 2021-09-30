import { v4 as uuidv4 } from 'uuid'

const submitForm = (data) => {
  return (
    `
      mutation submitForm {
        submitForm(input: {data: [${data}], formId: 2, clientMutationId: "${uuidv4()}"}) {
          clientMutationId
          message
          success
        }
      }
    `
  )
}

export default submitForm
