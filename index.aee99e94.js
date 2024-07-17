document.querySelectorAll("input").forEach(function(e){var a=document.createElement("label");a.className="field-label",a.htmlFor=e.id,a.textContent=e.name.charAt(0).toUpperCase()+e.name.slice(1).replace(/([A-Z])/g," $1"),e.placeholder=e.name.charAt(0).toUpperCase()+e.name.slice(1).replace(/([A-Z])/g," $1"),e.before(a)});
//# sourceMappingURL=index.aee99e94.js.map
