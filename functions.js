NOTES_IDX = 2;

function newNote() {
  $("#notes-section").append(`<div id="note-${NOTES_IDX}" class='note'><button type="button" name="button" class="x-button">X</button></div>`);
  NOTES_IDX += 1;
}
