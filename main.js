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
        if (this.yourOption == "✊" && this.comOption == "🖖") {
            this.wingame = this.yourname
        } else if (this.yourOption == "✊" && this.comOption == "🖐️") {
            this.wingame = this.comname;
        } else if (this.yourOption == "🖖" && this.comOption == "🖐️") {
            this.wingame = this.yourname
        } else if (this.yourOption == "🖖" && this.comOption == "✊") {
            this.wingame = this.comname;
        } else if (this.yourOption == "🖐️" && this.comOption == "✊") {
            this.wingame = this.yourname
        } else if (this.yourOption == "🖐️" && this.comOption == "🖖") {
            this.wingame = this.comname;
        } else {
            return this.wingame = 'Draw'
        }
    }

    comProses() {
        const option = ["✊", "🖖", "🖐️"];
        const bot = option[Math.floor(Math.random() * option.length)];
        return bot;
    }

    macthresult() {
        if (this.wingame !== 'Draw') {
            return `${this.wingame} Won 😎`;
        } else {
            return `${this.wingame} 😮‍💨`;
        }
    }
}

function OptionPick(fingger) {
    const start = new Start();
    start.setYourOption = fingger;
    start.setComOption = start.comProses();
    start.winresult();

    // const ingame = document.getElementById("ingame");
    const outgame = document.getElementById("outgame");
    const player = document.getElementById("player");
    const computer = document.getElementById("computer");

    // ingame.textContent = "..."
    outgame.textContent = "🤔"

    setTimeout(() => {
        player.textContent = `${start.getYourOption}`
        computer.textContent = `${start.getComOption}`
        // ingame.textContent = `${start.getYourOption} vs ${start.getComOption}`
        outgame.textContent = start.macthresult();
    }, 1000);
}
