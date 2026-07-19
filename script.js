const paginationListWraper = document.querySelector(".pagination-list");
const paginationNumbers = document.querySelector(".pagination-numbers");
function createDummyData(){
    for(let i = 1; i<=100 ; i++){
        const li = document.createElement("li");
        li.textContent = `Card ${i}`;
        paginationListWraper.appendChild(li);
    }
}
createDummyData();

const extractAllListItems = document.querySelectorAll("li");

let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItems.length/paginationLimit);

function createPageNumber(getCurrentIndex){
const pageNumber = document.createElement("button");
pageNumber.classList.add("pagination-number");
pageNumber.textContent = getCurrentIndex;
pageNumber.setAttribute("page-index",getCurrentIndex);
paginationNumbers.appendChild(pageNumber);
}

function createPaginationNumbers(){
    for(let i = 1 ; i<=pageCount ; i++){
        createPageNumber(i);
    }
}

createPaginationNumbers();
