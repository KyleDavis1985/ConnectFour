//Global Variables
const winningPatterns = [
  [0, 1, 2, 3],
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [6, 7, 8, 9],
  [7, 8, 9, 10],
  [8, 9, 10, 11],
  [12, 13, 14, 15],
  [13, 14, 15, 16],
  [14, 15, 16, 17],
  [18, 19, 20, 21],
  [19, 20, 21, 22],
  [20, 21, 22, 23],
  [24, 25, 26, 27],
  [25, 26, 27, 28],
  [26, 27, 28, 29],
  [30, 31, 32, 33],
  [31, 32, 33, 34],
  [32, 33, 34, 35],
  [36, 37, 38, 39],
  [37, 38, 39, 40],
  [38, 39, 40, 41],
  [0, 6, 12, 18],
  [6, 12, 18, 24],
  [12, 18, 24, 30],
  [18, 24, 30, 36],
  [1, 7, 13, 19],
  [7, 13, 19, 25],
  [13, 19, 25, 31],
  [19, 25, 31, 37],
  [2, 8, 14, 20],
  [8, 14, 20, 26],
  [14, 20, 26, 32],
  [20, 26, 32, 38],
  [3, 9, 15, 21],
  [9, 15, 21, 27],
  [15, 21, 27, 33],
  [21, 27, 33, 39],
  [4, 10, 16, 22],
  [10, 16, 22, 28],
  [16, 22, 28, 34],
  [22, 28, 34, 40],
  [5, 11, 17, 23],
  [11, 17, 23, 29],
  [17, 23, 29, 35],
  [23, 29, 35, 41],
  [3, 8, 13, 18],
  [4, 9, 14, 19],
  [9, 14, 19, 24],
  [5, 10, 15, 20],
  [10, 15, 20, 25],
  [15, 20, 25, 30],
  [11, 16, 21, 26],
  [16, 21, 26, 31],
  [21, 26, 31, 36],
  [17, 22, 27, 32],
  [22, 27, 32, 37],
  [23, 28, 33, 38],
  [2, 9, 16, 23],
  [1, 8, 15, 22],
  [8, 15, 22, 29],
  [0, 7, 14, 21],
  [7, 14, 21, 28],
  [14, 21, 28, 35],
  [6, 13, 20, 27],
  [13, 20, 27, 34],
  [20, 27, 34, 41],
  [12, 19, 26, 33],
  [19, 26, 33, 40],
  [18, 25, 32, 39]
]
let gameMode = 1
let currentPlayer = 1
const gameModeDisplay = document.querySelector('.gameModeDisplay')
const statusDisplay = document.querySelector('.statusDisplay')
const gameGrid = document.querySelectorAll('.circle')
const triggers = document.querySelectorAll('.arrow')
const refreshScore = document.querySelector('.refresh')
const refreshGame = document.querySelector('.refreshGame')
const toggle = document.querySelector('.computer')
const playerOneTally = document.querySelector('.scoreboard').children[3]
const playerTwoTally = document.querySelector('.scoreboard').children[4]
const tieTally = document.querySelector('.scoreboard').children[5]

const mouseOver = (e) => {
  if (
    currentPlayer === 1 &&
    statusDisplay.innerText === "It's Player 1's Turn"
  ) {
    e.target.classList = 'player-one'
    e.target.innerText = ''
  } else if (
    currentPlayer === 2 &&
    statusDisplay.innerText === "It's Player 2's Turn"
  ) {
    e.target.classList = 'player-two'
    e.target.innerText = ''
  }
}

const mouseOut = (e) => {
  e.target.classList = 'arrow'
  e.target.innerText = 'Click Here ⬇'
}

const buttonClicked = (e) => {
  const id = e.target.id
  if (id === '0') {
    for (let i = 5; i > -1; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '1') {
    for (let i = 11; i > 5; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '2') {
    for (let i = 17; i > 11; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '3') {
    for (let i = 23; i > 17; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '4') {
    for (let i = 29; i > 23; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '5') {
    for (let i = 35; i > 29; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  } else if (id === '6') {
    for (let i = 41; i > 35; i--) {
      if (gameGrid[i].id === 'empty' && currentPlayer === 1) {
        currentPlayer = 2
        gameGrid[i].id = 'player-one'
        break
      } else if (gameGrid[i].id === 'empty' && currentPlayer === 2) {
        currentPlayer = 1
        gameGrid[i].id = 'player-two'
        break
      }
    }
  }
  playerDisplay()
  winningCondition()
  computerMode()
}

const playerDisplay = () => {
  if (currentPlayer === 1) {
    statusDisplay.innerText = "It's Player 1's Turn"
    statusDisplay.style.color = '#fcf75e'
  } else if (currentPlayer === 2) {
    statusDisplay.innerText = "It's Player 2's Turn"
    statusDisplay.style.color = '#ed2939'
  }
}

const gameModeToggle = () => {
  refreshBoard()
  if (toggle.innerText === 'Play Against the Computer') {
    toggle.innerText = 'Play Against a Friend'
    gameModeDisplay.innerText = 'Currently Playing Against the Computer'
  } else if (toggle.innerText === 'Play Against a Friend') {
    toggle.innerText = 'Play Against the Computer'
    gameModeDisplay.innerText = 'Currently Playing Against a Friend'
  }
  refreshScoreboard()
}

const computerMode = () => {
  const randomIndex = Math.floor(Math.random() * triggers.length)
  if (currentPlayer === 2 && toggle.innerText != 'Play Against the Computer') {
    setTimeout(() => {
      triggers[randomIndex].click()
    }, 500)
  }
}

const winningCondition = () => {
  for (let i = 0; i < winningPatterns.length; i++) {
    if (
      gameGrid[winningPatterns[i][0]].id === 'player-one' &&
      gameGrid[winningPatterns[i][1]].id === 'player-one' &&
      gameGrid[winningPatterns[i][2]].id === 'player-one' &&
      gameGrid[winningPatterns[i][3]].id === 'player-one'
    ) {
      statusDisplay.innerText = 'Player 1 Has Won the Game!'
      statusDisplay.style.color = '#fcf75e'
    } else if (
      gameGrid[winningPatterns[i][0]].id === 'player-two' &&
      gameGrid[winningPatterns[i][1]].id === 'player-two' &&
      gameGrid[winningPatterns[i][2]].id === 'player-two' &&
      gameGrid[winningPatterns[i][3]].id === 'player-two'
    ) {
      statusDisplay.innerText = 'Player 2 Has Won the Game!'
      statusDisplay.style.color = '#ed2939'
    }
  }
  tieCondition()
  disableBoard()
}

const tieCondition = () => {
  let tieTally = 0
  let filled = 0
  for (let i = 0; i < gameGrid.length; i++) {
    if (gameGrid[i].id != 'empty') filled++
  }
  if (filled === 42) {
    statusDisplay.innerText = "It's a Tie Game!"
    tieTally++
  }
  scoreboard()
  disableBoard()
}

const scoreboard = () => {
  if (statusDisplay.innerText === 'Player 1 Has Won the Game!') {
    playerOneTally.innerText++
  } else if (statusDisplay.innerText === 'Player 2 Has Won the Game!') {
    playerTwoTally.innerText++
  } else if (statusDisplay.innerText === "It's a Tie Game!")
    tieTally.innerText++
}

const disableBoard = () => {
  if (
    statusDisplay.innerText === 'Player 1 Has Won the Game!' ||
    statusDisplay.innerText === 'Player 2 Has Won the Game!' ||
    statusDisplay.innerText === "It's a Tie Game!"
  ) {
    triggers.forEach((triggers) =>
      triggers.removeEventListener('click', buttonClicked)
    )
  }
}

const refreshBoard = () => {
  for (let i = 0; i < gameGrid.length; i++) {
    if (gameGrid[i].id === 'player-one' || gameGrid[i].id === 'player-two') {
      gameGrid[i].id = 'empty'
    }
  }
  currentPlayer = 1
  triggers.forEach((triggers) =>
    triggers.addEventListener('click', buttonClicked)
  )
  playerDisplay()
}

const refreshScoreboard = () => {
  playerOneTally.innerText = '0'
  playerTwoTally.innerText = '0'
  tieTally.innerText = '0'
}

//Event Listeners
refreshGame.addEventListener('click', refreshBoard)
refreshScore.addEventListener('click', refreshScoreboard)
toggle.addEventListener('click', gameModeToggle)
triggers.forEach((triggers) =>
  triggers.addEventListener('click', buttonClicked)
)
triggers.forEach((triggers) =>
  triggers.addEventListener('mouseover', mouseOver)
)
triggers.forEach((triggers) => triggers.addEventListener('mouseout', mouseOut))
