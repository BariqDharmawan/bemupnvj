module.exports = {
    mode: 'jit',
    purge: [
        './resources/**/*.scss',
        './resources/assets/js/app.js',
        './resources/assets/js/component/back-to-top.js',
        './resources/assets/js/component/form.js',
        './resources/assets/js/component/menu.js',
        './resources/assets/js/function/library.js',
        './resources/**/*.edge',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        borderColor: theme => ({
            ...theme('colors'),
            'grey-primary': '#C4C4C4',
        }),
        backgroundColor: theme => ({
            ...theme('colors'),
            'red-primary': '#E11D2D',
            'orange-primary': '#FC5232',
            'black-primary': '#000',
            'orange-secondary': '#FF6841',
            'black-80': 'rgba(0, 0, 0, 0.8)',
            'grey-primary': '#C4C4C4',
            'grey-secondary': '#E5E5E5',
            'green-primary': '#75B73B',
            'green-secondary': '#3BBA26',
            'purple-primary': '#4267B2',
            'purple-secondary': '#5C5ECD',
            'blue-twitter': '#03A9F4',
            'red-youtube': '#F61C0D',
            'gray-normal': '#E5E5E5'
        }),
        extend: {
            height: {
                '200px': '200px',
                '450px': '450px',
                '7/10-screen': '70vh'
            },
            width: {
                '150%': '150%'
            },
            fontFamily: {
                'roboto': 'Roboto, sans-serif'
            },
            backgroundImage: {
                'gradient-purple-red': 'linear-gradient(180deg, rgba(108, 73, 172, 0) 0%, #6C49AC 0.01%, #FC5232 100%)'
            }
        },
        container: {
            center: true,
        },
    },
    variants: {
        extend: {
            backgroundColor: ['after'],
            inset: ['after'],
            transform: ['after'],
            translate: ['after'],
            position: ['after'],
            height: ['after'],
            width: ['after']
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('tailwindcss-pseudo-elements')({
            emptyContent: true
        })
    ],
}
