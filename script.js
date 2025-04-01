const story = {
    start: {
        text: "You wake up in a forest. Which way do you go?",
        choices: ["Left", "Right"],
        consequence: ["left_path", "right_path"],
        image: "images/start.jpg"
    },
    left_path: {
        text: "You encounter a river. Cross or follow it?",
        choices: ["Cross", "Follow"],
        consequence: ["cross_river", "follow_river"],
        image: "images/river.jpg"
    },
    right_path: {
        text: "You find a cave. Enter or keep walking?",
        choices: ["Enter", "Walk"],
        consequence: ["enter_cave", "keep_walking"],
        image: "images/cave.jpg"
    },
    cross_river: {
        text: "You made it across safely. You win!",
        choices: [],
        consequence: [],
        image: "images/safe.jpg"
    },
    follow_river: {
        text: "You get lost in the wilderness. Game Over.",
        choices: [],
        consequence: [],
        image: "images/lost.jpg"
    },
    enter_cave: {
        text: "A bear attacks! Game Over.",
        choices: [],
        consequence: [],
        image: "images/bear.jpg"
    },
    keep_walking: {
        text: "You find a village and are safe. You win!",
        choices: [],
        consequence: [],
        image: "images/village.jpg"
    }
};

let currentStage = 'start';

function startGame() {
    currentStage = 'start';
    updatePage();
}

function updatePage() {
    const stage = story[currentStage];
    document.getElementById('story').innerText = stage.text;
    document.getElementById('story-image').src = stage.image;
    
    const choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    stage.choices.forEach((choice, index) => {
        const button = document.createElement('button');
        button.innerText = choice;
        button.onclick = () => {
            currentStage = stage.consequence[index];
            updatePage();
        };
        choicesDiv.appendChild(button);
    });
}

startGame();
