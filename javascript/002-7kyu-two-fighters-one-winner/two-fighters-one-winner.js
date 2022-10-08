// 7 kyu

// Two fighters, one winner.

// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

// Example:
//   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"

//   Lew attacks Harry; Harry now has 3 health.
//   Harry attacks Lew; Lew now has 6 health.
//   Lew attacks Harry; Harry now has 1 health.
//   Harry attacks Lew; Lew now has 2 health.
//   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
// function Fighter(name, health, damagePerAttack) {
//         this.name = name;
//         this.health = health;
//         this.damagePerAttack = damagePerAttack;
//         this.toString = function() { return this.name; }
// }

export function Fighter(name, health, damagePerAttack) {
  (this.name = name),
    (this.health = health),
    (this.damagePerAttack = damagePerAttack),
    (this.toString = function toString() {
      return this.name;
    });
}

export function declareWinner(fighter1, fighter2, firstAttacker) {
  if (!fighter1 || !fighter2 || !firstAttacker) {
    throw new Error(
      "two fighters and first attacker name must be provided as parameters"
    );
  }

  if (!(fighter1 instanceof Fighter) || !(fighter2 instanceof Fighter)) {
    throw new Error(
      "first two parameters must be instances of factory function Fighter"
    );
  }

  if (
    firstAttacker !== fighter1.toString() &&
    firstAttacker !== fighter2.toString()
  ) {
    throw new Error(
      "first attacker name must match the name of any of the fighters provided"
    );
  }

  let attacker = fighter1;
  let defender = fighter2;
  let aux = {};

  if (firstAttacker === fighter2.toString()) {
    attacker = fighter2;
    defender = fighter1;
  }

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;
    let attackerName = attacker.toString();
    let defenderName = defender.toString();
    if (defender.health > 0) {
      console.log(
        `${attackerName} attacks ${defenderName}; ${defenderName} now has ${defender.health} health.`
      );
      aux = attacker;
      attacker = defender;
      defender = aux;
    } else {
      console.log(
        `${attackerName} attacks ${defenderName}: ${defenderName} now has ${defender.health} health and is dead. ${attackerName} wins.`
      );
      return attackerName;
    }
  }
}
