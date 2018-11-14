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
                        title: "Love Live! School Idol Project (Reddit Rewatch)",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/deaf323b7654b1e9d6a63b9dfb1ae8cc1532553708_full.jpg",
                        desc: "Kotori is best girl"
                    },
                    {
                        title: "Rascal Does Not Dream of Bunny Girl Senpai",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/9f8894f961340ccdd9464a53b14ca3bd1538572740_full.jpg",
                        desc: "Quantum Mechanics, The Anime"
                    },
                    {
                        title: "Laid-Back Camp",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/5ac5fff410cb66c57ce0d2ea2617d08d1515076527_full.jpg",
                        desc: "ABC...easy as 123"
                    },
                    {
                        title: "Yuru Yuri",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/3780ca878ee756a73dfeba8b63b0aa761444072040_full.jpg",
                        desc: "Akarin!!!"
                    }
                    // {
                    //     title: "Steins;Gate 0",
                    //     imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/26cab01d95a04956bd5a1a2994d231ea1523422286_full.jpg",
                    //     desc: "idk if im going to ever finish this"
                    // }
                ],
                prevShows: [
                    {
                        title: "Cells at Work",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/62efd37b4358eb2302a4f3c94bb85aa91530946368_full.jpg",
                        desc: "More like working cells amirite"
                    },
                    {
                        title: "My Hero Academia",
                        imgUrl: "https://nerdist.com/wp-content/uploads/2017/06/5_Hero-970x545.jpg",
                        desc: "POWER!!!!!"
                    },
                    {
                        title: "Love Live! Sunshine!!",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire4/d6b86e43bfb2e1973388eef42ca820151507939806_full.jpg",
                        desc: "Hanamaru best girl \n (Mirai Zura) (未来ずら)"
                    },
                    {
                        title: "Steins;Gate",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/5/73199l.jpg",
                        desc: "I AM MAD SCIENTIST!!!"
                    },
                    {
                        title: "New Game!",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/4/86790l.jpg",
                        desc: "You just scream 'New Game' at season 10"
                    },
                    {
                        title: "Re: ZERO",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/95445cd55c37ce2ff04ef1adde79f50c1529088362_full.jpg",
                        desc: "Felix isn't a girl"
                    },
                    {
                        title: "Konosuba",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire3/7ba81b1709a87f5ca8930229b10029a61484092235_full.jpg",
                        desc: "(エクスプロージョン) \n Ekusupuro-jon"
                    },

                    {
                        title: "Food Wars",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/2cc4dea4df2797c797615a0c7767878c1524864330_full.jpg",
                        desc: "Megumi best girl"
                    },
                    {
                        title: "Gabriel Dropout",
                        imgUrl: "https://myanimelist.cdn-dena.com/images/anime/9/82590l.jpg",
                        desc: "Don't watch OVA 1"
                    },
                    {
                        title: "Is The Order A Rabbit",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/eb7240c98ed971b547c24d00c6753dfa1502320432_full.jpg",
                        desc: "Kokoro Pon Pon Machi"
                    },
                    {
                        title: "Blend S",
                        imgUrl: "https://i.ytimg.com/vi/uBezguFbZJQ/maxresdefault.jpg",
                        desc: "Smile, Sweet, Sister, Sadistic, Surprise, Service, IT'S SHOWTIME"
                    },
                    {
                        title: "Dragon Maid",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire1/c4cf4a91a0bca77f1a0954ddd48a2e8c1532552925_full.jpg",
                        desc: "The Life Of A Python Programmer"
                    },
                    {
                        title: "Eromanga Sensei",
                        imgUrl: "https://img1.ak.crunchyroll.com/i/spire2/6fd1a6719108981ae2d04125f0768b3d1491614015_full.jpg",
                        desc: "Este es basura...baka"
                    }
                ]
            }
        }
    }
};