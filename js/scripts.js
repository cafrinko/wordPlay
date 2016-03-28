$(document).ready(function() {
  $("form#list").submit(function(event) {
    var input = 'item'
    var sentences = $("input#item").val();
    var sentencesSplit = sentences.split(" ");

    var looptySatan = sentencesSplit.map(function(sentence) {
      return sentence.length(loopySatan, 3);
    });
    alert(looptySatan);
  });
});
