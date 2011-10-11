PRINT 'create database ----------------------------------------------------------------------------'

USE [master];
GO

IF DB_ID('CoffeeShopMVC') IS NOT NULL
	DROP DATABASE CoffeeShopMVC
GO
	
CREATE DATABASE CoffeeShopMVC
GO

USE CoffeeShopMVC
GO

PRINT 'executing DDL ------------------------------------------------------------------------------'

CREATE TABLE Blend (
	BlendID uniqueidentifier
		CONSTRAINT PK_Blend PRIMARY KEY NONCLUSTERED,
	[Name] varchar(100),
	Acidity int,
	Strength varchar(100)
		CHECK(Strength IN ('Light', 'Medium', 'Bold')),
	Upcharge decimal(10,2)
)
GO

CREATE TABLE Ingredient (
	IngredientID uniqueidentifier
		CONSTRAINT PK_Ingredient PRIMARY KEY NONCLUSTERED,
	[Name] varchar(100),
	Upcharge decimal(10,2)
)
GO

CREATE TABLE CupSize (
	CupSizeID uniqueidentifier
		CONSTRAINT PK_CupSize PRIMARY KEY NONCLUSTERED,
	[Name] varchar(100),
	FluidOunces int,
	Upcharge decimal
)
GO

CREATE TABLE Product (
	ProductID uniqueidentifier
		CONSTRAINT PK_Product PRIMARY KEY NONCLUSTERED,
	[Name] varchar(100),
	BasePrice decimal(10,2)
)
GO

CREATE TABLE Drink (
	DrinkID uniqueidentifier
		CONSTRAINT PK_Drink PRIMARY KEY NONCLUSTERED
		CONSTRAINT FK_Drink_Product FOREIGN KEY REFERENCES Product (ProductID),
	BlendID uniqueidentifier
		CONSTRAINT FK_Drink_Blend FOREIGN KEY REFERENCES Blend (BlendID),
	CupSizeID uniqueidentifier
		CONSTRAINT FK_Drink_CupSize FOREIGN KEY REFERENCES CupSize (CupSizeID)
)
GO

CREATE TABLE DrinkIngredient (
	DrinkID uniqueidentifier 
		CONSTRAINT FK_DrinkIngredients_Drink FOREIGN KEY REFERENCES Drink (DrinkID),
	IngredientID uniqueidentifier 
		CONSTRAINT FK_DrinkIngredients_Ingredient FOREIGN KEY REFERENCES Ingredient (IngredientID)
)
GO

PRINT 'executing insert queries -------------------------------------------------------------------'

DELETE FROM DrinkIngredient;
DELETE FROM Drink;
DELETE FROM Product;
DELETE FROM Blend;
DELETE FROM CupSize;
DELETE FROM Ingredient;

-- blend
INSERT INTO Blend (BlendID, [Name], Acidity, Strength, Upcharge) VALUES
	('5B343736-50CF-4EF8-95E9-0FDC15B74A2B', 'Sumatra', 7, 'Bold', 0.2);
INSERT INTO Blend (BlendID, [Name], Acidity, Strength, Upcharge) VALUES
	('08CBB350-714D-483D-8086-0C4B101EE953', 'House', 5, 'Medium', 0.1);
INSERT INTO Blend (BlendID, [Name], Acidity, Strength, Upcharge) VALUES
	('A160F3C8-CB21-461E-9748-86139C97EEEE', 'Breakfast', 3, 'Light', 0.0);
INSERT INTO Blend (BlendID, [Name], Acidity, Strength, Upcharge) VALUES
	('CA78299E-4DB5-4F1A-A015-A02444C1A062', 'Espresso', 10, 'Bold', 0.3);
GO	

-- ingredient
INSERT INTO Ingredient (IngredientID, [Name], Upcharge) VALUES
	('893A7C87-1B0B-4AB3-80A3-CB1279566667', 'Chocolate Syrup', 0.3);
INSERT INTO Ingredient (IngredientID, [Name], Upcharge) VALUES
	('40F0F271-6D7F-4845-8CDF-BA5EE75F7877', 'Vanilla Syrup', 0.3);
INSERT INTO Ingredient (IngredientID, [Name], Upcharge) VALUES
	('C91B5AD4-5501-43EB-8185-47029309C46D', 'Pumpkin Spice', 0.3);
INSERT INTO Ingredient (IngredientID, [Name], Upcharge) VALUES
	('4EAB77C8-19E0-405F-BA0F-D0EC3939B031', 'Steamed Milk', 0.2);
INSERT INTO Ingredient (IngredientID, [Name], Upcharge) VALUES
	('CCFBF536-220F-4002-8E46-AA70A9BA9AB1', 'Whipped Cream', 0.1);
GO

-- cup size
INSERT INTO CupSize (CupSizeID, [Name], FluidOunces, Upcharge) VALUES
	('48071000-0C09-4BB2-B7E1-5A02CCC3356D', 'Small', 12, 0.0);
INSERT INTO CupSize (CupSizeID, [Name], FluidOunces, Upcharge) VALUES
	('6D7D8B1F-4093-405E-A1A9-700C8A53AA46', 'Medium', 16, 0.1); 
INSERT INTO CupSize (CupSizeID, [Name], FluidOunces, Upcharge) VALUES
	('D027FDCF-B864-489C-8B88-F6F0FA977503', 'Large', 18, 0.2);
GO

-- product
INSERT INTO Product (ProductID, [Name], BasePrice) VALUES
	('04E50F8F-A607-4D81-A184-E69947A3AC25', 'Drip Coffee', 1.0);
INSERT INTO Product (ProductID, [Name], BasePrice) VALUES
	('A1DD5A96-59A0-48C0-80D4-7733D95A3C01', 'Drip Coffee', 1.0);
INSERT INTO Product (ProductID, [Name], BasePrice) VALUES
	('2A70ADE3-9AA7-4AE4-8D77-A1C677111F53', 'Vanilla Latte', 2.0);
INSERT INTO Product (ProductID, [Name], BasePrice) VALUES
	('89CC6B25-E9E3-4C1F-A3FC-E0B44AC870F9', 'Pumpkin Spice Latte', 2.0);
INSERT INTO Product (ProductID, [Name], BasePrice) VALUES
	('F77F5F1C-BD2B-4C31-9B3A-A3230A145855', 'Chocolate Mocha', 2.0);
GO

-- drink
INSERT INTO Drink (DrinkID, BlendID, CupSizeID) VALUES --small sumatra drip
	('04E50F8F-A607-4D81-A184-E69947A3AC25', '5B343736-50CF-4EF8-95E9-0FDC15B74A2B', '48071000-0C09-4BB2-B7E1-5A02CCC3356D');
INSERT INTO Drink (DrinkID, BlendID, CupSizeID) VALUES --medium house drip
	('A1DD5A96-59A0-48C0-80D4-7733D95A3C01', '08CBB350-714D-483D-8086-0C4B101EE953', '6D7D8B1F-4093-405E-A1A9-700C8A53AA46');
INSERT INTO Drink (DrinkID, BlendID, CupSizeID) VALUES --medium espresso latte
	('2A70ADE3-9AA7-4AE4-8D77-A1C677111F53', 'CA78299E-4DB5-4F1A-A015-A02444C1A062', '6D7D8B1F-4093-405E-A1A9-700C8A53AA46');
INSERT INTO Drink (DrinkID, BlendID, CupSizeID) VALUES --medium pumpkin spice latte
	('89CC6B25-E9E3-4C1F-A3FC-E0B44AC870F9', 'CA78299E-4DB5-4F1A-A015-A02444C1A062', '6D7D8B1F-4093-405E-A1A9-700C8A53AA46');
INSERT INTO Drink (DrinkID, BlendID, CupSizeID) VALUES --large espresso mocha
	('F77F5F1C-BD2B-4C31-9B3A-A3230A145855', 'CA78299E-4DB5-4F1A-A015-A02444C1A062', 'D027FDCF-B864-489C-8B88-F6F0FA977503');
GO

-- drink ingredient
INSERT INTO DrinkIngredient (DrinkID, IngredientID) VALUES --vanilla latte
	('2A70ADE3-9AA7-4AE4-8D77-A1C677111F53', '4EAB77C8-19E0-405F-BA0F-D0EC3939B031'),
	('2A70ADE3-9AA7-4AE4-8D77-A1C677111F53', '40F0F271-6D7F-4845-8CDF-BA5EE75F7877');
INSERT INTO DrinkIngredient (DrinkID, IngredientID) VALUES --vanilla latte
	('89CC6B25-E9E3-4C1F-A3FC-E0B44AC870F9', '4EAB77C8-19E0-405F-BA0F-D0EC3939B031'),
	('89CC6B25-E9E3-4C1F-A3FC-E0B44AC870F9', 'C91B5AD4-5501-43EB-8185-47029309C46D');
INSERT INTO DrinkIngredient (DrinkID, IngredientID) VALUES --chocolate mocha with whip
	('F77F5F1C-BD2B-4C31-9B3A-A3230A145855', '4EAB77C8-19E0-405F-BA0F-D0EC3939B031'),
	('F77F5F1C-BD2B-4C31-9B3A-A3230A145855', '893A7C87-1B0B-4AB3-80A3-CB1279566667'),
	('F77F5F1C-BD2B-4C31-9B3A-A3230A145855', 'CCFBF536-220F-4002-8E46-AA70A9BA9AB1');
GO