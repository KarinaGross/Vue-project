const NewVue = {
    data() {
        return {
            articles: [
                {
                    img: '../img/articlesAndNews1.png',
                    title: 'Kitchan Design',
                    text: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022 '
                },
                {
                    img: '../img/articlesAndNews2.png',
                    title: 'Living Design',
                    text: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022 '
                },
                {
                    img: '../img/articlesAndNews3.png',
                    title: 'Interior Design',
                    text: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 '
                },
                {
                    img: '../img/articlesAndNews4.png',
                    title: 'Kitchan Design',
                    text: 'Let’s Get Solution For Building Construction Work',
                    date: '26 December,2022 '
                },
                {
                    img: '../img/articlesAndNews5.png',
                    title: 'Living Design',
                    text: 'Low Cost Latest Invented Interior Designing Ideas',
                    date: '22 December,2022 '
                },
                {
                    img: '../img/articlesAndNews6.png',
                    title: 'Interior Design',
                    text: 'Best For Any Office & Business Interior Solution',
                    date: '25 December,2022 '
                }
            ]
        }
    }
}

Vue.createApp(NewVue).mount('#vue-box')