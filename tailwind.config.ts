// import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//     './src/**/*.{ts,tsx}',
// 	],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       screens: {
//         "d": "1204px",
//         "ab":"1038px",
//         "ol":"1165px"
//       },
//       colors: {
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         primary: {
//           DEFAULT: "hsl(var(--primary))",
//           foreground: "hsl(var(--primary-foreground))",
//         },
//         secondary: {
//           DEFAULT: "hsl(var(--secondary))",
//           foreground: "hsl(var(--secondary-foreground))",
//         },
//         destructive: {
//           DEFAULT: "hsl(var(--destructive))",
//           foreground: "hsl(var(--destructive-foreground))",
//         },
//         muted: {
//           DEFAULT: "hsl(var(--muted))",
//           foreground: "hsl(var(--muted-foreground))",
//         },
//         accent: {
//           DEFAULT: "hsl(var(--accent))",
//           foreground: "hsl(var(--accent-foreground))",
//         },
//         popover: {
//           DEFAULT: "hsl(var(--popover))",
//           foreground: "hsl(var(--popover-foreground))",
//         },
//         card: {
//           DEFAULT: "hsl(var(--card))",
//           foreground: "hsl(var(--card-foreground))",
//         },
//       },
//       borderRadius: {
//         lg: "var(--radius)",
//         md: "calc(var(--radius) - 2px)",
//         sm: "calc(var(--radius) - 4px)",
//       },
//       keyframes: {
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
//       },
//       animation: {
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",
//       },
//     },
//   },
//   plugins: [require("tailwindcss-animate")],
// } satisfies Config

// export default config






//updated one 
// tailwind.config.js
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      screens: {
        d: '1204px',
        ab: '1038px',
        ol: '1165px',
        sma:"730px",
        pi : "885px",
        bl: "1133px",
        job: "1309px",
        job2: "1060px",
        job3: "841px",
        job4: "588px",
        job5: "445px",
        job6: "357px",
        about1: "1245px",
        about2: "1159px",
        about3: "1120px",
        about4: "1072px",
        about5: "1025px",
        about6: "957px",
        about7: "713px",
        about8: "465px",
        div1: "1161px",
        div2: "1282px",
        jobo1: "1137px",
        jobo2: "913px",
        jobo3: "367px",
        jobo4: "897px",
        jobo5: "763px",
        jobo6: "616px",
        head1: "437px",
        head2: "987px",
        head3: "329px",
        who1: "693px",
        home1: "1193px",
        home2: "763px",
        home3: "619px",
        home4: "500px",
        miss1: "1365px",
        miss2: "1265px",
        miss3: "1209px",
        miss4: "1109px",
        miss5: "395px",
        miss6: "331px",
        jj: "1311px",
        mdds: "808px",
        feat1: "721px",
        feat2: "619px",
        feat3: "571px",
        feat4: "406px",
        feat5: "346px",
        feat6: "311px",
        feat7: "292px",
        feat8: "650px",
        feat9: "460px",
        feat10: "664px",
        feat11: "375px",
        feat12: "278px",
        achieve1: "1442px",
        achieve2: "1212px",
        achieve3: "1073px",
        achieve4: "924px",
        achieve5: "816px",
        achieve6: "766px",
        achieve7: "618px",
        achieve8: "533px",
        achieve9: "475px",
        achieve10: "383px",
        achieve11: "338px",
        achieve12: "311px",
        achieve13: "299px",
        achieve14: "287px",
        achieve15: "1242px",
        achieve16: "1073px",
        achieve17: "712px",
        achieve18: "651px",
        Foot1: "1133px",
        Foot2: "569px",
        largex:"1536px",
        iol:"630px",
        gyt:"400px",
        deq:"463px",
        rtu:"320px",
        vgt:"1037px",
        bhy:"869px",
        kop:"793px",
        swr:"458px",
        hgy:"647px",
        hy9:"533px",
        nkm:"638px",
        ser:"520px",
        sanamunni:"418px"
        
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],

}
