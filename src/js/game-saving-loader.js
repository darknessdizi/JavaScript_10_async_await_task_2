import read from './reader';
import json from './parser';
import GameSaving from './game-saving';

export default class GameSavingLoader {
  static async load() {
    const data = await read(); // возвращается Promise!
    const value = await json(data); // возвращается Promise!
    return new GameSaving(value);
  }
}
