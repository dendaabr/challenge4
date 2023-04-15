class Start {
    constructor() {
        this.yourname = "Player"
        this.comname = "Computer"
        this.yourOption;
        this.comOption;
        this.wingame = " "
    }


    get getYourOption() {
        return this.yourOption
    }
    set setYourOption(option) {
        this.yourOption = option;
    }
    get getComOption() {
        return this.comOption
    }
    set setComOption(option) {
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

function OptionPick(fingger) {

    const start = new Start();
    start.setYourOption = fingger;
    start.setComOption = start.comProses();
    start.winresult();

    const outgame = document.getElementById("outgame");
    outgame.textContent = "🤔"

    setTimeout(() => {
        outgame.innerHTML = `<div class="caseresult">${start.macthresult()}</div>`;
    }, 1000);
}

function reload() {
    location.reload();
}