____

tags: #gitlab #SSH #SSH-key

links: 

youtube: 
1. [Как клонировать репозиторий с GitLab, SSH-ключ](https://www.youtube.com/watch?v=Vmt0V6a3ppE)

keywords:
1. Для клонирования репозитория зайдём в наш проект #gitlab 
![[Pasted image 20230522162151.png]]
	Нажимаем Clone with #SSH 

~~~	
(git@gitlab.com:levotarayan98/phobos.git)
~~~
2. Используем предустановленный #git-bash , используем консольную команду:
~~~
(git clone)
~~~
Консольная команда сработала с ошибкой, потому что у нас не установлен SSH-key в профиле #gitlab , установим этот ключ.

3. Используем консольную команду в #git-bash :
~~~
ssh-keygen
~~~
У нас инициализировался открытый и закрытый ssh-key. 
Для работы нам необходимо загрузить открый ключ в профиль #gitlab 
~~~
/c/Users/Вадим/.ssh/id_rsa.pub
~~~
Это путь к нашему публичному ключу

4. Используем следующую консольную команду в #git-bash :
~~~
$ cat /c/Users/Вадим/.ssh/id_rsa.pub
~~~
Наш публичный ключ инициализировался в консоли git'а

5.  Вставим инициализированный public #SSH-key в профиль #gitlab :

![[Pasted image 20230522162858.png]]

6. После сохранения ключа в профиле, вернемся в наш #git-bash и осуществим клонирование требуемого репозитория, вводим в консоль:
~~~
$git clone git@gitlab.com:levotarayan98/phobos.git
~~~

7. Репозиторий успешно скопирован!

_____

### Интересные команды #git-bash 

git config --global user.email "vakalushko.job@yandex.ru"

git config --global user.name "Kalushko Vadim A."