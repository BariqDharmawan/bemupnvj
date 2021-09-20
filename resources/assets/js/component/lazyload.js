import LazyLoad from "vanilla-lazyload"

const lazyLoadInstance = new LazyLoad({
    elements_selector: '.lazyload',
    data_bg: 'bg',
    data_src: 'src',
    data_srcset: 'srcset',
    data_sizes: 'sizes',
    data_bg_hidpi: 'bg-hidpi',
    data_poster: 'poster',
    data_sizes: 'sizes',
})

export {lazyLoadInstance}