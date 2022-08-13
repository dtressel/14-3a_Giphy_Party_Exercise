$('form').submit(getGif);
$('#remove-button').click(removeGifs);

async function getGif(e) {
    e.preventDefault();
    let search = $('#search-input').val();
    $('#search-input').val('');
    let results = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${search}&api_key=Z3XBT3GytsLCzbu2wlXm22EssNSoL6cZ`);
    let index = Math.floor(Math.random() * results.data.data.length);
    let $gif = $('<img>').attr('src', results.data.data[index].images.fixed_height.url);
    $('#gif-div').append($gif);
}

function removeGifs() {
    $('#gif-div').empty();
}