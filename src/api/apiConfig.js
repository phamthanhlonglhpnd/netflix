const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'c02b4ce936a500b44dccb36beac531ce',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;