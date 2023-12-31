____

tags: #gitlab #git


_____

## Создаём новую ветку из командной строки

(при условии, что у вас уже скачан репозиторий и всё корректно настроено и работает):

~~~
git checkout -b name-of-branch
~~~

где checkout - переключает в существующую ветку, -b - создаёт ветку, если таковой не существовало, name-of-branch - имя новой ветки.

## Именование ветки

Пишем латиницей в стиле kebab-case (маленькими буквами, через дефис). 
Сначала название аккаунта (или ваше имя, но надо предусмотреть, чтобы сразу было понятно, что вы это вы) затем название issue на английском языке (translate.google.com в помощь).

Пример: Если наш issue называется "Feature: Создать компоненту поиска", то мы называем ветку "galichandrey-feature-create-search-component"

Если всё получилось, то переходите к разделу 
Как генерировать осмысленные коммиты. В противном случае читайте далее.

## Общение с GitLab через #SSH

[https://docs.gitlab.com/ee/user/ssh.html](https://docs.gitlab.com/ee/user/ssh.html)

Альтернатива:

## Общение с GitLab через #HTTPS

Получаем Access Token. Сохраняем и его, и пароль

[https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#clone-repository-using-personal-access-token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html#clone-repository-using-personal-access-token)

## Создаём ветку на сайте GitLab.com

Заходим в раздел issues, выбираем вашу задачу из списка.

![[Pasted image 20230529004328.png]]

Нажимаем на правый угол кнопки "Create merge request", чтобы получить выпадающее меню

![[Pasted image 20230529004335.png]]

Называем ветку на латинице по следующему шаблону: [ваше-имя]-[название-issue-на-латинице]

Пример: В нашем случае issue называется "Feature: Создать компоненту поиска", Поэтому мы назовём ветку "galichandrey-feature-create-search-component"

Удостовериvся, что горит надпись “Branch name is available“, переключаемся на пункт меню “Create branch”, синяя кнопка теперь содержит значение “Create branch”. Нажимаем на неё.

![[Pasted image 20230529004346.png]]
Нажимаем на синюю кнопку Clone, выбираем Clone with SSH. Копируем URL-адрес.

![[Pasted image 20230529004351.png]]

## Скачиваем репозиторий через SSH

В командной строке среды разработки вводим:  

~~~
git clone [git@gitlab.com](mailto:git@gitlab.com):levotarayan98/phobos.git
~~~

Где [git@gitlab.com](mailto:git@gitlab.com):levotarayan98/phobos.git - это адрес, который мы скопировали ранее

## Скачиваем репозиторий через HTTPS

Альтернатива SSH.

![[Pasted image 20230529004401.png]]
В командной строке среды разработки вводим: 
~~~
git clone [https://<usernаmе>:<personal_token>@gitlab.com/levotarayan98/phobos.git](https://%3Cusern%D0%B0m%D0%B5%3E:%3Cpersonal_token%3E@gitlab.com/gitlab-org/gitlab.git)
~~~
Где gitlab.com/levotarayan98/phobos.git - это адрес, который мы скопировали ранее <usernаmе> - это пользователя, под которым вы зашли в GitLab. <personal_token> - токен, который вы сохранили ранее

## Как генерировать осмысленные коммиты

### Применяем стандарт Conventional Commits

Основные тезисы [Conventional Commits](https://www.conventionalcommits.org/):

- Разработчик должен придерживаться следующей структуры коммитов:  
    ~~~
    <typе>(<scоpe>): <subjеct>  
    <bоdy>  
    <foоter>
    ~~~

- У коммита должен быть заголовок, может быть тело и нижний колонтитул.
    
- Заголовок коммита должен начинаться с типа (type), указывающего на специфику внесенных в кодовую базу изменений, и завершаться описанием.
    
- Наряду с обязательными feat, fix (использование которых строго регламентировано), допускаются и другие типы.
    
- У коммита может быть область (scope). Она характеризует фрагмент кода, которую затронули изменения. Область следует за типом коммита. Стандарт не регламентирует четкий список областей. Примеры областей: eslint, git, analytics и т.д.
    
- Описание коммита должно быть сразу после типа/области.
    
- Тело коммита может быть использовано для детализации изменений. Тело должно быть отделено от описания пустой строкой.
    
- Нижний колонтитул следует использовать для указания внешних ссылок, контекста коммита или другой мета информации. Нижний колонтитул должен быть отделен от тела пустой строкой.
    

Кроме перечисленных в конвенции правил мы используем следующие популярные рекомендации:

- В теле коммита пишем что было изменено и почему.
- Используем следующие типы коммитов:

|Тип коммита|Что обозначает?|
|---|---|
|build|Сборка проекта или изменения внешних зависимостей|
|ci|Настройка CI и работа со скриптами|
|docs|Обновление документации|
|feat|Добавление нового функционала|
|fix|Исправление ошибок|
|perf|Изменения направленные на улучшение производительности|
|refactor|Правки кода без исправления ошибок или добавления новых функций|
|revert|Откат на предыдущие коммиты|
|style|Правки по кодстайлу (табы, отступы, точки, запятые и т.д.)|
|test|Добавление тестов|

- Пишем описание в повелительном наклонении (imperative mood), точно также как сам Git.  
    Merge branch 'fix/SECRETMRKT-749-fix-typos-in-titles'
- Не закачиваем описание коммита знаками препинания.

## Примеры коммитов

### Сообщение с описанием, а также с предупреждением в футере о ломающих изменениям

feat: разрешить предоставленному объекту конфигурации расширять другие конфигурации

BREAKING CHANGE: ключ `extends` в файле конфигурации теперь используется для расширения других файлов конфигурации

### [](#%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%BB%D0%BE%D0%BC%D0%B0%D1%8E%D1%89%D0%B8%D0%BC-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8)Сообщение с ! для привлечения внимания к ломающим изменениями

feat!: отправить электронное письмо покупателю, когда продукт будет готов к работе

### [](#%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81%D0%BE-%D1%81%D0%BA%D0%BE%D1%83%D0%BF%D0%BE%D0%BC-%D0%B8-%D0%B4%D0%BB%D1%8F-%D0%BF%D1%80%D0%B8%D0%B2%D0%BB%D0%B5%D1%87%D0%B5%D0%BD%D0%B8%D1%8F-%D0%B2%D0%BD%D0%B8%D0%BC%D0%B0%D0%BD%D0%B8%D1%8F-%D0%BA-%D0%BB%D0%BE%D0%BC%D0%B0%D1%8E%D1%89%D0%B8%D0%BC-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%D0%BC%D0%B8)Сообщение со скоупом и ! для привлечения внимания к ломающим изменениями

feat(api)!: отправить электронное письмо покупателю, когда продукт будет готов к работе

### [](#%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-%D0%B8-%D1%81-%D0%B8%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%86%D0%B8%D0%B5%D0%B9-%D0%B2-%D1%84%D1%83%D1%82%D0%B5%D1%80%D0%B5-%D0%BE-%D0%BB%D0%BE%D0%BC%D0%B0%D1%8E%D1%89%D0%B8%D1%85-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F%D1%85)Сообщение с ! и с информацией в футере о ломающих изменениях

chore!: завершение поддержки Node 6  
BREAKING CHANGE: использование JavaScript фичей более недоступна на Node 6.

### [](#%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D0%B1%D0%B5%D0%B7-%D1%82%D0%B5%D0%BB%D0%B0-%D0%B8-%D1%84%D1%83%D1%82%D0%B5%D1%80%D0%B0)Сообщение без тела и футера

docs: корректное написание CHANGELOG

### [](#%D1%81%D0%BE%D0%BE%D0%B1%D1%89%D0%B5%D0%BD%D0%B8%D0%B5-%D1%81-%D1%83%D0%BA%D0%B0%D0%B7%D0%B0%D0%BD%D0%B8%D0%B5%D0%BC-%D1%81%D0%BA%D0%BE%D1%83%D0%BF%D0%B0)Сообщение с указанием скоупа

feat(lang): добавлен английский язык  
refactor(tutorial): оптимизировать работу эпиков в тултипах  
feat(products): добавить баннер с новогодними скидками  
fix(products): исправить в баннере формат даты

## [](#%D0%BE%D1%82%D0%BC%D0%B5%D0%BD%D0%B0-%D0%BA%D0%BE%D0%BC%D0%BC%D0%B8%D1%82%D0%BE%D0%B2)Отмена коммитов

[https://ru.hexlet.io/courses/intro_to_git/lessons/commits-cancelation/theory_unit](https://ru.hexlet.io/courses/intro_to_git/lessons/commits-cancelation/theory_unit)

## [](#%D0%BF%D1%83%D1%88%D0%B8%D0%BC-%D0%B8%D0%B7%D0%BC%D0%B5%D0%BD%D0%B5%D0%BD%D0%B8%D1%8F-%D0%BD%D0%B0-gitlab)Пушим изменения на GitLab

git push --set-upstream origin galichandrey-feature-create-search-component  
Где "galichandrey-feature-create-search-component" - это ветка, в которую вы делаете коммит.

## [](#%D0%B8%D1%81%D1%82%D0%BE%D1%87%D0%BD%D0%B8%D0%BA%D0%B8-%D0%B8-%D0%BF%D0%BE%D0%BB%D0%B5%D0%B7%D0%BD%D1%8B%D0%B5-%D1%81%D1%81%D1%8B%D0%BB%D0%BA%D0%B8)Источники и полезные ссылки

[https://www.conventionalcommits.org](https://www.conventionalcommits.org) - стандарт Conventional Commits  
[https://commitlint.io/](https://commitlint.io/) - онлайн-конструктор правильных коммитов  
[https://github.com/commitizen/cz-cli](https://github.com/commitizen/cz-cli) - генератор коммитов при помощи встроенного визарда  
[https://marionebl.github.io/commitlint](https://marionebl.github.io/commitlint) - Commitlint инструмент для валидации коммитов  
[https://ohshitgit.com/ru](https://ohshitgit.com/ru) - если что-то пошло не так с GIT'ом