const Header = (title, date, temp) => {
  const header = document.createElement('div')
  const Date = document.createElement('span')
  const Title = document.createElement('h1')
  const Temp = document.createElement('span')

  header.classList.add('header')
  Date.classList.add('date')
  Temp.classList.add('temp')

  header.appendChild(Date)
  header.appendChild(Title)
  header.appendChild(Temp)


  Date.textContent = date
  Title.textContent = title
  Temp.textContent = temp



  return header

}

const headerAppender = (selector) => {
  const header = Header("Lambda Time", "March 13", "60");
  document.querySelector(selector).append(header)


}

export { Header, headerAppender }



// TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //



   // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //