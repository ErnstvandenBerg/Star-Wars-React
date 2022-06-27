module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.js', './public/index.html'],
    darkMode: false,
    theme: {
        fontFamily: {
            sans: ['"Lato"', 'sans-serif'],
            serif: ['"Lato"', 'serif'],
            body: ['"Lato"', 'sans-serif'],
        },
        extend: {},
        colors: {
            transparent: 'transparent',
            current: 'currentColor',
            black: {
                DEFAULT: '#000000',
            },
            primary: {
                DEFAULT: '#121212',
            },
            white: {
                DEFAULT: "#d7d7d7",
            },
            light: {
                DEFAULT: "#ffffff",
            },
            bitcoin: {
                DEFAULT: "#ff8d1c"
            },
            orange: {
                DEFAULT: '#ffc930'
            },
            red: {
                DEFAULT: '#ff0027'
            },
            blue: {
                DEFAULT: '#0085f0'
            },
            green: {
                DEFAULT: '#ffc930'
            },
            grey: {
                DEFAULT: '#454c52'
            },
            beige: {
                DEFAULT: '#CCCBBB'
            }
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
