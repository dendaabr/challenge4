class Start {
    constructor() {
        this.yourname = "Player"
        this.comname = "Computer"
        this.yourOption;
        this.comOption;
        this.wingame = " "
    }

    getYourOption() {
        return this.yourOption
    }
    setYourOption(option) {
        this.yourOption = option;
    }
    getComOption() {
        return this.comOption
    }
    setComOption(option) {
        this.comOption = option;
    }


    winresult() {
        if (this.yourOption == "rock" && this.comOption == "paper") {
            this.wingame = this.yourname
        } else if (this.yourOption == "rock" && this.comOption == "scissors") {
            this.wingame = this.comname;
        } else if (this.yourOption == "paper" && this.comOption == "scissors") {
            this.wingame = this.yourname
        } else if (this.yourOption == "paper" && this.comOption == "rock") {
            this.wingame = this.comname;
        } else if (this.yourOption == "scissors" && this.comOption == "rock") {
            this.wingame = this.yourname
        } else if (this.yourOption == "scissors" && this.comOption == "paper") {
            this.wingame = this.comname;
        } else {
            this.wingame = 'Draw'
        }
    }

    comProses() {
        const option = ["rock", "paper", "scissors"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    macthresult() {
        if (this.wingame !== 'Draw') {
            return `${this.wingame} Win`;
        } else {
            return `${this.wingame}`;
        }
    }
}

function optionPick(finger) {
    // menginisialisasi class start
    const start = new Start();

    // generate selected finger element ID
    const btnIdPlayer = `player_${finger}`;


    // memanipulasi/ mengganti kelas finger (player) menjadi hand active
    document.getElementById(btnIdPlayer).className = "hand active";

    // menyimpan parameter finger di class Start
    start.setYourOption(finger);

    // memilih pilihan finger komputer secara acak
    const selectedComOption = start.comProses();
    const btnIdComputer = `computer_${selectedComOption}`;

    // lalu menyimpannya di variable setComOption di class 
    start.setComOption(selectedComOption);


    // Memilih penenang game
    start.winresult();

    const outgame = document.getElementById("outgame");
    outgame.textContent = "🤔"

    setTimeout(() => {
        outgame.innerHTML = `<div class="caseresult">${start.macthresult()}</div>`;
        document.getElementById(btnIdComputer).className = "hand active";

//document.getElementById("hand").disabled = true;//
    }, 1000;
}
// Reset btn
const Reset = document.getElementById('reset');

// Reset btn event listener
Reset.addEventListener("click", function (e) {

  location.reload();

  e.preventDefault();
})