(function(){
    let currentpage = 1;
    const prevBtn = document.querySelector(".container .footer .prev");
    const nexttBtn = document.querySelector(".container .footer .next");

    function movepage(){
        prevBtn.disabled = false;
        nexttBtn.disabled = false;
        if(currentpage === 1){
            prevBtn.disabled = true;

        }
        else if (currentpage === 4){
            nexttBtn.disabled = true;
        }
        document.querySelector(".container .pagination .active").classList.remove("active");
        document.querySelectorAll(".container .pagination .number")[currentpage-1].classList.add("active");
        const stepnNode = document. querySelector(".container .steps .step" );
        const width = ((currentpage-1)*stepnNode.offsetWidth*-1)+"px";
        stepnNode.parentNode.style.marginLeft = width;
    }

    prevBtn.addEventListener("click", function(){
        currentpage -= 1;
        movepage();
    });
    nexttBtn.addEventListener("click",function(){
        currentpage += 1;
        movepage();
    });

})();
function submit(){
    alert("Your Registration Sucessfully Submitted!");
};
