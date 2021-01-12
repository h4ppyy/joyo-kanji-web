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