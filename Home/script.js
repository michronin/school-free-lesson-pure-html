const coll = document.getElementsByClassName("collapsible");



for (let i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
        this.classList.toggle("active");
        const content = this.nextElementSibling;
        if (content.style.maxHeight){
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
            closeOthers(coll[i]);
        }
    });
}

function closeOthers(except) {
    for (let j = 0; j < coll.length; j++) {
        console.log("hi" + j);
        if (coll[j] !== except) {
            console.log(coll[j] === except);
            coll[j].classList.remove("active");
            coll[j].nextElementSibling.style.maxHeight = null;
        }else {
            console.log("else")
            console.log(coll[j] === except);
        }
    }
}
setTimeout(function(){
    const firstCollapsible = coll[0];
    const firstContent = firstCollapsible.nextElementSibling;
    firstCollapsible.classList.toggle("active");
    firstContent.style.maxHeight = firstContent.scrollHeight + "px";
}, 100);
