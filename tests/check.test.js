import checkValue from "../src/js/check";

describe("Module checkValue tests", () => {
  let element;
  beforeEach(() => {
    element = document.createElement("div");
    element.setAttribute("id", "name");
  });

  it("Empty data returns false", () => {
    element.value = null;
    expect(checkValue(element)).toBeFalsy();
    element.value = "   ";
    expect(checkValue(element)).toBeFalsy();
  });

  it("Not empty data returns true", () => {
    element.value = "test";
    expect(checkValue(element)).toBeTruthy();
  });

  it("Class flashing start", () => {
    element.value = null;
    checkValue(element);
    expect(element.getAttribute("class")).toBe("main-input-empty");
  });
});
