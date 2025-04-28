import { findHeroById } from './services/hero.service';
const hero = findHeroById(9)

console.log(hero?.name || 'No hero found');



