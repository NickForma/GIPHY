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

  topics.forEach(function(e) {
    console.log(e);
    $(".button-section").append(
      `<button class="gif-btn">${e}</button>
            `
    );
  });

  $(".button-section").on("click", ".gif-btn", function(e) {
    let term = e.currentTarget.innerText
    console.log(term);
    gifSearch(term)
  });

  const gifSearch = function(term) {
    let API = "J5Lbvrnv1kH2UiPQyYqRPk7KUEiiTc6K";
    let url =
      `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${term}&limit=10`;

    $.ajax({
      method: "GET",
      url: url
    }).then(function(response) {
      writeMemes(response)
      
    });

  };
    const writeMemes = function(data){
        data.data.forEach(function(image){
            console.log(image.images.fixed_height.url)
            
            let imageURL = image.images.fixed_height.url
            $('.image-display').append(
                `<img src="${imageURL}">
                `
            )
        })

    }

    $('#clear-btn').on('click', function(e){
      e.preventDefault();
      $('.image-display').empty()
    })

$('#search-btn').on('click', function(event){
  event.preventDefault();
  console.log(event)
})





    });
