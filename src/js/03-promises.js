import Notiflix from 'notiflix';

const form = document.querySelector(".form");
console.log(form);

form.addEventListener("submit", onFormSubmit);
function onFormSubmit(e) {
  e.preventDefault();
  let inputDelay = e.currentTarget.delay.value;
  const inputStep = e.currentTarget.step.value;
  const inputAmount = e.currentTarget.amount.value;

  for (let position = 1; position <= inputAmount; position += 1) {
    createPromise(position, inputDelay);
    inputDelay += inputStep;
  };
}

function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
  promise.then(({ position, delay }) => {
  Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }); 
}


    
