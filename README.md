# slhernandez.com

This repo is the source for [slhernandez.com](https://slhernandez.com), my personal site: a design and development blog plus a portfolio. It's my playground, the place where I write about visual design and the lessons I've learned. It also keeps a catalog of my personal projects and designs, so I can look back on how my design philosophy and aesthetic have changed over the years.

## What's on the site

- **[Home](https://slhernandez.com/)**: the latest posts as image cards, nine at a time. "Load More" pulls in the next nine without leaving the page.
- **[Portfolio](https://slhernandez.com/page/portfolio.html)**: nine projects, from production web apps to side projects and design experiments. Two have full case studies.
- **[Archive](https://slhernandez.com/page/archive.html)**: every post on one page, newest first, each with a one-line summary.
- **[About](https://slhernandez.com/page/about.html)**: a short bio, with links to my Dribbble and GitHub.
- **[Feed](https://slhernandez.com/feed.xml)**: an Atom feed of the latest posts.

## Writing

Eighteen posts, from 2013 to 2017, on UI design and on turning designs into working code.

### Concepts and mockups

- [iOS 7 Music Player](https://slhernandez.com/design/2013/07/09/iOS7-Music-Player.html) (2013): Rdio's desktop player, reworked as an iPhone app.
- [Movie App Mockup](https://slhernandez.com/design/2013/09/10/Movie-App.html) (2013): a movie player app for the web.
- [iOS Mail Concept](https://slhernandez.com/design/2013/11/10/iOSMail.html) (2013): my take on how an iOS mail client should look.
- [iOS Navigation](https://slhernandez.com/design/2014/02/17/iOSNavigation.html) (2014): design options for popular iOS navigation patterns.
- [Mail App Concept](https://slhernandez.com/design/2014/06/17/Mac-OS-X-Mail.html) (2014): Mac OS X Mail, reimagined after Bohemian Coding's Fonts.
- [Compact Email for Yosemite](https://slhernandez.com/design/2014/06/27/Yosemite-Compact-Mail.html) (2014): another take on a mail client for OS X Yosemite.
- [Design Exercise for Magic the Gathering](https://slhernandez.com/building,/design/2015/07/19/magic-the-gathering.html) (2015): mockups I made for a friend.

### Process

- [My Design Process](https://slhernandez.com/design/2013/10/26/Design-Process.html) (2013): how I take an idea from inspiration to sketches to a usable design.
- [Designing UI Controls](https://slhernandez.com/design/2014/03/10/Designing-UI-Kit.html) (2014): the obstacles and decisions in creating a new set of web UI controls.
- [Designing a Mobile Calendar](https://slhernandez.com/coding,/design/2014/09/29/Mobile-Calendar.html) (2014): from notebook sketches to Sketch mockups to working HTML, CSS, and JavaScript.
- [Iterative Design](https://slhernandez.com/design/2015/02/16/Design-Iteraton.html) (2015): how small changes in color and type change a design, shown through iterations of an old mail app.
- [A tale of two views](https://slhernandez.com/coding/2015/07/11/Tale-of-two-views.html) (2015): one responsive web app for desktop and mobile, instead of two separate ones.

### From design to code

- [Boilerplate for prototyping websites](https://slhernandez.com/code/2013/11/02/WebPrototype.html) (2013): my starter template for quick prototypes, with Express, Node.js, and Grunt.
- [Transforming Designs to Real Pixels](https://slhernandez.com/coding/2015/03/01/Transforming-Designs.html) (2015): turning one of my mockups into iOS code with Auto Layout's Visual Format Language and NSAttributedString.
- [Designing with Grids on iOS](https://slhernandez.com/coding/2015/05/09/Designing-with-CollectionViews.html) (2015): grid layouts with UICollectionView.
- [Implementing a playful image bounce with expansion and blur](https://slhernandez.com/coding/2015/05/17/iOS-Header-Scroll.html) (2015): recreating the Twitter app's pull-down header image for WikiBand.

### Side projects

- [WikiBand Mobile App](https://slhernandez.com/design/2014/04/06/WikiBand-App-Concept.html) (2014): early concepts for WikiBand, an app that shows Wikipedia articles about your favorite bands.
- [Bookscribbles](https://slhernandez.com/building,/design/2017/07/04/bookscribbles.html) (2017): a web app for tracking the books you read and your notes on them, built with React, Node.js, and Postgres.

## Portfolio

- **[Engage](https://slhernandez.com/portfolio/engage.html)**: a web app for evaluating experts and scheduling phone calls with them over a shared calendar. Built with Angular 1.x, Express, and Node.js.
- **[GO](https://slhernandez.com/portfolio/mobile_go.html)**: a mobile web app for finding trusted experts, designed to look and feel like a native iPhone app. Built with Polymer and web components, and packaged with Apache Cordova.

The portfolio page also lists Pop-a-Shop, Bookscribbles, SkyRocket Mail, Event Picasso, WikiBand, Music Player, and FavFlix, each with a one-line summary.

## How it's built

- **Jekyll on GitHub Pages.** Every push to `main` triggers a GitHub Pages build with the github-pages gem (currently Jekyll 3.10). There's no other CI.
- **Hand-rolled.** No theme, no npm, and no front-end build step. Every layout and include is written by hand.
- **Sass**, one partial per area of the site, compiled by Jekyll into a single stylesheet.
- **A little plain JavaScript** for the home page's in-place "Load More", using axios.
- **Posts** are Markdown files in `_posts/`. Images go through small Liquid includes for one-, two-, and three-image layouts.
