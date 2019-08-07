$(document).ready(function() {
  //spongebob characters
  let topics = [
    "Spongebob Squarepants",
    "Squidward Tentacles",
    "Patrick Star",
    "Sandy Cheeks",
    "Gary",
    "Plankton"
  ];

  //making buttons
  const buildButtons = function() {
    $(".button-section").html("");
    $(".image-display").html("");

    topics.forEach(function(e) {
      console.log(e);
      $(".button-section").append(
        `<button class="gif-btn">${e}</button>
        `
      );
    });
  };

  $(".button-section").on("click", ".gif-btn", function(e) {
    let term = e.currentTarget.innerText;
    console.log(term);
    $(".image-display").html("");
    gifSearch(term);
  });

  const gifSearch = function(term) {
    let API = "J5Lbvrnv1kH2UiPQyYqRPk7KUEiiTc6K";
    let url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${term}&limit=10`;

    $.ajax({
      method: "GET",
      url: url
    }).then(function(response) {
      writeMemes(response);
      console.log(response)
    });
  };

  buildButtons();

  const writeMemes = function(data) {
    data.data.forEach(function(image) {
      //animated and still url
      let imageURL = image.images.fixed_height.url;
      let url = image.images.fixed_height_still.url;

      $(".image-display").prepend(
        `
          <img class="gif" src="${url}" data-still=${url} data-animate=${imageURL} data-state="still">
        
                `
      );
    });
  };

  $("#search-btn").on("click", function(event) {
    event.preventDefault();
    let term = $(".search").val();
    console.log(term);
    topics.push(term);
    buildButtons();
  });

  $("#clear-btn").on("click", function(e) {
    e.preventDefault();
    $(".image-display").empty();
  });

$('.image-display').on('click', '.gif', function(){
    let state = $(this).attr('data-state')
    console.log(this);

    if (state === 'still') {
      $(this).attr({
        src: this.dataset.animate,
        'data-state': 'animated'
      })
    }else {
      $(this).attr({
        src: this.dataset.still,
        'data-state': 'still'
      })
    }

})

});
