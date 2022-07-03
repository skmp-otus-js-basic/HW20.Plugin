import showTestimonials, {
  addTemplate,
  readList,
  cleanList,
  saveList,
} from "../src/js/storage";

describe("Module storage tests", () => {
  let itemsSave;
  let comments;
  beforeEach(() => {
    comments = document.createElement("div");
    itemsSave = JSON.parse(localStorage.getItem("items")) || [];
  });
  afterEach(() => {
    localStorage.setItem("items", JSON.stringify(itemsSave));
  });

  it("Clean items", () => {
    cleanList();
    const items = readList();
    expect(items.length).toBe(0);
  });

  it("Add templates", () => {
    cleanList();
    addTemplate(comments);
    const items = readList();
    expect(items.length).toBe(2);
  });

  it("Save item", () => {
    const before = readList();
    saveList("Test_1");
    saveList("Test_2");
    saveList("Test_3");
    const after = readList();
    expect(after.length - before.length).toBe(3);
  });

  it("Show items", () => {
    cleanList();
    showTestimonials(comments);
    expect(comments.querySelectorAll("section").length).toBe(2);
  });
});
