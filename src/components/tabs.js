import axios from "axios"



const Tabs = (topics) => {
  const divTop = document.createElement('div')
  const java = document.createElement('div')
  const boot = document.createElement('div')
  const tech = document.createElement('div')
  const jq = document.createElement('div')
  const node = document.createElement('div')


  divTop.classList.add('topics')
  java.classList.add('tab')
  boot.classList.add('tab')
  tech.classList.add('tab')
  jq.classList.add('tab')
  node.classList.add('tab')


  divTop.appendChild(java)
  divTop.appendChild(boot)
  divTop.appendChild(tech)
  divTop.appendChild(jq)
  divTop.appendChild(node)

  java.textContent = topics[0]
  boot.textContent = topics[1]
  tech.textContent = topics[2]
  jq.textContent = topics[3]
  node.textContent = topics[4]



  return divTop


}

const tabsAppender = (selector) => {
  axios.get(`http://localhost:5000/api/topics`)
    .then(res => {
      const tabsData = res.data.topics;
      console.log(tabsData)

      const tabsArray = document.querySelector(selector)
      tabsArray.appendChild(Tabs(tabsData))
    })

}

export { Tabs, tabsAppender }



  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
   // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //