# Структура

Обычно файловая структура UpCss выглядит следующим образом:

* base
* modules
* application
  * layouts
  * pages
  * sections

Далее рассмотрим каждый раздел индивидуально.

### Base
В стадии наполнения...

[Подробнее про Base](./upCss-base.md)

### Modules
В данном разделе могут находиться персональные заготовки, которые могут быть 
переиспользованы в различных проектах.

[Подробнее про Modules](./upCss-modules.md)

### Application
Непосредственно раздел со всеми стилями Вашего приложения.

**layouts**
В стадии наполнения...

**pages**
В стадии наполнения...

**sections**
В стадии наполнения...

[Подробнее про Application](./upCss-application.md)


## Пример базовой структуры UpCss

* **build.scss**
* **base**
    * _reset.scss
    * _mixins.scss
    * _config.scss
    * _fonts.scss
    * _grid.scss
* **modules**
    * _alerts.scss
    * _buttons.scss
    * _forms.scss
    * _pagination.scss
    * _table.scss
* **application**
    * layouts
        * base.scss
        * auth.scss
        * modal.scss
    * pages
        * home.scss
        * contact.scss
        * faq.scss
        * error.scss
    * sections
        * _footer.scss
        * _header.scss
        * _headline.scss
        
        
## Пример файла для простой сборки

В качестве простого примера, представлен файл **build.scss** для компиляции
SCSS в один CSS файл:

```
// Base
@import 'base/reset';
@import 'base/mixins';
@import 'base/config';
@import 'base/fonts';
@import 'base/grid';

// Modules
@import 'modules/alerts';
@import 'modules/buttons';
@import 'modules/forms';
@import 'modules/pagination';
@import 'modules/table';

// Application/Layouts
@import 'application/layouts/base.scss';
@import 'application/layouts/auth.scss';
@import 'application/layouts/modal.scss';

// Application/Sections
@import 'application/sections/header';
@import 'application/sections/footer';
@import 'application/sections/headline';

// Application/Pages
@import 'application/pages/home.scss';
@import 'application/pages/contact.scss';
@import 'application/pages/faq.scss';
@import 'application/pages/error.scss';
```

В небольшом проекте приемлемо на выходе получить один CSS файл 
со всеми стилями, минифицировать и сжать его.
К примеру это может быть styles.css.

[Посмотреть пример сборки](../additionally/build.md)

--------

[Перейти к изучению базовых правил](./base-rules.md)

[Перейти к изучению соглашения о именовании](./naming-convention.md)