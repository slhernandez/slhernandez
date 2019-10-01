
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
    axios.get(url)
      .then(function (response) {
        teasers = document.querySelectorAll('.post-card');
        console.log('teasers ...', teasers);
        // reomve the load more button.  It should not get in the way.
        loadBtn.parentNode.removeChild(loadBtn);
        const cardContainer = document.querySelector('.post-card-container');
        console.log('cardContainer ...', cardContainer);
        for (var teaser of teasers) {
          console.log('teaser item ...', teaser);
          cardContainer.appendChild(teaser);
        }

      });
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

  /*
  * Function to display each teaser in sequence. 
  */
  /*var teaserSequence = function (teaserItems) {
    teaserItems.each(function (i) {
      $(this).delay((i++) * 500).fadeTo(1000, 1);
    });
  }*/

  //var $teasersToSequence = $('article');
  //teaserSequence($teasersToSequence)
  bindLoadMore();
});