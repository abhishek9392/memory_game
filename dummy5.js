var obj=[
    {
        id:1,
        image:"torto.jpg"
    },
    {
        id:2,
        image:"sheep.jpg"
    },
    {
        id:3,
        image:"ele.png"
    },
    {
        id:4,
        image:"rabbit.jpg"
    },
    {
        id:5,
        image:"rabbit.jpg"
    },
    {
        id:6,
        image:"torto.jpg"
    },
    {
        id:7,
        image:"sheep.jpg"
    },
    {
        id:8,
        image:"ele.png"
    },
    {
        id:9,
        image:"lion.jpg"
    },
    {
        id:10,
        image:"octo.jpg"
    },
    {
        id:11,
        image:"octo.jpg"
    },
    {
        id:12,
        image:"lion.jpg"
    },




    // {
    //     id:9,
    //     image:"octo.jpg"
    // }
    // {
    //     id:10,
    //     image:
    // }







]
var count=0
var length=0
var main=document.getElementById("div1")
for(var i=0;i<obj.length;i++){

    var card1=document.createElement("div")
    card1.className="photo"
    card1.style.backgroundColor="black"
    var image=document.createElement("img")
    image.src=obj[i].image
    image.style.visibility="hidden"
    card1.append(image)
    main.append(card1)
    // console.log(image.src)


}
// console.log(image)
var arr=[]
var arr1=[]
var arr2=[]
var cards=document.querySelectorAll(".photo")

function start(){

cards.forEach(card=>{
    card.addEventListener("click",rotate_card);
})

}

function rotate_card(e){
        count++
    var d=e.target
    var pics=e.target.firstChild
    pics.style.visibility="visible"
    if(arr.length<2){
        arr.push(pics.src)
        arr1.push(pics)
        arr2.push(d)
    }
    if(arr.length==2){
        if(arr[0]==arr[1]){
            length=length+2
            console.log("matched")

             arr=[]
             arr1=[]
             arr2[0].removeEventListener("click",rotate_card)
             arr2[1].removeEventListener("click",rotate_card)
             arr2=[]
             if(length==obj.length){
                length=0
                reset();
             }

        }
        else{
            console.log("notmatched")
            setTimeout(()=>{
                arr1[0].style.visibility="hidden"
                arr1[1].style.visibility="hidden"
                arr1=[]

            },"4000");

            arr=[]
            arr2=[]
        }
    }

}

function reset(){
    cards.forEach(card=>{
        var child=card.firstChild
        child.style.visibility="hidden"
    })
    start();
}
start();
