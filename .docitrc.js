module.exports = {
    title: 'custom title',
    publicPath: '/doc-it-example',
    outputDir: 'dist',
    demoDir: 'src/demos',
    routes: [
        {
            demo: 'IconDemo',
            code: 'iconCode',
            title: 'icon',
            desc: 'icon的描述',
            path: '/icon'
        },
        {
            demo: 'ButtonDemo',
            code: 'buttonCode',
            title: 'button',
            desc: 'button的描述',
            path: '/button'
        }

    ]
}