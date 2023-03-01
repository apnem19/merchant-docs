---
title: Создание платежа
---

## Общий API-reference

- Ссылка на метод: `https://api.nebank.co/api/payments`
- Метод: `POST`
- Тип контента: `application/json`

Контент запроса:

| Параметр         | Тип         | Описание                     | Обязательно |
|------------------|-------------|------------------------------|-------------|
| shop_id          | integer     | ID магазина                  | Да          |
| invoice_id       | string      | ID счёта на стороне магазина | Да          |
| description      | integer     | Описание платежа             | Да          |
| amount           | integer     | Сумма в минорных единицах    | Да          |
| method           | string      | Методы оплаты                | Да          |
| signature        | string      | Подпись платежа              | Да          |

Пример ответа на успешный запрос:

```json
{
    "url": "https://pay.nebank.co/pp/123456789",
    "payment_widget": "...",
    "id": 123,
    "pay_id": 123456789,
    "success": true
}
```

- `url` - ссылка на платёжную форму
- `payment_widget` - HTML-код для вставки кнопки оплаты на сайт
- `id` - ID платежа
- `pay_id` - ID платёжной ссылки
- `success` - успешный ли запрос

Пример ответа на запрос с ошибкой:

```json
{
    "code": "...",
    "success": false
}
```

- `code` - код ошибки
- `success` - успешный ли запрос

| Код ошибки          | Описание                      |
|---------------------|-------------------------------|
| FillFields          | Не все поля заполнены         |
| ShopNotExists       | Магазин не существует         |
| ShopMustBeActive    | Магазин должен быть активен   |
| UnknownMethod       | Неизвестный метод оплаты      |
| MethodNotEnabled    | Метод не включен для магазина |
| AmountMustBeInteger | Сумма должна быть числом      |
| IncorrectSignature  | Некорректная подпись          |
| MinAmount           | Сумма ниже минимальной        |
| MaxAmount           | Сумма выше максимальной       |
| PaymentExists       | Такой платёж уже существует   |

## Пример на PHP

```php
<?php
$invoice_id = 'abcde'; // ID платежа на стороне магазина
$shop_id = 1; // ID магазина
$description = 'Ооо тестовое описание заказа, это мы покупаем'; // Описание заказа
$amount = 1000; // Сумма в минорных единицах, здесь указана сумма 10 рублей
$method = 'qiwi'; // Метод оплаты
$key1 = '...'; // Ваш ключ №1 от магазина

$signature = md5("$shop_id:$invoice_id:$amount:$method:$key1");

// Формируем контент запроса
$body = json_encode([
    'shop_id' => $shop_id,
    'invoice_id' => $invoice_id,
    'description' => $description,
    'amount' => $amount,
    'method' => $method,
    'signature' => $signature
]);

// Отправляем запрос
$curl = curl_init('https://api.nebank.co/api/payments');
curl_setopt($curl, CURLOPT_HEADER, false);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
curl_setopt($curl, CURLOPT_HTTPHEADER, ['Content-type: application/json']);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $body);

$response = curl_exec($curl);
curl_close($curl);

// Парсим JSON-ответ
$decoded = json_decode($response, true);

// Выводим ответ
var_dump($decoded);
```

## Пример на NodeJS

```js
```