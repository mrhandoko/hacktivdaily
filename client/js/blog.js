$(document).ready(function () {
  loadData()
})

function loadData () {
  $.ajax({
    url: 'http://localhost:3000/api/articles',
    type: 'GET',
    success: (articles) => {
      $('#blogs').empty()
      articles.forEach((article) => {
        $('#blogs').append(
          `<div class="col-lg-3 col-md-3 col-sm-4" style="margin-right: 50px;">
        </div>
        <div class="article">
          <div class="col-lg-6 entry">
            <div class="title">
              <h2>${article.title}</h2>
            </div>
            <div class="POST">
              <figure data-orig-width="2280" data-orig-height="1144" class="tmblr-full" style="margin-bottom:30px">
                <img src="${article.image}" alt="image" width="540" height="271">
              </figure>
              <p>${article.content}
                <br>
              </p>
              </div>
          </div>
          <div class="col-lg-2">
            <div class="date">${article.createdAt}</div>
            <div class="tweet share-link clearfix">
              <button class="btn-default" style="border: 1px solid transparent;" onclick="updateArticle('${article.slug}')">Edit</button> <button class="btn-info" style="border: 1px solid transparent;" onclick="removeArticle('${article.slug}')">Delete</button>
            </div>
          </div>
        </div>
        <div class="row" style="margin-top:50px; margin-bottom:50px"><hr></div>
      </div>`)
      })
    }
  })
}

let updateArticle = (slug) => {
  $.ajax({
    url: 'http://localhost:3000/api/article/' + slug,
    type: 'PUT',
    success: (articles) => {
      loadData()
    }
  })
}

let removeArticle = (slug) => {
  $.ajax({
    url: 'http://localhost:3000/api/article/' + slug,
    type: 'DELETE',
    success: () => {
      alert('someting')
      loadData()
    }
  })
}
