const preview = document.getElementById("preview");
const cssOutput = document.getElementById("cssOutput");

const layoutMode = document.getElementById("layoutMode");
const flexControls = document.getElementById("flexControls");
const gridControls = document.getElementById("gridControls");

/* FLEX */
const flexDirection = document.getElementById("flexDirection");
const justifyContent = document.getElementById("justifyContent");
const alignItems = document.getElementById("alignItems");
const flexGap = document.getElementById("FlexGap");

/* GRID */
const gridCols = document.getElementById("gridCols");
const gridRows = document.getElementById("gridRows");
const gridGap = document.getElementById("gridGap");
const justifyItems = document.getElementById("justifyItems");
const alignItemsGrid = document.getElementById("alignItemsGrid");


function resetPreview() {
    preview.removeAttribute("style");
    preview.classList.remove("grid-mode");
}

function updateLayout() {
    resetPreview();

    if (layoutMode.value === "flex") {
    
        preview.style.display = "flex";
        preview.style.flexDirection = flexDirection.value;
        preview.style.justifyContent = justifyContent.value;
        preview.style.alignItems = alignItems.value;
        preview.style.gap = `${flexGap.value}px`;

        flexControls.classList.remove("d-none");
        gridControls.classList.add("d-none");

        cssOutput.textContent = `
/* FLEXBOX */
display: flex;
flex-direction: ${flexDirection.value};
justify-content: ${justifyContent.value};
align-items: ${alignItems.value};
gap: ${flexGap.value}px;
`.trim();

    } else {
        preview.classList.add("grid-mode");

        preview.style.display = "grid";
        preview.style.gridTemplateColumns = `repeat(${gridCols.value}, 1fr)`;
        preview.style.gridTemplateRows = `repeat(${gridRows.value}, 80px)`;
        preview.style.gap = `${gridGap.value}px`;
        preview.style.justifyItems = justifyItems.value;
        preview.style.alignItems = alignItemsGrid.value;

        preview.style.backgroundSize = `
      calc(100% / ${gridCols.value})
      calc(100% / ${gridRows.value})
    `;

        gridControls.classList.remove("d-none");
        flexControls.classList.add("d-none");

        cssOutput.textContent = `
/* GRID */
display: grid;
grid-template-columns: repeat(${gridCols.value}, 1fr);
grid-template-rows: repeat(${gridRows.value}, 80px);
gap: ${gridGap.value}px;
justify-items: ${justifyItems.value};
align-items: ${alignItemsGrid.value};
`.trim();
    }
}

document.querySelectorAll("select, input").forEach(el => {
    el.addEventListener("input", updateLayout);
});

updateLayout();
