// classess to can be generic in nature .

class ShoppingList<T extends string | number | boolean> {
  constructor(private items: Array<T>) {}
  getName() {
    return this.items;
  }
  addItems(newItem: T) {
    this.items = [...this.items, newItem];
  }
}

const groceryList = new ShoppingList<string>(["rice", "sugar"]);
groceryList.addItems("chocolate");

// groceryList.addItems(10); // ERROR and  rightly so .
// this might be problematic with classes dealing with non-primitve values .

// since non-primitives have new reference so their equality is equality of references. therefore , to  constraint it to primitives only , we can  use  contstraints.
// moreover , methods too canaceepts arguments i.e. methods too can be generic.
