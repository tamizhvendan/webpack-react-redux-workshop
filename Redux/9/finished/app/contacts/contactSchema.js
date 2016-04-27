export default {
  properties: {
    firstName : {
      required : true,
      type : 'string',
      description: 'First Name is required'
    },
    email : {
      required : true,
      format: 'email',
      messages: {
        required : 'Email is required',
        format: 'Invalid Email'
      }
    }
  }
}