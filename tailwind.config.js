/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'm1': ['JetBrains Mono'],
      'sans': ['JetBrains Mono'],
    },
    extend: {
      fontSize: {
        'lg': '2rem',
        base: '1rem',
        'sm': '13px',
        'ssm': '10px',
        // Kamu bisa menambahkan ukuran font yang lebih kecil lagi sesuai kebutuhanmu
      },
      textColor: {
        base: '#666'
      }
    },
  },
  plugins: [],
}
