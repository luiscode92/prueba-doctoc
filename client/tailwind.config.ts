import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        primary: {
          '600': '#12A58C',
          '700': '#0F8A75',
          '50': '#E3FCF8',
        },
        gray: {
          '50': '#F9FAFB',
          '900': '#101828',
          '300': '#D0D5DD',
          '200': '#EAECF0',
<<<<<<< HEAD
          '700': '#344054',
        }
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontWeight: {
        'medium': '500',
      }
=======
        }
      },
>>>>>>> 7cd433964e8f32df8d371b29035755e2373f49dd
    },
  },
  plugins: [],
}
export default config
