#

Каждый браузер устанавливает свои значения стилей по умолчанию для
различных HTML-элементов. С помощью CSS Reset и Normalize мы можем
организовать общие стили для обеспечения кроссбраузерности. Поэтому
хорошей практикой будет использование CSS
[Reset](https://github.com/filipelinhares/ress)
или [Normalize](https://github.com/necolas/normalize.css/).



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

// Application/Sections
@import 'application/sections/header';
@import 'application/sections/footer';
@import 'application/sections/headline';

// Application/Layouts
@import 'application/layouts/base.scss';
@import 'application/layouts/auth.scss';
@import 'application/layouts/modal.scss';

// Application/Pages
@import 'application/pages/home.scss';
@import 'application/pages/contact.scss';
@import 'application/pages/faq.scss';
@import 'application/pages/error.scss';
```

В небольшом проекте приемлемо на выходе получить один CSS файл
со всеми стилями, минифицировать и сжать его.
К примеру это может быть styles.min.css.

[Посмотреть пример сборки](../additionally/build.md)