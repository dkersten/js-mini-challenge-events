/***** Beginning of Starter Code ****/

const playerContainer = document.querySelector(".player-container")

// render one player to the DOM
function renderPlayer(player) {
  // create an element for the outer div
  const playerDiv = document.createElement("div")

  // set attributes on the outer div
  playerDiv.className = "player"
  playerDiv.dataset.number = player.number

  // use innerHTML to create any child elements of the div
  playerDiv.innerHTML = `
    <h3>${player.name} (<em>${player.nickname}</em>)</h3>
    <img src="${player.photo}" alt="${player.name}">
    <p class="likes">${player.likes} likes</p>
    <button class="like-button">❤️</button>
  `

  // append the element to the container
  playerContainer.append(playerDiv)
}

// for each player in the array, render to the DOM
PLAYERS.forEach(renderPlayer)

/***** End of Starter Code ****/




/***** Deliverable 1 *****/
function toggleColor(element) {
  if (element.style.color === "red") {
    element.style.color = "black"
  } else {
    element.style.color = "red"
  }
}

const header = document.querySelector('#header')
header.addEventListener('click', (e) => {
  toggleColor(document.querySelector("h1#header"))
})

/***** Deliverable 2 *****/

const playerSubmissionForm = document.querySelector('#new-player-form')

playerSubmissionForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const playerNumber = e.target.number.value
  const playerName = e.target.name.value
  const playerNickname = e.target.nickname.value
  const playerPhoto = e.target.photo.value
  const playerFromForm = {
    number: playerNumber,
    name: playerName,
    nickname: playerNickname,
    photo: playerPhoto,
    likes: 1000
  }
  renderPlayer(playerFromForm)
  e.target.reset()
})

/***** Deliverable 3 *****/

playerContainer.addEventListener("click", (e) => {
  console.log(e.target)
  if (e.target.className === 'like-button') {
    
    const currentPlayer = e.target.parentNode
    let playerLikes;

    for (let i = 0; i < currentPlayer.childNodes.length; i++) {
      if (currentPlayer.childNodes[i].className == "likes") {
        playerLikes = currentPlayer.childNodes[i]
        
        const playerLikesArr = playerLikes.textContent.split(" ")
        // console.log(parseInt(playerLikesArr[0]))
        let currentLikes = parseInt(playerLikesArr[0])
        currentLikes += 1
        playerLikes.textContent = `${currentLikes} likes`
      }
    }
  }
})