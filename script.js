$(function() {
  $("table").tablesorter({
    // replace the OVERALL text sorter function
    textSorter: function(a, b, direction, columnIndex, table) {
      // direction: true = ascending; false = descending
      // columnIndex: zero-based index of the current table column being sorted
      // table: table DOM element (access options by using table.config)
      return a.localeCompare(b);
    }
  });

  $("img").click(function(){
  	$(this).toggleClass("bigger");
  })
  $(".plus").dblclick(function(){
  	$("img").toggleClass("bigger")
  })
});



