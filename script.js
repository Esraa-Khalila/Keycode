const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  insert.innerHTML = `
        <div id="insert">
         <div class="key">
            ${event.key === " " ? 'space' : event.key}
            <small>Key</small>
         </div>
         <div class="key">
            ${event.keyCode}
             <small>keycode</small>
         </div>
         <div class="key">
            ${event.code}
            <small>code</small>
         </div>
        `;
});
