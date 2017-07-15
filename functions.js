NOTES_IDX = 2;

function newNote() {
  $("#notes-section").append(`<div id="note-${NOTES_IDX}" class='note'><p>${NOTES_IDX}</p><button type="button" name="button" class="x-button" onClick="deleteNote('note-${NOTES_IDX}')">X</button></div>`);
  NOTES_IDX += 1;
}

function deleteNote(id) {
  $(`#${id}`).remove();
}
