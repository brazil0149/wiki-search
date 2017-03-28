 $("#field").keyup(function(e){
        var q = $("#field").val();
        $.getJSON("http://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
          $("#results").empty();
          $("#results").append(q + "<hr>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div><a href='http://en.wikipedia.org/wiki/" +encodeURIComponent(item.title) + "'>" + item.title + " "+ "</a>"+ item.snippet + "<hr>" + "</div>").attr('target','_blank');
          });
        });
      });