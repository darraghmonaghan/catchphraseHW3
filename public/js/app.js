
$(function() {
  pageLoad();
});

// function definitions

function pageLoad() {
  getPhrase();
}

function getPhrase() {
  $.get("/phrases", function(res){
    var phrases = res.reverse();
    //console.log(phrases);
    // grab foods template
    renderPhrases();
  });
}


function renderPhrases(phrases) {
  var template = _.template($("#phrase-template").html());
  // input foods into template and append to parent
  var posts = phrases.map(function() {
    console.log(posts);
    return template(posts);
  });
  // clear content (for repeated use)
  $("#phrase-ul").html("");
  // append foods to ul
  $("#phrase-ul").append(posts);
}











//   $.get("./home", function(res){
// //    var phrases = res.reverse();
//   });
// }


// function renderPhrases(phrases) {
//   template = _.template($("#phrases-template").html());
//   // input foods into template and append to parent
//   var phraseList = phrases.map(function(food) {
//     return template(phrases);
//   });
//   // clear content (for repeated use)
//   $("#phrase-ul").html("");
//   // append foods to ul
//   $("#phrase-ul").append(phraseList);
// }

