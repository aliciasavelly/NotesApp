NOTES_IDX = 2;

function newNote() {
  $("#notes-section").prepend(`<div id="note-${NOTES_IDX}" class='note'><div class="button-holder"><button type="button" name="button" class="x-button" onClick="deleteNote('note-${NOTES_IDX}')">X</button></div><span placeholder='Type here...' contenteditable='true'></span></div>`);
  NOTES_IDX += 1;
}

function deleteNote(id) {
  $(`#${id}`).remove();
}
