// new fullpage("#wrapper", {
//   //options here
//   autoScrolling: true,
//   scrollHorizontally: true,
// });

//methods
fullpage_api.setAllowScrolling(false);

$(document).ready(function () {
  $("#wrapper").fullpage({
	anchors: ["more-info"],
    autoScrolling: true,
    scrollHorizontally: true,
  });
});
