NOTES_IDX = 2;
CURRENT_NOTE_COLOR = "#a0ffdd";

function newNote() {
  $("#notes-section").prepend(`<div id="note-${NOTES_IDX}"
                                    class='note'
                                    style="background-color:${CURRENT_NOTE_COLOR}">
                               <div class="button-holder">
                               <button type="button"
                                       name="button"
                                       class="x-button"
                                       onClick="deleteNote('note-${NOTES_IDX}')">X</button></div>
                               <span placeholder='Type here...'
                                     contenteditable='true'></span></div>`);
  NOTES_IDX += 1;
}

function deleteNote(id) {
  $(`#${id}`).remove();
}

function changeNoteColor(color) {
  $(".note").css("background-color", color);
  CURRENT_NOTE_COLOR = color;
}

function openBackgroundSection() {
  $(".choose-background").css("display", "flex");
}

function closeBackgroundSection() {
  $(".choose-background").css("display", "none");
}
