# Fun With JavaScript - 'StandardCard' class

This repository is for the 'StandardCard' classes used in the Fun with JavaScript series.

## Versions

1.0.0 : Initial Version


## Installation

```
npm install --save @virtuoid/standard-card
```

## Usage

```javascript
import { StandardCardRanks, StandardCardSuits, StandardCard } from '@virtuoid/standard-card';

const suit = StandardCardSuits.HEART;
const rank = StandardCardRanks.ACE;
const value = 1;                      // this can be any data type
const myCard = new StandardCard({ suit, rank, value });
```

#### Properties

(see [@virtuoid/cards](https://github.com/TheVirtuoid/fwjs-card) for properties of the inherited Card class)

No additional properties are added. However, the ```rank``` and ```suit``` properties
are limited by the enumerations of ```StandardCardRanks``` and ```StandardCardSuits``` (see below).

#### Methods

(see [@virtuoid/cards](https://github.com/TheVirtuoid/fwjs-card) for methods of the inherited Card class)

No additional methods have been added.

### StandardCardSuits Enumeration

The ```suit``` property is limited by the enumeration ```StandardCardSuits```. All properties are static

#### Properties
| Name         | Description                   |
|--------------|-------------------------------|
| name         | The name of the suit          |
| abbreviation | The abbreviation for the suit |

#### Methods

| Name                                   | Returns          | Description                                                                                                                                                                                                     |
|----------------------------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| isSuit(StandardCardSuit suit) | boolean | Returns true if argument is part of the StandardCardSuit enumerated list. |

#### Enumerated Items:
```javascript
StandardCardSuits.CLUB
StandardCardSuits.DIAMOND
StandardCardSuits.HEART
StandardCardSuits.SPADES
```

### StandardCardRanks Enumeration

The ```rank``` property is limited by the enumeration ```StandardCardRanks```. All properties are static

#### Properties
| Name         | Description                   |
|--------------|-------------------------------|
| name         | The name of the rank          |
| abbreviation | The abbreviation for the rank |

#### Methods

| Name                              | Returns          | Description                                                                |
|-----------------------------------|------------------|----------------------------------------------------------------------------|
| isRank(StandardCardRank rank) | boolean | Returns true if argument is part of the StandardCardRanks enumerated list. |

#### Enumerated Items:
```javascript
StandardCardRanks.ACE
StandardCardRanks.TWO
StandardCardRanks.THREE
StandardCardRanks.FOUR
StandardCardRanks.FIVE
StandardCardRanks.SIX
StandardCardRanks.SEVEN
StandardCardRanks.EIGHT
StandardCardRanks.NINE
StandardCardRanks.TEN
StandardCardRanks.JACK
StandardCardRanks.QUEEN
StandardCardRanks.KING
```

## Github

```
https://github.com/TheVirtuoid/fwjs-standard-card
```

