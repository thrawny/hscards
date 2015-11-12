/**
 *
 * Created by thrawn on 12/11/15.
 */

function objectEntries(obj) {
  let index = 0;

  // In ES6, you can use strings or symbols as property keys,
  // Reflect.ownKeys() retrieves both
  let propKeys = Object.getOwnPropertyNames(obj);

  return {
    [Symbol.iterator]() {
      return this;
    },
    next() {
      if (index < propKeys.length) {
        let key = propKeys[index];
        index++;
        return { value: [key, obj[key]] };
      } else {
        return { done: true };
      }
    }
  };
}

//let obj = { first: 'Jane', last: 'Doe' };
//for (let [key,value] of objectEntries(obj)) {
//  console.log(`${key}: ${value}`);
//}

export { objectEntries };
