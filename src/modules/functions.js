//create Tags
function createTag(parent, type, id_name, class_name, content) {
  const tag = document.createElement(type);

  if (parent != null) {
    parent.append(tag);
  } else {
    document.body.append(tag);
  }

  if (id_name != null) {
    tag.id = id_name;
  }

  if (class_name != null) {
    tag.className = class_name;
  }

  if (content != null) {
    tag.innerHTML = content;
  }

  return tag;
}

//create multiple tags
function createMultiTags(parent, type, num, list) {
  for (let i = 0; i < num; i++) {
    createTag(parent, type, null, list[i].replace(/ /g, "_"), list[i]);
  }
}

export { createTag, createMultiTags };
