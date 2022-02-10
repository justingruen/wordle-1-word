import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  listOfWords = ['a', 'i'];
  defaultLives = 6;
  livesLeft = 6;
  winWord =
    this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
  wordInBox = '';
  extra: any;
  won: any;
  boxIsEmpty: any;
  displayText: any;
  hasEasterActivated: any;

  checkWord() {
    if (this.wordInBox === '') {
      if (this.wordInBox === '' && !this.hasEasterActivated) {
        this.boxIsEmpty = true;
        this.displayText = true;
        this.hasEasterActivated = true;
        this.livesLeft = this.livesLeft - 1;
      } else if (this.wordInBox === '' && this.hasEasterActivated) {
        this.displayText = false;
      } else {
        this.boxIsEmpty = false;
      }
    } else {
      if (this.boxIsEmpty) {
        this.boxIsEmpty = false;
      }
      if (this.wordInBox !== this.winWord) {
        document.getElementById("wordInput")?.classList.add('redText');
        this.livesLeft = this.livesLeft - 1;
      } else {
        this.won = true;
      }
    }
  }

  removeColoring() {
    document.getElementById("wordInput")?.classList.remove('redText');
  }

  resetGame() {
    this.livesLeft = 6;
    this.wordInBox = '';
    this.winWord =
      this.listOfWords[Math.floor(Math.random() * this.listOfWords.length)];
    this.hasEasterActivated = false;
    this.displayText = false;
    this.won = false;
    this.boxIsEmpty = false;
    document.getElementById("wordInput")?.classList.remove('greenText');
  }
}
