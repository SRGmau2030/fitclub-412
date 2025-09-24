export const createWhatsAppUrl = (phoneNumber: string, message: string): string => {
  const encodedMessage = encodeURIComponent(message)
  return `https://wa.me/${phoneNumber}?text=${encodedMessage}`
}

export const openWhatsApp = (phoneNumber: string, message: string): void => {
  const whatsappUrl = createWhatsAppUrl(phoneNumber, message)
  window.open(whatsappUrl, '_blank')
}

export const FITCLUB_WHATSAPP_NUMBER = "529994572196"
