import { reactive } from 'vue';

export const store = reactive ({
    search:'',
    apiKey:'593d4692295e254b6872a1dcc6ad14ae',
    Urlmovie:'https://api.themoviedb.org/3/search/movie',
    Urlserie:'https://api.themoviedb.org/3/search/tv',
    film: [],
    series:[],
});