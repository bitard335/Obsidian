____

tags: #

links: [[]]

youtube: 
1. 

keywords:
Вызывается fetch ('URL') , URL - вернет данные .
Fetch возвращает promise 
	.then ((res) => {
	console.log('Got response', res.json)})
	.then((body) => {
	console.log('body')})

То, что получили response означает что мы получили тело ответа .

Чтобы получить данные с сервера , нужно выполнить два вызова ( каждый вернет promise )
> res = await fetch (url)
> body = await res.json()

Кроме json есть другие функции для других типов ответа : arrayBuffer , blob , text , formData ()
_____

