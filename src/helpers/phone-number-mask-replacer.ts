export const phoneNumberMaskReplacer = (phoneNumber: string) => {
  let newPhoneNumber = phoneNumber.replace(/\D/g, "")

  if (newPhoneNumber.length >= 12) {
    newPhoneNumber = newPhoneNumber.replace(/^(\d{2})(\d{2})(\d{5})(\d{4}).*/, "+$1 ($2) $3-$4")
  }

  return newPhoneNumber
}
