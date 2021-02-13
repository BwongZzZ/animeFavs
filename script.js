// https://jikan.docs.apiary.io/#

const animeApp = {};

animeApp.getAnime = function(anime) {
    $.ajax({
        url: `https://api.jikan.moe/v3/search/anime?q=${anime}&limit=1`,
        method:`GET`,
        dataType: `json`,
    })
    .then(function(res) {
        animeApp.displayAnime(res.results);
        console.log(res.results);
    })
}

animeApp.searchAnimeTitle = function() {
    $(`.searchBar`).on(`submit`, function(event){
        event.preventDefault();
        const searchedAnimeTitle = $(`#search`).val();
        animeApp.getAnime(searchedAnimeTitle);
    })
}

animeApp.displayAnime = function(animeArrayinfo) {
    animeArrayinfo.forEach(function(animeData){
        console.log(animeData);
        let animeContent = 
            `<ul>
                <li>
                    <h2>${animeData.title}</h2>
                    <img src="${animeData.image_url}" alt="${animeData.title}">
                </li>
            </ul> `;
        $(`.searchedAnimeContent`).append(animeContent);
    });
}


animeApp.init = function() {
    animeApp.searchAnimeTitle();
}

$(document).ready(function() {
    animeApp.init();
});