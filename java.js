const catalog = [
    {
      name: "яблaки",
      img: "https://здоровое-питание.рф/upload/iblock/e47/hhwd80p9vtnmxi060urxe7d0a8d09mna/zagruzhennoe-_-2023_08_08T124759.004.jpg",
      price: 700,
      oldprice: 7045,
      currency: "$",
      desc: "Афтамот",
    },
    {
      name: "adidas",
      img: "https://cdn.britannica.com/94/193794-050-0FB7060D/Adidas-logo.jpg",
      price: 200,
      oldprice: 2684,
      currency: "$",
      desc: "Афтамот",
    },
    {
      name: "apex",
      img: "https://i.playground.ru/e/Pkanc5YgTSH-suBVai0ucQ.jpeg",
      price: 3980,
      oldprice: 6900,
      currency: "$",
      desc: "Афтамот",
    },
    {
      name: "m416",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT1MKqDwddUWml50512JeaObe5vfDg5cU74Q&s",
      price: 800,
      oldprice: 1800,
      currency: "$",
      desc: "Афтамот",
    },
    {
      name: "тилифон поко",
      img: "https://tehno37.ru/image/cache/catalog/010/10-700x700.png",
      price: 7850,
      oldprice: 1457,
      currency: "$",
      desc: "Афтамот",
    },
  ]
  
  const cards = document.querySelector('.cards')
  
  catalog.forEach(card => {
    cards.innerHTML += `
      <div class="card">
        <img src=${card.img} alt="">
        <h3>${card.name}</h3>
        <p${card.desc}</p>
        <s>${card.oldprice} ${card.currency}</s>
        <h4>${card.price}</h4>
  <button>Купить</button>
      </div>
    `
  })