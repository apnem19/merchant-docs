---
title: Формирование подписи
---

# Формирование подписи запроса

## Запрос на создание платежа

Для формирования подписи запроса на создания платежа необходимо сформировать md5-хеш в следующем формате:

```
ID_МАГАЗИНА:ID_СЧЁТА:СУММА:МЕТОД:КЛЮЧ_1
```

Где:
- `ID_МАГАЗИНА` - ID вашего магазина
- `ID_СЧЁТА` - ID счёта на стороне магазина
- `СУММА` - Сумма заказа в минорных единицах
- `МЕТОД` - Метод оплаты: qiwi, card_cis или card_nocis
- `КЛЮЧ_1` - Ключ магазина №1

## Проверка подписи результата платежа

Для формирования проверочной подиси необходимо сформировать md5-хеш в следующем формате:

```
КЛЮЧ_2:ID_ПЛАТЕЖА:ХЕШ_1
```

Где:
- `КЛЮЧ_2` - Ключ магазина №2
- `ID_ПЛАТЕЖА` - Идентификатор платежа, который вернёт API после создания платежа
- `ХЕШ_1` - Подпись которую мы сформировали при создании платежа