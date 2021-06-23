const successfulPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve({ success: 'true' });
  }, 1000);
});

const failedfulPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error('it failed'));
  }, 1000);
});

// then/catch
successfulPromise.then((successMessage) => {
  console.log(successMessage);
});
failedfulPromise.then((successMessage) => {
  console.log(successMessage);
}).catch((errorMessage) => {
  console.log(errorMessage);
});
// async/await
