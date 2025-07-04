interface IFormState<TValues> {
  success: boolean,
  errors: { [key: string]: string[] }
  values: TValues
}

interface Demo201Values {
  appUuid: string,
  idNumber: string,
  name: string,
  phoneNumber: string,
  emailAddress: string,
}
