function e(e){return(e[0].toUpperCase()+e.slice(1)).replace(/(?!^)([A-Z])/g," $1")}document.querySelectorAll("form").forEach(function(t){t.querySelectorAll("input").forEach(function(t){var l=document.createElement("label");l.classList.add("field-label"),l.htmlFor=t.id,l.textContent=e(t.name),t.placeholder=e(t.name),t.parentElement.insertBefore(l,t)})});
//# sourceMappingURL=index.8f4613b9.js.map
