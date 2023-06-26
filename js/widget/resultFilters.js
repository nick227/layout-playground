
function filterFieldObjects(searchTerm) {
  if (!searchTerm) {
    return [];
  }

  const lowerSearchTerm = searchTerm.toLowerCase();
  const filteredObjects = [];
  const seenLabels = new Set();

  for (const key in fieldObjects) {
    const field = fieldObjects[key];
    const { label, aliases, categories, order } = field;
    const lowerLabel = label.toLowerCase();
    const lowerKey = key.toLowerCase();

    if (lowerLabel.startsWith(lowerSearchTerm) || lowerKey.startsWith(lowerSearchTerm)) {
      if (!seenLabels.has(lowerLabel)) {
        filteredObjects.push(field);
        seenLabels.add(lowerLabel);
      }
      continue;
    }

    if (
      aliases.some(alias => alias.toLowerCase().startsWith(lowerSearchTerm)) ||
      categories.some(category => category.toLowerCase().startsWith(lowerSearchTerm)) ||
      lowerKey.startsWith(lowerSearchTerm)
    ) {
      if (!seenLabels.has(lowerLabel)) {
        filteredObjects.push(field);
        seenLabels.add(lowerLabel);
      }
    }
  }

  filteredObjects.sort((a, b) => {
    if (a.order === b.order) {
      return a.label.localeCompare(b.label); // Sort alphabetically if the order values are the same
    }
    return a.order - b.order; // Sort based on the order values
  });

  return filteredObjects;
}

async function filterMediaObjects(searchTerm, limit=10){
  const res = await searchPhotos(searchTerm, limit);
  return res.map((image) => {
    return {
      id: image.id,
      description: image.description,
      alt_description: image.alt_description,
      thumb_url: image.urls.thumb,
      full_url: image.urls.full,
    };
  });
}