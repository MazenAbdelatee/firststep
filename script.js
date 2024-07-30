let data=[
    {
        src:"https://images.pexels.com/photos/5620861/pexels-photo-5620861.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"First-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    },
    {
        src:"https://images.pexels.com/photos/7664817/pexels-photo-7664817.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"Second-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    },
    {
        src:"https://images.pexels.com/photos/7660428/pexels-photo-7660428.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"Third-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    },
    {
        src:"https://images.pexels.com/photos/6823321/pexels-photo-6823321.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"Fourth-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    },
    {
        src:"https://images.pexels.com/photos/4553027/pexels-photo-4553027.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"Fifth-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    },
    {
        src:"https://images.pexels.com/photos/6659686/pexels-photo-6659686.jpeg?auto=compress&cs=tinysrgb&w=400",
        head:"Sixth-Dish",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur, deserunt pariatur aliquid quod natus impedit. Aliquam, perferendis? Esse, optio adipisci!"
    }
    
];
function NewCard(imgSrc,head,cont){
    let container=document.createElement("div");
    let image=document.createElement("img");
    image.src=imgSrc;
    let title= document.createElement("h3");
    title.innerText=head;
    let content=document.createElement("p");
    content.innerText=cont;
    let buyBtn=document.createElement("button");
    buyBtn.innerText="Buy"
    buyBtn.style.cssText=`border-radius: 5px;
    width:70px;
    margin: 5px;
    padding: 5px;
    background-color: blueviolet;
    color: white;`;
    container.style.cssText=`border: 1px solid rgb(202, 198, 198);
    text-align: center;
    padding: 5%;
    width: 150px;
    height: max-content;
    border-radius: 6px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);`;
    image.style.cssText=`width: 100px;
    height: 100px;
    border-radius: 50%;`;
    container.appendChild(image);
    container.appendChild(title);
    container.appendChild(content);
    container.appendChild(buyBtn);
    return container;
}
const parent = document.createElement('div');
parent.id = 'card-container';

parent.style.cssText=`display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin: 20px auto;
    align-items: center;
    justify-content: center;
    justify-items: center;`
document.body.appendChild(parent);


data.forEach(data=>{
    let card=NewCard(data.src,data.head,data.content);
    parent.appendChild(card);
});

