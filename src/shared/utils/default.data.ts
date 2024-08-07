import { DEBT_CATEGORY, EXPENSES_CATEGORY, GOAL_TYPE, MAIN_CATEGORY, Owner } from '../enums/enum';

export const income_data = [
  { IncomeSource: 'Main Job' },
  { IncomeSource: 'Main Job' },
  { IncomeSource: 'Side Job' },
  { IncomeSource: 'Side Job' },
  { IncomeSource: 'Interest/Dividends' },
  { IncomeSource: 'Interest/Dividends' },
  { IncomeSource: 'Child Support' },
  { IncomeSource: 'Child Support' },
  { IncomeSource: 'Bonus' },
  { IncomeSource: 'Bonus' },
  { IncomeSource: 'Rental Income' },
  { IncomeSource: 'Rental Income' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
  { IncomeSource: 'Other' },
];

export const savings_data = [
  { Description: '6 mo. Emergency Fund Savings Acct' },
  { Description: '6 mo. Emergency Fund Savings Acct' },
  { Description: "Add'l Savings Acct #1" },
  { Description: "Add'l Savings Acct #2" },
  { Description: "Add'l Savings Acct #3" },
  { Description: "Add'l Savings Acct #4" },
  { Description: 'Investment Account #1' },
  { Description: 'Investment Account #2' },
  { Description: 'Investment Account #3' },
  { Description: '529 Plan: Education Investment Account' },
  { Description: 'Saving for a Home (transfer to a sav acct)' },
  { Description: 'Saving for a Vacation (transfer to a sav acct)' },
  { Description: 'Saving for a Vehicle (transfer to a sav acct)' },
  { Description: 'Saving for Misc. (transfer to a sav acct)' },
  { Description: 'Saving for Misc. (transfer to a sav acct)' },
  { Description: 'Tax Return Refund (deposit to a sav acct)' },
  { Description: 'Extra Paychecks allocated to Savings (deposit to a sav acct)' },
];

export const retirements_data = [
  { Description: 'Retirement (401k, Roth 401K, 403b) Payroll Deductions' },
  { Description: 'Retirement (401k, Roth 401K, 403b) Payroll Deductions' },
  { Description: 'Retirement (401k, Roth 401K, 403b) Prior Job' },
  { Description: 'Retirement (401k, Roth 401K, 403b) Prior Job' },
  { Description: 'IRA' },
  { Description: 'IRA' },
  { Description: 'IRA' },
  { Description: 'ROTH' },
  { Description: 'ROTH' },
  { Description: 'ROTH' },
  { Description: 'Spousal IRA (if file MFJ)' },
  { Description: 'Spousal IRA (if file MFJ)' },
];

export const debt_data = [
  { description: 'Credit Card #1 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #2 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #3 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #4 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #5 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #6 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #7 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #8 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #9 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Credit Card #10 Payment', Category: DEBT_CATEGORY.CREDIT_CARD },
  { description: 'Department Store Card #1', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #2', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #3', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #4', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #5', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #6', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Department Store Card #7', Category: DEBT_CATEGORY.DEPARTMENT_STORE },
  { description: 'Family/Friend Loan Payment', Category: DEBT_CATEGORY.FAMILY_FRIEND_LOAN },
  { description: 'Family/Friend Loan Payment', Category: DEBT_CATEGORY.FAMILY_FRIEND_LOAN },
  {
    description: "Income Tax Lien/Payment Due (Consider making add'l tax withholdings to avoid/minimize a tax bill)",
    Category: DEBT_CATEGORY.OTHER_DEBT,
  },
  { description: 'Medical Debt', Category: DEBT_CATEGORY.MEDICAL_DEBT },
  { description: 'Personal Loan Payment', Category: DEBT_CATEGORY.PERSONAL_LOAN },
  { description: 'Personal Loan Payment', Category: DEBT_CATEGORY.PERSONAL_LOAN },
  { description: 'Student Loans', Category: DEBT_CATEGORY.STUDENT_LOAN },
  { description: 'Student Loans', Category: DEBT_CATEGORY.STUDENT_LOAN },
  { description: 'Student Loans', Category: DEBT_CATEGORY.STUDENT_LOAN },
  { description: 'Student Loans', Category: DEBT_CATEGORY.STUDENT_LOAN },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Other', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Enter', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Enter', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Enter', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Enter', Category: DEBT_CATEGORY.OTHER_DEBT },
  { description: 'Enter', Category: DEBT_CATEGORY.OTHER_DEBT },
];

export const expenses_data = [
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Rent' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Mortgage/House Payment' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Home Equity Line of Credit' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Cable TV / Streaming Services' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Electricity/Gas/Propane' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Garbage' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Gardener' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'HO Insurance' },
  {
    Category: EXPENSES_CATEGORY.HOUSING,
    Description: 'Home Improvement (Consider using a portion of/or all extra paychecks)',
  },
  {
    Category: EXPENSES_CATEGORY.HOUSING,
    Description: 'Home Repairs & Maintenance (Consider using a portion of/or all extra paychecks)',
  },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Home Security' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Homeowner Dues #1' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Homeowner Dues #2' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Housecleaning service' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Pool Service' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Property Taxes' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Sewer' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Water' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Wi-fi / Internet' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Yard/Garden Supplies' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSING, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Car Payment #1' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Car Payment #2' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Car Payment #3' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Car Wash/Detailing Service' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Gas /fuel' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Lease Payment #1' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Lease Payment #2' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Motorcycle Payment' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Parking' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Public transportation (Bart, Bus, Cal Train)' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Repairs & Maintenance' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Vehicle Insurance' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Vehicle Registration Fees (DMV)' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Vehicle Registration Fees (DMV)' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Vehicle Registration Fees (DMV)' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Vehicle Registration Fees (DMV)' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Charities #1' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Charities #2' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Charities #3' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Charities #4' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Charities #5' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Religious Organizations' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Other' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHARITY, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Cleaning Supplies' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: "Coffee houses (Starbucks, Peets, McDonald's)" },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Dining out' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Food Services (Blue Apron)' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Groceries' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Toiletries' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.FOOD, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Concerts/clubs' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Date nights' },
  {
    Category: EXPENSES_CATEGORY.ENTERTAINMENT,
    Description: 'Host Holiday Parties: July 4th, Thanksgiving, Christmas, Other',
  },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Movies/plays' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Parties: Other' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Professional Sporting events' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Adult Children Support' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Allowance/spending money' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Birthday Parties for Children' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Child Care' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Child Care Other (Babysitters)' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Child Support' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Clothes & Shoes' },
  {
    Category: EXPENSES_CATEGORY.CHILDREN,
    Description: 'Computer & Accessories (keyboard & mouse, printer, Ink, Paper)',
  },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Diapers & Formula & baby food' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Gifts for friends' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Lessons (dance, karate, etc.)' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Orthodontist' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Preschool Tuition' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Private School Tuition' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'School Books' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'School Money (Lunches)' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Sports gear & equipment' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Team dues' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Toys/child gear' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.CHILDREN, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.PARENT_ELDER_CARE, Description: 'Parents Support' },
  { Category: EXPENSES_CATEGORY.PARENT_ELDER_CARE, Description: 'Parents Support' },
  { Category: EXPENSES_CATEGORY.PARENT_ELDER_CARE, Description: 'Parents Support' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Dog Walker' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Grooming' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Pet Food' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Pet Insurance' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Pet Meds' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Veterinarian visits' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Procedures not covered by insurance' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Description: 'Enter' },
  {
    Category: EXPENSES_CATEGORY.HEALTH_MEDICAL,
    Description: 'Co-pays/out-of-pocket (Deductibles, especially if in a high deductible plan)',
  },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Gym / Health club dues' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Med spa treatments' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Medical Insurance Premiums' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Over-the-counter drugs' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Prescriptions' },
  {
    Category: EXPENSES_CATEGORY.HEALTH_MEDICAL,
    Description: 'Procedures not covered by insurance (Elective or Cosmetic)',
  },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Vitamins' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Collectables Insurance' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Life Insurance' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Personal Articles Insurance' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: "Renter's Insurance" },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Trust? Do you have one? 1x fee' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Birthday Gifts' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Cell/Telephone' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Christmas Gifts' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Clothing subscriptions (Stitch Fix)' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Clothing, shoes & purses' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Dry Cleaning' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Furniture' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Gifts' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Hobby expenses' },
  {
    Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS,
    Description: 'Household Items (kitchenware, appliances, cookware, home décor etc.)',
  },
  {
    Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS,
    Description: "Income Tax Payment Due (Consider making add'l tax withholdings to avoid/minimize a tax bill)",
  },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Jewelry' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Make-up' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Misc. Allowance' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Office Supplies' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Salon/barber' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Spa Treatments' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Valentines Day Gift(s)' },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Books' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Game Apps' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Magazines & Newspapers' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Other Apps' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Other Monthly Subscription Services' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Professional Dues' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Union Dues' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Boat Payment' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Gas /fuel' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Golf Equipment (Gear, balls, etc.)' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Golfing Tee Fees' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Jetski Payment' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Launch Fees' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Maintenance/Repairs' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Recreational Vehicle' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Insurance: Boat, Jetski, Recreational Vehicle, etc.' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Storage fees' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Trip Expenses (Food, gas)' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Wash/Detailing Service' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.RECREATION, Description: 'Enter' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Vacation #1' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Vacation #2' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Vacation #3' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #1' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #2' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #3' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #4' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #5' },
  { Category: EXPENSES_CATEGORY.VACATIONS, Description: 'Weekend getaway #6' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Gardener - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'HO Insurance - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Home Improvements - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Home Repairs - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Home Security - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Homeowner Dues #1 - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Homeowner Dues #2 - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Housecleaning service - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Mortgage Payment - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Pool Service - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Property Taxes - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Enter - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Enter - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Enter - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Enter - Rental Property' },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Description: 'Enter - Rental Property' },
  { Owner: Owner.SELF, Category: EXPENSES_CATEGORY.JOINT_CONTRIBUTION, Description: 'Self Joint Contribution' },
  { Owner: Owner.PARTNER, Category: EXPENSES_CATEGORY.JOINT_CONTRIBUTION, Description: 'Partner Joint Contribution' },
];

export const goals_data = [
  { Category: DEBT_CATEGORY.CREDIT_CARD, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.DEPARTMENT_STORE, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.FAMILY_FRIEND_LOAN, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.MEDICAL_DEBT, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.OTHER_DEBT, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.PERSONAL_LOAN, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.STUDENT_LOAN, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: DEBT_CATEGORY.CREDIT_CARD, Percentage: 0.0, Type: GOAL_TYPE.DEBT },
  { Category: EXPENSES_CATEGORY.CHILDREN, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.CHARITY, Percentage: 10.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.HOUSING, Percentage: 35.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.DUES_SUBSCRIPTIONS, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.ENTERTAINMENT, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.FOOD, Percentage: 10.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.HEALTH_MEDICAL, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.HOUSEHOLD_PERSONAL_CARE_AND_GIFTS, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.OTHER_INSURANCE, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.PARENT_ELDER_CARE, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.PETS_ANIMAL, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.RECREATION, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.RENTAL_PROPERTY, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.TRANSPORTATION, Percentage: 10.0, Type: GOAL_TYPE.EXPENSE },
  { Category: EXPENSES_CATEGORY.VACATIONS, Percentage: 0.0, Type: GOAL_TYPE.EXPENSE },
  { Category: MAIN_CATEGORY.EXPENSES, Percentage: 80.0, Type: GOAL_TYPE.MAIN },
  { Category: MAIN_CATEGORY.DEBTS, Percentage: 0.0, Type: GOAL_TYPE.MAIN },
  { Category: MAIN_CATEGORY.RETIREMENT, Percentage: 15.0, Type: GOAL_TYPE.MAIN },
  { Category: MAIN_CATEGORY.SAVINGS, Percentage: 5.0, Type: GOAL_TYPE.MAIN },
];
