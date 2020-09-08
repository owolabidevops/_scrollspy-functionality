const sectionArray=document.querySelectorAll('section');
const sectionPOs={};

sectionArray.forEach((section)=>{
    sectionPOs[section.id]=section.offsetTop;
});
window.onscroll= () =>{
 var scrollPosition=
 document.documentElement.scrollTop||document.body.scrollTop;
 for(id in sectionPOs) {
     if(sectionPOs[id] <= scrollPosition){
         document.querySelector('.active').classList.remove('active');
         document.querySelector(`a[href*=${id}]`).classList.add('active');
 }

  }
  
}; 
