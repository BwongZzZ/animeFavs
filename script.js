// https://jikan.docs.apiary.io/#

const animeApp = {};

animeApp.getAnime = function(anime) {
    $.ajax({
        url: `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=1`,
        method:`GET`,
        dataType: `json`,
    })
    .then(function(res) {
        // animeApp.displayAnime(res);
        console.log(res);
    })
}

animeApp.searchAnimeTitle = function() {
    $(`.searchBar`).on(`click`, function(event){
        event.preventDefault();
        const searchedAnimeTitle = $(`#search`).val();
        animeApp.getAnime(searchedAnimeTitle);
    })
}


animeApp.init = function() {
    animeApp.searchAnimeTitle();
}

$(document).ready(function() {
    animeApp.init();
});