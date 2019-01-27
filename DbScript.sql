insert into "CardPayments" 
("CardPaymentId", "CardNumber", "Expiration", "Cvc", "Sum", "Comment", "Email", "IsSafe")
	values 
	(uuid_generate_v4(), '0123456789012345', '02/20', '042', 75432.10, 'Комментарий №3', 'acorp@gmail.com', true),
	(uuid_generate_v4(), '5432109876543210', '01/19', '007', 1000, 'Комментарий №1', 'bcorp@gmail.com', true),
	(uuid_generate_v4(), '2554447755213303', '04/35', '536', 4004, 'Комментарий №2', 'ccorp@gmail.com', true);

insert into "PaymentRequests" 
("PaymentRequestId", "Inn", "Bic", "AccountNumber", "Vat", "Sum", "Phone", "Email")
	values 
	(uuid_generate_v4(), '912345678901', '012345678', '01234567890123456789', 18, 1000.45, '+7 912 222-33-11', 'acorp@gmail.com'),
	(uuid_generate_v4(), '723456789012', '523456789', '32345678901234567890', 10, 100, '+7 956 967-31-67', 'bcorp@gmail.com'),
	(uuid_generate_v4(), '034567890123', '234567890', '93456789012345678901', 0, 10.15, '+7 902 445-00-34', 'ccorp@gmail.com');