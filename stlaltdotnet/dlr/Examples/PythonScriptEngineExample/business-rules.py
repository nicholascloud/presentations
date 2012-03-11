def withSalesTax(amount):
    return amount * 1.07

total = withSalesTax(amount)
output.Append("Total with tax: %f" % total)