const NewVue = {
    data() {
        return {
            filterTag: '',
            filterTags: [
                {
                    name: 'Kitchen',
                    checked: false
                },
                {
                    name: 'Bedroom',
                    checked: false
                }],
            articles: [
                {
                    title: 'Let’s Get Solution for Building Construction Work',
                    img: '../img/kitchenPhoto1.png',
                    altImg: 'Kitchen',
                    date: '26 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.`,
                    quote: `The details are not the details.
                    They make the design.`
                },
                {
                    title: 'Design sprints are great',
                    img: '../img/kitchenPhoto2.png',
                    altImg: 'Kitchen',
                    date: '29 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.`,
                    quote: ``
                },
                {
                    title: 'Neoclassical-style bedroom',
                    img: '../img/bedroomPhoto1.jpg',
                    altImg: 'Bedroom',
                    date: '30 December,2022',
                    section: 'Interior / Home / Decore',
                    text: `Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                    turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem
                    Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or
                    randomised words which don't look even slightly believable.

                    Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                    to repeat predefined chunks as necessary.`,
                    quote: ``
                },

            ]
        }
    },
    computed: {
        filterArticles() {
            // return this.articles.filter(article => article.altImg.includes(this.filterTag))
            const selectedTags = this.filterTags.filter(tag => tag.checked).map(tag => tag.name);
            if (selectedTags.length === 0) {
                return this.articles;
            } else {
                return this.articles.filter(article => selectedTags.includes(article.altImg));
            }
        }
    }
};

Vue.createApp(NewVue).mount('#vue-box');

