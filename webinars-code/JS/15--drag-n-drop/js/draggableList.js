function DraggableItem(content, parentList) {
  this.content = content;
  this.parentList = parentList;
  this.self = document.createElement("div");

  this.render = () => {
    this.self.innerHTML = this.content;
    this.parentList.elements.self.append(this.self);
  };
}

function DraggableList(itemsContent) {
  this.items = itemsContent.map((content) => new DraggableItem(content, this));
  this.dragTerget = null;

  this.elements = {
    self: document.createElement("div"),
  };

  this.render = (parent) => {
    this.elements.self.classList.add("draggable-list");

    this.items.forEach((item) => item.render());

    parent.append(this.elements.self);
  };

  //TODO: дописати методи для роботи з drag-n-drop за прикладом файлу drag-n-drop.js
}

const myList = new DraggableList(["Item 1", "Item 2", "Item 3"]);
myList.render(document.body);
