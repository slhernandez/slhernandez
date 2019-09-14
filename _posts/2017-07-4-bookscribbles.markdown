---
layout: post
title: Bookscribbles
blurb: Design discussion on my side project called Bookscribbles.
preview-image: /images/grid/bookscribbles_grid.png
image-title: SideProject - Bookscribbles
---

Bookscribbles is a simple web app.  It keeps track of all the books you've read or currenlty reading.  Not only does it tally the number of books you have read, it will also allow you to record notes or annotations of the book.  I am currently building this app with React.js, Node.js, and Postgress.  A simple technology stack that is currently hosted on AWS using S3, RDS and EC2.  The main page of the app displays each book on a minimalist bookshelf.  Each book is represented by it's cover with a popover dialog that displays a brief description.  The simple grid layout only shows 4 books per row and the date it was included in the app.  When you add a book to bookscribbles, you have the option to assign the book as currently reading.  The designation will help you keep track of books that haven't been completely finished.  The app is being built for active readers.  Active readers tend to read several books at a time.  Things get interesting when a user clicks on a book.  

<div class="post-image border-image">
  <a href="/images/posts/bookscribbles/inline_details_bs.png" data-imagelightbox="b"><img src="/images/posts/bookscribbles/inline_details_bs.png" title="Book details inline view" alt="Book details inline view"/></a>
  <p class="caption">Book details using a Netflix style inline view.</p>
</div>

Displaying the book details in this format is an experiment. Netflix was definitely an inspiration with their own click drawer interface.  The standard default for reviewing book details will be a separate page.  But this drawer will be an option if the user decides to hover their mouse pointer near the bottom of book cover.  Below is how the full details page will be displayed.

<div class="post-image border-image">
  <a href="/images/posts/bookscribbles/full_details_bs.png" data-imagelightbox="b"><img src="/images/posts/bookscribbles/full_details_bs.png" title="Full page book details" alt="Full page book details"/></a>
  <p class="caption">Full page layout for book details.</p>
</div>

The project details page will consists of two work areas for the user.  Both which can be considered as note taking actions.  Users can enter click the vocabulary builder and enter words they have learned.  Any passages or main topics that were important to the book can be entered within My Scribbles section.  The editing will use content editable and have a Medium like experience.    

<div class="post-image border-image">
  <a href="/images/posts/bookscribbles/snapshot_bs_5.png" data-imagelightbox="b"><img src="/images/posts/bookscribbles/snapshot_bs_5.png" title="Add your book" alt="Add your book"/></a>
  <p class="caption">Add a book quickly.</p>
</div>

The main component of the app is adding a book.  It's a simple modal dialog with input fields for book title, book author, and book description.  The book title will have an autocomplete component that will utilize Google books API to autocomplete the book author and book cover.  The only input field that will be required is the book title.  Bookscribbles can act as list of books you have recently.  Then expand to something more with user generated notes.  

<a class="btn" href="http://bookscribbles.com">Visit Bookscribbles.com</a>
