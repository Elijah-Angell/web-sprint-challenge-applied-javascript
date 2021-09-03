import axios from "axios"



const Card = (article) => {
  const Cards = document.createElement('div')
  const headDiv = document.createElement('div')
  const auth = document.createElement('div')
  const imgCon = document.createElement('div')
  const img = document.createElement('img')
  const by = document.createElement('span')


  Cards.classList.add('card')
  headDiv.classList.add('headline')
  auth.classList.add('author')
  imgCon.classList.add('img-container')



  Cards.appendChild(headDiv)
  Cards.appendChild(auth)
  auth.appendChild(imgCon)
  imgCon.appendChild(img)
  auth.appendChild(by)


  headDiv.textContent = article.headline

  img.src = article.authorPhoto

  by.textContent = `by ${article.authorName}`

  Cards.addEventListener('click', () => {
    Cards.classList.toggle('card')
  })



  return Cards

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}

const cardAppender = (selector) => {

  const card = document.querySelector(selector);

  axios.get('http://localhost:5000/api/articles').then((res) => {
    console.log(res)

    const bootstrap = res.data.articles.bootstrap;
    bootstrap.forEach(element => {
      card.appendChild(Card(element))
    })



    const jp = res.data.articles.javascript;
    jp.forEach(element => {
      card.appendChild(Card(element))
    })

    const jq = res.data.articles.jquery;
    jq.forEach(element => {
      card.appendChild(Card(element))
    })

    const node = res.data.articles.node;
    node.forEach(element => {
      card.appendChild(Card(element))
    })

    const tech = res.data.articles.technology;
    tech.forEach(element => {
      card.appendChild(Card(element))
    })

  }).catch((err) => {
    console.log(err);
  })



  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
