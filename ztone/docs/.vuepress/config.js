module.exports = {
    title: 'hello python',
    description: 'hello,java',
    themeConfig: {
        nav:[
            { text: 'Home', link: '/'},
            { text: 'Guide', link: '/guide/'},
            { text: 'External', link: 'www.bing.com'},
            {
                text: 'Language',
                items: [
                    {text: 'Chinese', link: '/language/chinese'},
                    {text: 'Japanese', link: '/language/japanese'},

                ]
            }
        ],
        sidebar: [
            '/',
            '/page-a',
            ['/page-b','Explicite link tetx']

        ]
    }
}


