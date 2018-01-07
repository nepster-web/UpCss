# Структура

Обычно базавая структура выглядит следующим образом:
* base
* modules
* application
  * layouts
  * pages
  * sections






### Base
test

### Modules
test


### Application
test

**layouts**

**pages**

**sections**



# Примечание 

**build.scss**:

```
// Base
@import 'base/reset';
@import 'base/mixins';
@import 'base/config';

// Modules
@import 'modules/alerts';
@import 'modules/buttons';
@import 'modules/forms';
@import 'modules/table';

// Application/Layouts
@import 'application/layouts/base.scss';

// Application/Sections
@import 'application/sections/header';
@import 'application/sections/footer';

// Application/Pages
@import 'application/pages/home.scss';
@import 'application/pages/contact.scss';
@import 'application/pages/error.scss';
```