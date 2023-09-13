let cvData =[
    {
        img:"images.jpeg",
        title:"Harry Potter",
        skill:"React JS",
        city:"London",
    },
    {
        img:"images (1).jpeg",
        title:"Jack",
        skill:"C++",
        city:"Germany",
    },
    {
        img:"photo-young-beautiful-arabian-girl-happy-smile-hold-clipboard-checklist-wear-hijab-isolated-over-blue-color-photo-young-250351624.webp",
        title:"Micheal",
        skill:"Angular",
        city:"Australia",
    },
    {
        img:"portrait-attractive-skilled-cheery-girl-hr-recruiter-using-device-app-copy-space-cv-vacancy-isolated-over-grey-pastel-color-238510849.webp",
        title:"Ben",
        skill:"Python",
        city:"America",
    },
];
const iteratCv = (resume) => {
    let resIndex = 0;
    return {
        nextIndex: function(){
            return resIndex<resume.length?{profValue:resume[resIndex++],done:false}:{done:true}
        }
    }
};
let ourEmployees = iteratCv(cvData);
const exploreCv = () => {
    let currEmployee = ourEmployees.nextIndex().profValue;
    // console.log(currEmployee);
    let myImage = document.querySelector(".image");
    let myIntro = document.querySelector(".intro");
    if(currEmployee != undefined){
        myImage.innerHTML = `<img src="${currEmployee.img}" alt="cv">`;
        myIntro.innerHTML = `<p><strong>Name : </strong>${currEmployee.title}</p>
        <p><strong>city : </strong>${currEmployee.city}</p>
        <p><strong>skill : </strong>${currEmployee.skill}</p>`;
    }else{
        alert("List will be End");
        window.location.reload();
    }
}
exploreCv();
let btn = document.querySelector(".btn");
btn.addEventListener("click", exploreCv);