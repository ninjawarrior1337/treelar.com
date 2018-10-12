// See http://brunch.io for documentation.
module.exports = {
    files: {
        javascripts: {
            joinTo: {
                'app.js': /^app/,
                'js/vendor.js': /^(?!app)/
            }
        },
        stylesheets: {
            joinTo: 'app.css'
        },
    },
    server: {
        port: 25565,
        hostname: "0.0.0.0"
    },
    notifications: false,
    plugins: {
        uglify: {
            mangle: false,
            compress: {
                global_defs: {
                    DEBUG: true
                }
            }
        },
        pug: {
            locals: {
                currShows: [
                    {
                        title: "Laid-Back Camp",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                        desc: "ABC...easy as 123"
                    },
                    {
                        title: "Steins;Gate 0",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/26cab01d95a04956bd5a1a2994d231ea1523422286_full.jpg",
                        desc: ""
                    },
                    {
                        title: "Cells at Work",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/62efd37b4358eb2302a4f3c94bb85aa91530946368_full.jpg",
                        desc: ""
                    }
                ],
                prevShows: [
                    {
                        title: "My Hero Academia",
                        imgUrl: "https://nerdist.com/wp-content/uploads/2017/06/5_Hero-970x545.jpg",
                        desc: ""
                    },
                    {
                        title: "Love Live Sunshine!!",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/d6b86e43bfb2e1973388eef42ca820151507939806_full.jpg",
                        desc: "Hanamaru best girl \n (Mirai Zura) (未来ずら)"
                    },
                    {
                        title: "Love Live School Idol Project",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/deaf323b7654b1e9d6a63b9dfb1ae8cc1532553708_full.jpg",
                        desc: "Kotori is best girl"
                    },
                    {
                        title: "Steins;Gate",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/5/73199l.jpg",
                        desc: ""
                    },
                    {
                        title: "New Game!",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/4/86790l.jpg",
                        desc: ""
                    },
                    {
                        title: "Re:ZERO",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/95445cd55c37ce2ff04ef1adde79f50c1529088362_full.jpg",
                        desc: ""
                    },
                    {
                        title: "Konosuba",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg",
                        desc: "(エクスプロージョン) \n Ekusupuro-jon"
                    },

                    {
                        title: "Food Wars",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/2cc4dea4df2797c797615a0c7767878c1524864330_full.jpg",
                        desc: ""
                    },
                    {
                        title: "Gabriel Dropout",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/9/82590l.jpg",
                        desc: ""
                    },
                    {
                        title: "Is The Order A Rabbit",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/eb7240c98ed971b547c24d00c6753dfa1502320432_full.jpg",
                        desc: ""
                    },
                    {
                        title: "Blend S",
                        imgUrl: "https://i.ytimg.com/vi/uBezguFbZJQ/maxresdefault.jpg",
                        desc: "Smile, Sweet, Sister, Sadistic, Surprise, Service, IT'S SHOWTIME"
                    },
                    {
                        title: "Dragon Maid",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/c4cf4a91a0bca77f1a0954ddd48a2e8c1532552925_full.jpg",
                        desc: ""
                    },
                ]
            }
        }
    }
};