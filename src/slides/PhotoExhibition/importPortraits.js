function importAllSmallPortraits(images) {
  const importedImages = [];
  for (const imagePath in images) {
    importedImages.push(images[imagePath].default);
  }
  return importedImages;
}

export default importAllSmallPortraits;
