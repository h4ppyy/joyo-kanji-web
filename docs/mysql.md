# mysql

### foreignkey truncate

https://hacknote.jp/archives/19470/

```
mysql> set foreign_key_checks = 0;
mysql> truncate table hoge;
mysql> set foreign_key_checks = 1;
```