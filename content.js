

if (window.location.href.includes("bookings.class4kids.co.uk/dashboard")) {

  var bottomDiv = document.createElement('div');
  bottomDiv.style.width = "100%";
  bottomDiv.style.height = "100px"
  bottomDiv.style.bottom = "0";
  bottomDiv.style.position = "fixed";
  bottomDiv.style.right = "0";
  bottomDiv.style.backgroundColor = "#82C8EC"
  // bottomDiv.style.display = "flex";
  // bottomDiv.style.flexDirection = "column"

  var content = document.createElement('h3');
  var mapLink = document.createElement('a');
  mapLink.href = "https://www.google.com/maps/dir/@55.8632856,-4.2585823,17z/data=!3m1!4b1!4m9!4m8!1m0!1m5!1m1!1s0x488844208e3f2ad5:0x4b7353bf493fa909!2m2!1d-4.2563936!2d55.8632826!3e2"
  mapLink.innerText = "🚗 Map my route"
  mapLink.style.margin = "5px";
  mapLink.style.float = "right"

  content.style.margin = "5px"
  content.innerText = "Map my route to Evie's class today";

  bottomDiv.appendChild(content)
  bottomDiv.appendChild(mapLink)

  var body = document.querySelector('body');
  body.style.minHeight = "100%"
  body.appendChild(bottomDiv)

}
