# backend

### make virtualenv
```
python -m venv venv
```

### server start
```
python manage.py runserver 0.0.0.0:8000
```

### migrate
```
python manage.py migrate
```

### create super user
```
python manage.py createsuperuser
```
```
ユーザー名 (leave blank to use 'dev'): h4ppyy
メールアドレス: 93immm@naver.com
Password: **********
Password (again): **********

Superuser created successfully.
```

### make migrations
```
python manage.py makemigrations
```

### dump data (utf-8 bug)
```
python manage.py dumpdata --indent 2 api > sql/data/data.json
```

### restore data
```
python manage.py loaddata sql/data/data.json
```

### django admin - change foreign key display

https://btj0.com/blog/django/django-admin-site-customize-foreign-key/