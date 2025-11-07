function pressed() {
  const statusPara = document.getElementById("status");
 
  // Create a new <h1> element
  const heading = document.createElement("h1");
  heading.textContent = "Entered Metaverse";

  // Replace the paragraph with the new <h1>
  statusPara.replaceWith(heading);
}
