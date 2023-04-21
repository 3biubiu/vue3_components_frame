export default {
    base: process.env.NODE_ENV === 'production' ? '/biu-vitepress/' : '/',
    themeConfig: {
        siteTitle: "vitepress",
        nav: [
            { text: "指南", link: "/guild/install" },
            { text: "组件", link: "/components/button/" },
        ],
        sidebar: {
             // 注意此处的link 都不能是假路径 不然部署页面会崩溃
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/install",
                        },
                        // {
                        //     text: "快速开始",
                        //     link: "/guild/quickstart",
                        // },
                    ],
                },
                // {
                //     text: "进阶",
                //     items: [
                //         {
                //             text: "xx",
                //             link: "/xx",
                //         },
                //     ],
                // },
            ],
            "/components/": [
                {
                    text: "基础组件",
                    items: [
                        {
                            text: "Button",
                            link: "/components/button/",
                        }
                    ],
                }
            ]
        },
        socialLinks: [
            { icon: "github", link: "https://github.com/3biubiu/vue3_components_frame" },
        ],
        
    },
   
}
