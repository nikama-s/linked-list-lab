class LinkedList {
  constructor() {
    this.elements = [];
  }

  checkIsCharacter(element) {
    if (typeof element !== "string" || element.length !== 1) {
      throw new Error("Element must be a single character");
    }
  }

  checkIsValidIndex(index) {
    if (index < 0 || index > this.length()) {
      throw new Error("Invalid index");
    }
  }

  length() {
    return this.elements.length;
  }

  append(element) {
    this.checkIsCharacter(element);
    this.elements.push(element);
  }

  insert(element, index) {
    this.checkIsCharacter(element);
    this.checkIsValidIndex(index);
    this.elements.splice(index, 0, element);
  }

  delete(index) {
    this.checkIsValidIndex(index);
    return this.elements.splice(index, 1)[0];
  }

  deleteAll(element) {
    this.checkIsCharacter(element);
    this.elements = this.elements.filter((e) => e !== element);
  }

  get(index) {
    this.checkIsValidIndex(index);
    return this.elements[index];
  }

  clone() {
    const newList = new LinkedList();
    newList.elements = [...this.elements];
    return newList;
  }

  reverse() {
    this.elements.reverse();
  }

  findFirst(element) {
    this.checkIsCharacter(element);
    return this.elements.indexOf(element);
  }

  findLast(element) {
    this.checkIsCharacter(element);
    return this.elements.lastIndexOf(element);
  }

  clear() {
    this.elements = [];
  }

  extend(elements) {
    if (!(elements instanceof LinkedList)) {
      throw new Error("Argument must be a LinkedList");
    }
    this.elements.push(...elements.elements);
  }
}

module.exports = LinkedList;
