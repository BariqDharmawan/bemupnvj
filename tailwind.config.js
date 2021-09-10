module.exports = {
    purge: [
        './resources/**/*.js',
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
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
                '450px': '450px',
                '7/10-screen': '70vh'
            },
            fontFamily: {
                'roboto': 'Roboto, sans-serif'
            }
        },
        container: {
            center: true,
        },
    },
    variants: {
        extend: {
            borderColor: ['group-hover']
        },
    },
    plugins: [
        require('@tailwindcss/forms')
    ],
}
