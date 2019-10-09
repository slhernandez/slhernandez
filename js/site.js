
document.addEventListener("DOMContentLoaded", function () {
  /*
  * Function to rebind the load more button 
  */
  const bindLoadMore = () => {
    const loadBtn = document.querySelector(".load-more");
    if (loadBtn) {
      loadBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        appendTeasers(loadBtn);
      });
    }
  }

  const parseHTML = (str) => {
    return document.createRange().createContextualFragment(str);
  }

  const insertAfter = (newNode, referenceNode) => {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
  }

  var appendTeasers = (loadBtn) => {
    const url = loadBtn.querySelector('a').getAttribute('href');
    axios.get(url)
      .then(function (response) {
        const htmlStr = response.data;
        const responseDom = parseHTML(response.data);
        const teasers = responseDom.querySelectorAll('.post-card');

        // find the updated load-button from page reload.
        const loadMoreBtn = responseDom.querySelector('.load-more');

        // reomve the load more button.  It should not get in the way.
        loadBtn.parentNode.removeChild(loadBtn);

        const cardContainer = document.querySelector('.post-card-container');
        for (var teaser of teasers) {
          cardContainer.append(teaser);
        }

        // add the load more button back.
        const updateLoadBtn = document.querySelector(".load-more");
        if (updateLoadBtn) {
          insertAfter(loadMoreBtn, cardContainer);
        }
      });
  }
  bindLoadMore();
});