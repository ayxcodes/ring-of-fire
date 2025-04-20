import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnChanges {
  cardAction = [
    { title: 'Waterfall', description: 'All players start drinking simultaneously. No player can stop drinking until the player to their right has also stopped or their drink is empty. The person who drew is the first to decide when to stop drinking.'},
    { title: 'You', description: 'You decide who drinks.'},
    { title: 'Me', description: 'Congrats! Take a shot!'},
    { title: 'Category', description: 'Come up with a category (e.g. Colors). Each player must enumerate one item from the category, until one can`t name an item anymore. That person has to drink.'},
    { title: 'Bust a jive', description: 'Player 1 makes a dance move. Player 2 repeats the dance move and adds a second one and so on. The person who can`t dance all moves has to drink.'},
    { title: 'Chicks', description: 'All girls drink. Cheers!'},
    { title: 'Heaven', description: 'Put your hands up! The last player drinks.'},
    { title: 'Mate', description: 'Pick a mate! You won`t be drinking alone anymore.'},
    { title: 'Thumbmaster', description: 'You`re the new Thumbmaster! Whenever you put your thumb on the edge of the table, all other players must also put their thumb on the edge of the table. The last player to do so must drink! You stay the Thumbmaster until the next one is declaired or the game is over.'},
    { title: 'Men', description: 'All men drink!'},
    { title: 'Quizmaster', description: 'You`re the Quizmaster! You can ask any question/s you like. Whenever you get an answer, whether it`s right or wrong, that player has to drink! You stay the Quizmaster until the next one is declaired or the game is over.'},
    { title: 'Never have I ever...', description: 'Say something you`ve never done. Everyone who did it has to drink.'},
    { title: 'Rule', description: 'Make a rule. Everyone needs to drink when he breaks the rule.'}
  ];
  title: string = '';
  description: string = '';

  @Input() card: string = '';

  ngOnChanges(): void {
    let cardNumber = +this.card.split('_')[1];
    
    if (this.card) {
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }
}