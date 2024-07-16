/**
 * @jest-environment jsdom
 */
import Game from "../classes/game";

describe("Тест класса Game", () => {
  test("Тест создания экземпляра класса", () => {
    const field = document.querySelector("body");
    const game = new Game(field);
    expect(game.parentElement).toBe(field);
  });
});
