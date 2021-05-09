let spellImage = document.querySelector("#spell-image");

function getSpellImage(spell) {
  if (!spell) return;

  if (spell === 'wl') {
    spellImage.src = "../assets/spells/wl.gif";
  }
  if (spell === 'rep') {
    spellImage.src = "../assets/spells/rep.gif";
  }
  if (spell === 'pack') {
    spellImage.src = "../assets/spells/pack.gif";
  }
  if (spell === 'per') {
    spellImage.src = "../assets/spells/per.gif";
  }
  if (spell === 'ep') {
    spellImage.src = "../assets/spells/ep.gif";
  }
  if (spell  === "vv") {
    spellImage.src = "../assets/spells/vv.gif";
  }
}