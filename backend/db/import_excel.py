import pandas as pd
import sqlalchemy

host = 'localhost'
id = 'docker'
pw = 'docker'
db = 'joyo_kanji'

data = './data/joyo_kanji.xlsx'

engine = sqlalchemy.create_engine('mysql+pymysql://{id}:{pw}@{host}/{db}'.format(
    host=host, id=id, pw=pw, db=db
))

df = pd.read_excel(data)
df.drop(['Unnamed: 0'], axis='columns', inplace=True)
df = df.rename(columns={
    '번호': 'id',
    '뜻': 'mean',
    '한자': 'kanji',
    '훈독': 'kunyomi',
    '음독': 'onyomi'
})
df.to_sql('api_kanji', con=engine, if_exists='append', index=False, chunksize=1)