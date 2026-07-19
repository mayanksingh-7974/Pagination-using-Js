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

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const extractAllListItems =
paginationListWraper.querySelectorAll("li");

let paginationLimit = 10;
let pageCount = Math.ceil(extractAllListItems.length/paginationLimit);
let currentPage = 1;

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

function handelActiveCurrentPageNumber(){
document.querySelectorAll(".pagination-number").forEach(button=>{
    button.classList.remove("active-state");
    const getCurrentPageIndex = Number(button.getAttribute("page-index"));
    if(getCurrentPageIndex === currentPage){
 button.classList.add("active-state");
    }
})
}

function handelDisableButton(getBtn){
getBtn.classList.add("disabled");
getBtn.setAttribute("disabled","true");
}

function handelEnableButton(getBtn){
getBtn.classList.remove("disabled");
getBtn.removeAttribute("disabled");
}

function handelPaginationButtonStatus(){
if(currentPage === 1){
    handelDisableButton(prevBtn);
}
else{
    handelEnableButton(prevBtn);
}
if(pageCount === currentPage){
    handelDisableButton(nextBtn);
}
else{
    handelEnableButton(nextBtn);
}
}

function handelCurrentPage(getCurrentPageNumber){
    currentPage = getCurrentPageNumber;

    handelActiveCurrentPageNumber();
    handelPaginationButtonStatus();

    let getPreviousRange = (getCurrentPageNumber-1)*paginationLimit;
    let getCurrentRange = getCurrentPageNumber*paginationLimit;

    extractAllListItems.forEach((listItem,index)=>{
listItem.classList.add("hide-list-item");

if(index>=getPreviousRange && index<getCurrentRange){
    listItem.classList.remove("hide-list-item");
}
    });
}
createPaginationNumbers();
handelCurrentPage(1);

prevBtn.addEventListener("click",()=>{
    handelCurrentPage(currentPage-1);
});
nextBtn.addEventListener("click",()=>{
    handelCurrentPage(currentPage+1);
});

document.querySelectorAll(".pagination-number").forEach(button=>{
    const getCurrentPageIndex = Number(button.getAttribute("page-index"));
    if(getCurrentPageIndex){
        button.addEventListener("click",()=>{
            handelCurrentPage(getCurrentPageIndex);
        })
    }
})