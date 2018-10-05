const osmosis = require('osmosis');
const axios = require('axios');

const albums = [];
const scores = [];
const artists = [];
const data = [];

osmosis.get('https://www.metacritic.com/browse/albums/genre/date/rap') // url of the site you want to scrape  
  .find('.product_title')
  .set('album') 
  .find('.product_score')
  .set('score') 
  .find('.product_artist span.data')
  .set('artist') 
  .data(function(results) { 
    scores.push(parseInt(results['score']));
    albums.push(results['album']);
    artists.push(results['artist']);
  })
  .done(function() {
    const count = 29;
    for (let i = 0; i < albums.length; i++) {
      const albumName = albums[i * count];
      const artist = artists[i - 1];
      const score = scores[i];

      if ((typeof albumName !== "undefined")) {
        const dataObject = {
          header: albumName,
          content: score,
          subHeader: artist,
        };
  
        const arrayNames = [];
        data.forEach((object) => {
          arrayNames.push(object["header"]);
        })

        const currentName = dataObject["header"];

        if ((arrayNames.indexOf(currentName) === -1)) {
          data.push(dataObject);
        }
      }
    }

    const filteredData = [];

    for (let i = 0; i < data.length; i++) {
      if (data[i]["content"] > 80) {
        filteredData.push(data[i]);
      }
    }

    axios.post('https://spotacritic.firebaseio.com/albums.json', filteredData)
      .then(response => {
        console.log('Git');
        // console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  });

