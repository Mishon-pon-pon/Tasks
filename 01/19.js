// Напиши функцию, которая с заданными интервалами (например, 500мс) запускает асинхронные задачи из массива

async function executeIntervalTasks(funcArr, interval = 500) {
    const results = [];
    for (let i = 0; i < funcArr.length; i++) {
        if (i > 0) {
            await new Promise(resolve => setTimeout(resolve, interval));
        }
        const result = await funcArr[i]();
        results.push(result);
    }
    return results;
}