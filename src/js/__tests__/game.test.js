describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Hello!" },
    { str: "", expected: "" },
    { str: 100, expected: 100 },
  ])("demo($str)", ({ str, expected }) => {
    expect(str).toBe(expected);
  });
});
