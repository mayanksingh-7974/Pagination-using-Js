const paginationListWraper = document.querySelector(".pagination-list");

function createDummyData(){
    for(let i = 1; i<=100 ; i++){
        const li = document.createElement("li");
        li.textContent = `Card ${i}`;
        paginationListWraper.appendChild(li);
    }
}
createDummyData();

