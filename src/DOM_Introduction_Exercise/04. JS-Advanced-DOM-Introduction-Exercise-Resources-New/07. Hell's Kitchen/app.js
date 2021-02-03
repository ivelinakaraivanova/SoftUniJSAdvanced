function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick() {
      const input = JSON.parse(document.getElementsByTagName('textarea')[0].value)

      let restaurants = {};

      for (const element of input) {
         let [name, workersToken] = element.split(' - ');
         workersToken = workersToken.split(', ');
         let workers = [];
         
      
         for (const worker of workersToken) {
            let [workerName, workerSalary] = worker.split(' ');
            workerSalary = Number(workerSalary);
            workers.push({
               workerName,
               workerSalary 
            })
         }
      
         if (!restaurants[name]) {
            restaurants[name] = workers;
         } else {
            workers = workers.concat(restaurants[name].workers);
         }

         workers.sort((worker1, worker2) => worker2.workerSalary - worker1.workerSalary);
         const bestSalary = workers[0].workerSalary;
         const avgSalary = workers.reduce((sum, worker) => sum + worker.workerSalary, 0) / workers.length;

         restaurants[name] = {
            workers,
            avgSalary,
            bestSalary
         }
                    
      }

      let bestReastaurantSalary = 0;
      let bestRestaurant;

      for (const name in restaurants) {
         if (restaurants[name].avgSalary > bestReastaurantSalary) {
            bestRestaurant = {
               name, 
               workers : restaurants[name].workers,
               avgSalary: restaurants[name].avgSalary,
               bestSalary: restaurants[name].bestSalary
            }

            bestReastaurantSalary = restaurants[name].avgSalary;
         }
      }

      resultTextRestaurant = `Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.avgSalary.toFixed(2)} Best Salary: ${bestRestaurant.bestSalary.toFixed(2)}`
      
      document.querySelector('#bestRestaurant p').textContent = resultTextRestaurant;
      
      resultTextWorkers = ''
      
      for (const worker of bestRestaurant.workers) {
         resultTextWorkers += `Name: ${worker.workerName} With Salary: ${worker.workerSalary} `
      }

      document.querySelector('#workers p').textContent = resultTextWorkers;
   }
      
}
