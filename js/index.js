//bouton incrementation
let t = Array.from(document.getElementsByClassName("plus"));
let q = Array.from(document.getElementsByClassName("qte"));
console.log(q[1].innerHTML);
for (let i=0 ; i<t.length ;i++){
    
    t[i].addEventListener('click', function(){
       
        q[i].innerHTML++;

    });

}
//bouton decrementation
let t1 = Array.from(document.getElementsByClassName("moins"));
for (let i=0 ; i<t1.length ;i++){
    t1[i].addEventListener('click', function(){
        if(Number(q[i].innerHTML)>0){
        
        q[i].innerHTML--;
    }

    })  ;

}

//bouton ajouter 
let q1 = Array.from(document.getElementsByClassName("qte"));
let price = Array.from(document.getElementsByClassName('prix'));
let btn= Array.from(document.getElementsByClassName('Ajouter'));

let imgd = Array.from(document.getElementsByClassName('imge'));
let T=(document.getElementById('total'));
var x = Number(T.innerHTML);

for (let i=0; i<btn.length;i++){
btn[i].addEventListener('click', function(){
  let  result = price[i].innerHTML * q1[i].innerHTML;
  
//somme totale du panier
 x+=result;
 T.innerHTML=x;
  

  //ajout table 

  var tr = document.createElement('tr');
  var td = document.createElement('td');
  var td1 =document.createElement('td');
  var td2= document.createElement('td');
  var td3 = document.createElement('td');
  //image de produit 
  var image =document.createElement('img');
  var src = imgd[i].src;
  image.setAttribute('src',src);
  image.setAttribute('class','imgd')

// buton delete 
var bntdelete = document.createElement('button');
var del = document.createTextNode('x');
bntdelete.appendChild(del);
 bntdelete.addEventListener('click',function(){
     //remove row
     bntdelete.parentElement.parentElement.remove();
        x-=result;
        T.innerHTML=x;
 })
//bputon plus
var plus= document.createElement('button');
var add = document.createTextNode('+');
plus.appendChild(add);



//bouton min
var moins= document.createElement('button');
var min = document.createTextNode('-');
moins.appendChild(min);
var p =document.createElement('p');







  var node1 = document.createTextNode(q1[i].innerHTML);
  p.appendChild(node1);
  var node2 = document.createTextNode(result);
  td3.appendChild(bntdelete);
  td.appendChild(image);
  td1.appendChild(plus);
  td1.appendChild(p);
  td1.appendChild(moins);
  td2.appendChild(node2);
  tr.appendChild(td3);
  tr.appendChild(td);
  tr.appendChild(td1);
  tr.appendChild(td2);
 
  var element = document.getElementById('tab');
  element.appendChild(tr);


  plus.addEventListener('click',function(){
    var m = this.nextElementSibling.innerHTML++
  
    result = price[i].innerHTML * m;
   


})

moins.addEventListener('click',function(){
    this.previousElementSibling.innerHTML--
})
  tr.setAttribute('class','tr');
 td.setAttribute('class','tr');
 td1.setAttribute('class','tr');
 td2.setAttribute('class','tr');
 td3.setAttribute('class','tr');

})
} 


var heart = document.getElementsByClassName('fa-heart');
for(let hrt of heart){
    hrt.addEventListener('click', function(){
        if(hrt.style.color=== 'black'){
            hrt.style.color='red';
        }else{
            hrt.style.color='black'; 
        }
         ;
    })
}
