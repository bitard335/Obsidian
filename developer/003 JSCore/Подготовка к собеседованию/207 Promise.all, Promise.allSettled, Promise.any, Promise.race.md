##### Разница между `Promise.all()`, `Promise.any()` и `Promise.race()`?
![Разница между `Promise.all()`, `Promise.any()` и `Promise.race()`?](https://youtu.be/XtQPrt8G0n8?t=782)

##### Расскажите про статический метод `.allSettled()`?
![Расскажите про статический метод `.allSettled()`?](https://youtu.be/trriSYNrHw4?t=896)

#### Ответ

*`Promise.all()`, `Promise.allSettled()`, `Promise.any()` и `Promise.race()`* - это методы объекта Promise, которые позволяют работать с несколькими промисами одновременно.

*`Promise.all()`* принимает массив промисов и возвращает новый промис, который будет выполнен, когда все промисы в массиве будут выполнены успешно, или отклонен, когда хотя бы один промис из массива будет отклонен. Результат выполнения `Promise.all()` - это массив результатов выполнения всех переданных промисов в том порядке, в котором они были переданы.

```
Promise.all([promise1, promise2, promise3])
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.error(error);
  });
```

*`Promise.allSettled()`* принимает массив промисов и возвращает новый промис, который будет выполнен, когда все промисы в массиве будут завершены, независимо от того, были ли они выполнены успешно или отклонены. Результат выполнения `Promise.allSettled()` - это массив объектов, представляющих результаты выполнения всех переданных промисов.

```
Promise.allSettled([promise1, promise2, promise3])
  .then(function(results) {
    console.log(results);
  })
  .catch(function(error) {
    console.error(error);
  });
```

*`Promise.any()`* принимает массив промисов и возвращает новый промис, который будет выполнен, когда хотя бы один промис в массиве будет выполнен успешно. Результат выполнения `Promise.any()` - это результат выполнения первого успешно выполненного промиса.

```
Promise.any([promise1, promise2, promise3])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });
```

*`Promise.race()`* принимает массив промисов и возвращает новый промис, который будет выполнен, когда первый промис в массиве будет выполнен, независимо от того, был ли он выполнен успешно или отклонен. Результат выполнения `Promise.race()` - это результат выполнения первого завершенного промиса.

```
Promise.race([promise1, promise2, promise3])
  .then(function(result) {
    console.log(result);
  })
  .catch(function(error) {
    console.error(error);
  });
```

В целом, методы `Promise.all()`, `Promise.allSettled()`, `Promise.any()`, и `Promise.race()` позволяют эффективно работать с несколькими промисами и обрабатывать их результаты в соответствии с определенными условиями.

___
 #JavaScript #асинхронность #promise #promiseAll #promiseAllSettled #promiseAny #promiseRacr

___

### [[003 JSCore|Назад]]