import clr
from System import DateTime


class Person:
    name = ''
    age = 0
    
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def getName(self):
        return self.name
    
    def getAge(self):
        return self.age
    
    
class Customer(Person):
    customerSince = DateTime.Now
    awardPoints = 0
    
    def __init__(self, name, age, customerSince):
        Person.__init__(self, name, age)
        self.customerSince = customerSince
        
    def getCustomerSince(self):
        return self.customerSince
    
    def award(self, points):
        self.awardPoints += points

    def isGoldCustomer(self):
        return self.awardPoints >= 100
    
    def isSilverCustomer(self):
        return self.awardPoints >= 75 and self.awardPoints < 100
    
    def isBronzeCustomer(self):
        return self.awardPoints >= 50 and self.awardPoints < 75
    
