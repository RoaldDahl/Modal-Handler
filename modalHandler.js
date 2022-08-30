async function loadModals(client) {
  const { loadFiles } = require("../../Structures/Functions/FileLoader/FileLoader.js");
  const ascii = require("ascii-table");
  const table = new ascii("Modals List");
  
  const Files = await loadFiles("Modals");
  
  Files.forEach((file) => {
    const modal = require(file);
    if (!modal.id) return;

    client.modals.set(modal.id, modal);
    table.setHeading(`Folder`, `Modal ID`, `Status`);
    table.addRow(`${modal.folder}`, `${modal.id}`, "🟩 Success");
  });
  
  return console.log(table.toString())
}
  
module.exports = { loadModals };