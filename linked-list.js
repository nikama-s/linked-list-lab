class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  checkIsCharacter(element) {
    if (typeof element !== "string" || element.length !== 1) {
      throw new Error("Element must be a single character");
    }
  }

  checkIsValidIndexForInsert(index) {
    if (index < 0 || index > this._length) {
      throw new Error("Invalid index for insertion");
    }
  }

  checkIsValidIndexForGetDelete(index) {
    if (index < 0 || index >= this._length) {
      throw new Error("Invalid index for operation");
    }
  }

  length() {
    return this._length;
  }

  append(element) {
    this.checkIsCharacter(element);
    const newNode = new Node(element);

    newNode.next = this.head;
    this.tail.next = newNode;
    this.tail = newNode;

    this._length++;
  }

  insert(element, index) {
    this.checkIsCharacter(element);
    this.checkIsValidIndexForInsert(index);

    if (index === this._length) {
      this.append(element);
      return;
    }

    const newNode = new Node(element);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
      this.tail.next = newNode;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }

    this._length++;
  }

  delete(index) {
    this.checkIsValidIndexForGetDelete(index);

    let deletedValue;

    if (this._length === 1) {
      deletedValue = this.head.value;
      this.head = null;
      this.tail = null;
    } else if (index === 0) {
      deletedValue = this.head.value;
      this.head = this.head.next;
      this.tail.next = this.head;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      deletedValue = current.next.value;
      current.next = current.next.next;
      if (index === this._length - 1) {
        this.tail = current;
      }
    }

    this._length--;
    return deletedValue;
  }

  deleteAll(element) {
    this.checkIsCharacter(element);

    let current = this.head;
    let prev = this.tail;
    let initialLength = this._length;

    if (this._length === 0) {
      return;
    }

    for (let i = 0; i < initialLength; i++) {
      if (current.value === element) {
        if (current === this.head) {
          this.head = this.head.next;
          this.tail.next = this.head;
          if (this._length === 1) {
            this.head = null;
            this.tail = null;
          }
        } else {
          prev.next = current.next;
          if (current === this.tail) {
            this.tail = prev;
          }
        }
        this._length--;
      } else {
        prev = current;
      }
      current = current.next;
      if (this._length === 0) break;
    }
  }

  get(index) {
    this.checkIsValidIndexForGetDelete(index);

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.value;
  }

  clone() {
    const newList = new LinkedList();
    if (this._length === 0) {
      return newList;
    }

    let current = this.head;
    for (let i = 0; i < this._length; i++) {
      newList.append(current.value);
      current = current.next;
    }

    return newList;
  }

  reverse() {
    if (this._length <= 1) {
      return;
    }

    let prev = this.tail;
    let current = this.head;
    let next = null;

    for (let i = 0; i < this._length; i++) {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }

    [this.head, this.tail] = [this.tail, this.head];
  }

  findFirst(element) {
    this.checkIsCharacter(element);

    let current = this.head;
    for (let i = 0; i < this._length; i++) {
      if (current.value === element) {
        return i;
      }
      current = current.next;
    }
    return -1;
  }

  findLast(element) {
    this.checkIsCharacter(element);

    let lastIndex = -1;
    let current = this.head;
    for (let i = 0; i < this._length; i++) {
      if (current.value === element) {
        lastIndex = i;
      }
      current = current.next;
    }
    return lastIndex;
  }

  clear() {
    this.head = null;
    this.tail = null;
    this._length = 0;
  }

  extend(elements) {
    if (!(elements instanceof LinkedList)) {
      throw new Error("Argument must be a LinkedList");
    }

    if (elements._length === 0) {
      return;
    }

    let current = elements.head;
    for (let i = 0; i < elements._length; i++) {
      this.append(current.value);
      current = current.next;
    }
  }
}

module.exports = LinkedList;
