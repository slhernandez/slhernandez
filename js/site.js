document.addEventListener("DOMContentLoaded", function () {
  console.log('page has loaded...');
  /*
  * Function to rebind the load more button 
  */
  const bindLoadMore = () => {
    const loadBtn = document.querySelector(".load-more");
    loadBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      appendTeasers(loadBtn);
    });
  }

  var appendTeasers = (loadBtn) => {
    console.log('entered appendTeasers...');
    console.log('loadBtn', loadBtn);
    const url = loadBtn.querySelector('a').getAttribute('href');
    console.log('url...', url);
    /*$.get(moreBtn.find('a').attr('href'), function(data) {
      // Look for all articles
      var teasers = $(data).find('article');
      var $load_more = $(data).find('.load-more');
      $('.load-more').remove();
      $('.teaser').append(teasers);
      teaserSequence(teasers);
      $($load_more).insertAfter('.teaser');
      bindLoadMore();
    });*/
  }

  bindLoadMore();
});