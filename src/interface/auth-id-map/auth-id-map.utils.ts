export function processItem(item, result) {
  if (item.children && item.children.length > 0) {
    item.children.forEach((child) => {
      if (child.extra && child.extra.type > 2) {
        if (result[child.title]) {
          result[`${child.title}_下钻`] = child.key;
        } else {
          result[child.title] = child.key;
        }
        processItem(child, result); // 递归调用
      }
    });
  }
}

export function findType2Data(data, targetTitle) {
  let result = {};
  data.forEach((item) => {
    if (item.title === targetTitle && item.extra && item.extra.type === 2) {
      result[item.title] = item.key;
      if (item.children && item.children.length > 0) {
        item.children.forEach((child) => {
          if (child.extra) {
            if (result[child.title]) {
              result[`${child.title}_下钻`] = child.key;
            } else {
              result[child.title] = child.key;
            }
            processItem(child, result);
          }
        });
      }
    }
    if (item.children && item.children.length > 0) {
      const subResult = findType2Data(item.children, targetTitle);
      result = { ...result, ...subResult };
    }
  });
  return result;
}

export function findType2DataLabel(data) {
  let result = [];
  data.forEach((item) => {
    if (item.extra && item.extra.type === 2) {
      result.push({ label: item.title, value: item.title });
    }
    if (item.children && item.children.length > 0) {
      result = [...result, ...findType2DataLabel(item.children)];
    }
  });
  return result;
}
