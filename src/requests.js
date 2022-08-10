
const API_KEY = "c95b5c7250079e204e0356858ae6f7d5";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks-213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
}

export default requests;