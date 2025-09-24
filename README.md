# FitClub 4.12 - Sitio Web Oficial

Sitio web oficial del gimnasio FitClub 4.12, especializado en entrenamiento funcional en Mérida, Yucatán.

## 🏗️ Estructura del Proyecto

El proyecto está organizado de manera modular para facilitar, el mantenimiento y escalabilidad:

```
src/
├── components/
│   ├── layout/                 # Componentes de diseño general
│   │   ├── Navigation.tsx      # Barra de navegación principal
│   │   └── Navigation.css      # Estilos de navegación
│   │
│   ├── sections/               # Secciones principales de la página
│   │   ├── Hero.tsx           # Sección hero/landing
│   │   ├── Hero.css           # Estilos del hero
│   │   ├── About.tsx          # Sección "Sobre Nosotros"
│   │   ├── About.css          # Estilos de "Sobre Nosotros"
│   │   ├── Services.tsx       # Sección de servicios
│   │   ├── Services.css       # Estilos de servicios
│   │   ├── Pricing.tsx        # Sección de precios/mensualidades
│   │   ├── Pricing.css        # Estilos de precios
│   │   ├── Testimonials.tsx   # Sección de testimonios
│   │   ├── Testimonials.css   # Estilos de testimonios
│   │   ├── Gallery.tsx        # Galería de fotos
│   │   ├── Gallery.css        # Estilos de galería
│   │   ├── Location.tsx       # Sección de ubicación
│   │   ├── Location.css       # Estilos de ubicación
│   │   ├── Contact.tsx        # Formulario de contacto
│   │   ├── Contact.css        # Estilos de contacto
│   │   ├── Footer.tsx         # Pie de página
│   │   └── Footer.css         # Estilos del footer
│   │
│   └── ui/                     # Componentes reutilizables de UI
│       ├── ServiceCard.tsx     # Tarjeta de servicio
│       ├── ServiceCard.css     # Estilos de tarjeta de servicio
│       ├── PricingCard.tsx     # Tarjeta de precio
│       ├── PricingCard.css     # Estilos de tarjeta de precio
│       ├── TestimonialCard.tsx # Tarjeta de testimonio
│       ├── TestimonialCard.css # Estilos de tarjeta de testimonio
│       ├── LocationCard.tsx    # Tarjeta de información de ubicación
│       └── LocationCard.css    # Estilos de tarjeta de ubicación
│
├── hooks/                      # Custom hooks de React
│   └── useContactForm.ts       # Hook para manejo del formulario de contacto
│
├── utils/                      # Utilidades y funciones auxiliares
│   └── whatsapp.ts            # Funciones para integración con WhatsApp
│
├── styles/                     # Estilos globales
│   └── globals.css            # Estilos globales compartidos
│
├── App.tsx                     # Componente principal de la aplicación
├── App.css                     # Estilos principales (legacy - se mantendrá vacío)
├── main.tsx                    # Punto de entrada de la aplicación
└── index.css                   # Estilos base y variables CSS
```

## 🎯 Principios de Arquitectura

### **Modularidad**

- **Separación por responsabilidades**: Cada componente tiene una función específica
- **Componentes reutilizables**: Los elementos UI están separados para reutilización
- **Estilos modulares**: Cada componente tiene su propio archivo CSS

### **Organización por Funcionalidad**

- **`/layout`**: Componentes de estructura general (navegación, etc.)
- **`/sections`**: Secciones principales de la página
- **`/ui`**: Componentes reutilizables de interfaz
- **`/hooks`**: Lógica de estado personalizada
- **`/utils`**: Funciones auxiliares y utilidades

### **Mantenibilidad**

- **Archivos pequeños**: Cada archivo se enfoca en una funcionalidad específica
- **Nomenclatura clara**: Nombres descriptivos para archivos y componentes
- **Separación de estilos**: CSS modular para evitar conflictos

## 🚀 Tecnologías Utilizadas

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de desarrollo y build
- **CSS Modules** - Estilos modulares
- **React Icons** - Iconografía

## 📱 Funcionalidades

### **Navegación Inteligente**

- Navegación responsive con menú móvil
- Scroll suave a secciones
- Navegación fija en la parte superior

### **Integración WhatsApp**

- Botones de contacto directo
- Mensajes pre-formateados
- Formulario de contacto que envía por WhatsApp

### **Diseño Responsive**

- Optimizado para móviles, tablets y desktop
- Imágenes adaptativas
- Tipografía escalable

### **Secciones Principales**

- **Hero**: Presentación principal con llamadas a la acción
- **Sobre Nosotros**: Información del gimnasio
- **Servicios**: CrossFit, Personal Training, Nutrición
- **Precios**: Planes de membresía con integración WhatsApp
- **Testimonios**: Experiencias de clientes
- **Galería**: Fotos del gimnasio y entrenamientos
- **Ubicación**: Mapa interactivo y información de contacto
- **Contacto**: Formulario con validaciones

## 🛠️ Desarrollo

### **Instalación**

```bash
npm install
```

### **Desarrollo**

```bash
npm run dev
```

### **Build**

```bash
npm run build
```

### **Preview**

```bash
npm run preview
```

## 📋 Guía de Mantenimiento

### **Agregar Nueva Sección**

1. Crear componente en `/src/components/sections/`
2. Crear archivo CSS correspondiente
3. Importar y usar en `App.tsx`

### **Agregar Nuevo Componente UI**

1. Crear componente en `/src/components/ui/`
2. Crear archivo CSS correspondiente
3. Exportar desde la sección correspondiente

### **Modificar Estilos**

- **Globales**: Editar `/src/styles/globals.css` o `/src/index.css`
- **Específicos**: Editar el archivo CSS del componente correspondiente

### **Agregar Nueva Funcionalidad**

1. Crear hook personalizado en `/src/hooks/` si es necesario
2. Agregar utilidades en `/src/utils/` si es necesario
3. Implementar en el componente correspondiente

## 🎨 Sistema de Diseño

### **Colores**

- **Primary**: `#A9FF00` (Verde lima)
- **Background**: `#000000` (Negro)
- **Text**: `#FFFFFF` (Blanco)

### **Tipografía**

- **Headings**: Exo 2, Rajdhani, Orbitron
- **Body**: System fonts

### **Espaciado**

- Sistema basado en `clamp()` para responsividad
- Espaciado consistente usando variables CSS

## 📞 Contacto

- **Teléfono**: (52) 999-457-2196
- **WhatsApp**: (52) 999-457-2196
- **Ubicación**: Calle 4, Av. Alemán #G7 entre 7 y 5, col. Felipe Carrillo Puerto

---

**© 2025 FitClub 4.12. Todos los derechos reservados.**
