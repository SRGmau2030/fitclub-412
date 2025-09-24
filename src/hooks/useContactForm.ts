import { useState } from 'react'

export interface ContactFormData {
  name: string
  phone: string
  age: string
  weight: string
  height: string
  intensity: string
  objectives: string
}

export const useContactForm = () => {
  const [contactForm, setContactForm] = useState<ContactFormData>({
    name: '',
    phone: '',
    age: '',
    weight: '',
    height: '',
    intensity: '',
    objectives: ''
  })

  const handleContactFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    
    // Validación especial para el campo de teléfono
    if (name === 'phone') {
      const phoneRegex = /^[0-9\s\-\(\)]*$/
      if (!phoneRegex.test(value)) {
        return
      }
    }
    
    // Validación para evitar números negativos en edad, peso y altura
    if ((name === 'age' || name === 'weight' || name === 'height') && value.includes('-')) {
      return
    }
    
    setContactForm(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const resetContactForm = () => {
    setContactForm({
      name: '',
      phone: '',
      age: '',
      weight: '',
      height: '',
      intensity: '',
      objectives: ''
    })
  }

  return {
    contactForm,
    handleContactFormChange,
    resetContactForm
  }
}
