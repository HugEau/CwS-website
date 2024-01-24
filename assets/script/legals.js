// Feature to show legals' modal

let btnOpen = document.getElementById("legals")
let legalsModal = document.getElementById("legalsDiv")
let btnClose = document.getElementById("closeModalBtn")

btnOpen.addEventListener("click", () => {
    legalsModal.style.display = "flex";
})

btnClose.addEventListener("click", () => {
    legalsModal.style.display = "none";
})