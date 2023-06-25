#### Ответ

Подробней: [https://developer.mozilla.org/ru/docs/Web/HTTP/Куки](https://developer.mozilla.org/ru/docs/Web/HTTP/%D0%9A%D1%83%D0%BA%D0%B8)

"Безопасные" (secure) cookie отсылаются на сервер только если запрос выполняется по протоколу SSL и HTTPS. Однако важные данные никогда не следует передавать или хранить в cookies, поскольку сам их механизм весьма уязвим в отношении безопасности, а флаг secure никакого дополнительного шифрования или средств защиты не обеспечивает. Начиная с Chrome 52 and Firefox 52, незащищенные сайты (http:) не могут создавать куки с флагом secure.

Куки HTTPonly не доступны из JavaScript через свойства Document.cookie, и через XMLHttpRequest и Request API, что помогает избежать межсайтового скриптинга (XSS). Устанавливайте этот флаг для тех cookie, к которым не требуется обращаться через JavaScript. В частности, если куки используются только для поддержки сеанса, то в JavaScript они не нужны, так что в этом случае следует устанавливать флаг HttpOnly.

`Set-Cookie: id=a3fWa; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly`

___
#HTML #HTTPS #HTTP #SSL #secure #Cookie 

___

#### [[001 HTML|Назад]]