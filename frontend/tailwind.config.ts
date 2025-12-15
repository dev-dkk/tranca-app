import type { Config } from "tailwindcss";

const config: Config = {
  // Isso garante que ele leia a pasta 'app' que está na raiz
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta exata da Logo Belezafro
        beleza: {
          50: '#FDF8F6',  // Fundo (Quase branco, tom de pele bem claro)
          100: '#F2E8E5', // Areia suave
          200: '#D6A692', // Terracota Claro (Pele do desenho)
          250: '#c38560', //Fundo da logo
          300: '#C17C60', // Terracota Médio
          500: '#A95C42', // Terracota Forte (Cor do círculo "BELEZA")
          700: '#5E3A33', // Marrom Café (Traços do desenho)
          900: '#2A1B18', // Quase Preto (Cabelo e detalhes)
          accent: '#4B2E39' // Roxo Ameixa (Estrelas)
        }
      },
    },
  },
  plugins: [],
};
export default config;