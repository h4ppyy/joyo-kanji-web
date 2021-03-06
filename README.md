# joyo kanji

https://en.wikipedia.org/wiki/J%C5%8Dy%C5%8D_kanji

## history
```
2021.01.12 project start
```

## let's start project

### frontend
```
cd frontend
yarn install
yarn start
```

### database
```
cd backend
docker-compose up -d
```

### backend
```
cd backend
python -m venv venv

# for windows
venv\Scripts\activate

$ for macOS, linux
. venv/bin/activate

pip install -r requirements.txt
python manage.py runserver 0.0.0.0:8000
```

### migrate
```
cd backend

python manage.py migrate
python manage.py createsuperuser

cd db
python import_excel.py
```

### user
http://localhost:3000/

### admin
http://localhost:8000/admin

## demo

### user v1
![v1_user](https://github.com/h4ppyy/joyo-kanji-web/blob/master/demo/v1/user.gif?raw=true "v1_user")

### admin v1
![v1_admin](https://github.com/h4ppyy/joyo-kanji-web/blob/master/demo/v1/admin.gif?raw=true "v1_admin")

## dev note

### day-1
https://www.notion.so/joyokanji/64d9e7d998e44337ba10a5dd4b74d58c

### day-2
https://www.notion.so/joyokanji/143e6256be07490b93897fc3c20b5a1f

### day-3
https://www.notion.so/joyokanji/b01d834d4950425a8b61153a36cee8f5