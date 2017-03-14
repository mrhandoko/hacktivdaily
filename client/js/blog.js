$($(document).ready(function () {
  $.ajax({
    url: 'http://localhost:3000/api/articles',
    type: 'GET',
    success: (articles) => {
      $.each(articles, (index, value) => {
        $('#blogs').append
      })

    //   <div class="col-lg-3 col-md-3 col-sm-4" style="margin-right: 50px;">
    //   </div>
    //   <div class="article">
    //     <div class="col-lg-6 entry">
    //       <div class="title">
    //         <h2>Learn CSS Flexbox with Flexbox Froggy</h2>
    //       </div>
    //       <div class="POST">
    //         <figure data-orig-width="2280" data-orig-height="1144" class="tmblr-full" style="margin-bottom:30px">
    //           <img src="https://cdn.techinasia.com/wp-content/uploads/2016/03/coding-924920_1920.jpg" alt="image" width="540" height="271">
    //         </figure>
    //         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    //           Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //           Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    //           sunt in culpa qui officia deserunt mollit anim id est laborum.
    //           <br>
    //         </p>
    //         </div>
    //     </div>
    //     <div class="col-lg-2">
    //       <div class="date"><a href="http://news.bootswatch.com/post/140408176236/learn-css-flexbox-with-flexbox-froggy">3 March 2016</a></div> <!-- .date -->
    //       <div class="tweet share-link clearfix"><iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true" class="twitter-share-button twitter-share-button-rendered twitter-tweet-button" title="Twitter Tweet Button" src="http://platform.twitter.com/widgets/tweet_button.a0ec3119d8db2bc5422f2144c89ad7a9.en.html#dnt=false&amp;id=twitter-widget-0&amp;lang=en&amp;original_referer=http%3A%2F%2Fnews.bootswatch.com%2F&amp;size=m&amp;text=Learn%20CSS%20Flexbox%20with%20Flexbox%20Froggy&amp;time=1489467991090&amp;type=share&amp;url=http%3A%2F%2Fnews.bootswatch.com%2Fpost%2F140408176236%2Flearn-css-flexbox-with-flexbox-froggy&amp;via=bootswatch" style="position: static; visibility: visible; width: 61px; height: 20px;" data-url="http://news.bootswatch.com/post/140408176236/learn-css-flexbox-with-flexbox-froggy"></iframe>
    //       </div>
    //     </div>
    //   </div>
    //   <div class="row" style="margin-top:50px; margin-bottom:50px"><hr></div>
    // </div>
    }
  })
}))
