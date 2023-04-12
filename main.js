class Start {
    constructor() {
        this.yourname = "Hj.DEDE"
        this.comname = "NYi DEDE"
        this.yourOption;
        this.comOption;
        this.wingame = ""
    }


    get getYourOption() {
        return this.yourOption
    }
    set setYourOption(option) {
        this.yourOption = option;
    }
    get getcomOption() {
        return this.comOption
    }
    set getcomOption(option) {
        this.comOption = option;
    }


    result() {
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
}



function OptionPick(fingger) {
    const start = new Start();

    console.log(start.yourOption);
}
