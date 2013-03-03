var quoter = (function(){
    var quoteData;
    var quoteFile = "js/quotes.json";

    function getData(){
        $.ajax({
            url: quoteFile,
            async: false,
            dataType: 'json'
        }).done(function(data) {
               quoteData = data;
               generateQuote(data)
        });
    }

    function generateQuote(){
        var randomnumber = Math.floor(Math.random()*quoteData['Ice King'].length),
            thisQuote = quoteData['Ice King'][randomnumber];

        $('#quoteBox').html(thisQuote.quote);
        $('#epTitle').html(thisQuote.episode.title);
        $('#season').html(thisQuote.episode.season);
        $('#episode').html(thisQuote.episode.episode);
    }

    function clickListener(element){
        $(element).on("click",function(){
            generateQuote();
            return false;            
        })
    }

    return {
        init : function(element){
            getData();
            clickListener(element);
        }
    };
})();

$(document).ready(function(){
    quoter.init('#gimmeNother');
});

