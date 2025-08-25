// Сделай асинхронный таймер: каждые 2 секунды выводит в консоль "tick", всего 5 раз
async function everyTwoSecTick(){
    for(let i = 0; i < 5; i++){
        await new Promise(resolve => setTimeout(resolve, 2000));
        console.log("tick");
    }
}