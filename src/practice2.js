const inject = (items, sections) => {

  let itemAfter = sections.map(section => items[section.index]);

  for (let [index, section] of sections.entries()) {
    items.splice(items.indexOf(itemAfter[index]), 0, section.content);
  }

  return items;
};
export { inject };
