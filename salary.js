
const PAYE_RATES = [
    { min: 0, max: 24000, rate: 10.0 },
    { min: 24001, max: 32333, rate: 25.0 },
    { min: 32334, max: 500000, rate: 30.0 },
    { min: 500001, max: 800000, rate: 32.5 },
    { min: 800001, max: Infinity, rate: 35.0 }
];

const NHIF_RATES = [
    { min: 0, max: 5999, deduction: 150 },
    { min: 6000, max: 7999, deduction: 300 },
    { min: 8000, max: 11999, deduction: 400 },
    { min: 12000, max: 14999, deduction: 500 },
    { min: 15000, max: 19999, deduction: 600 },
    { min: 20000, max: 24999, deduction: 750 },
    { min: 25000, max: 29999, deduction: 850 },
    { min: 30000, max: 34999, deduction: 900 },
    { min: 35000, max: 39999, deduction: 950 },
    { min: 40000, max: 44999, deduction: 1000 },
    { min: 45000, max: 49999, deduction: 1100 },
    { min: 50000, max: 59999, deduction: 1200 },
    { min: 60000, max: 69999, deduction: 1300 },
    { min: 70000, max: 79999, deduction: 1400 },
    { min: 80000, max: 89999, deduction: 1500 },
    { min: 90000, max: 99999, deduction: 1600 },
    { min: 100000, max: Infinity, deduction: 1700 }
];

const NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS = 7000;
const NSSF_TIER_II_LIMIT_FEB_2024_ONWARDS = 36000;
const NSSF_TIER_I_LIMIT_JAN_2024 = 6000;
const NSSF_TIER_II_LIMIT_JAN_2024 = 18000;
const NSSF_CONTRIBUTION_RATE = 0.06; // 6%

// Function to calculate PAYE
function calculatePAYE(grossSalary) {
    let annualSalary = grossSalary * 12;
    let payeTax = 0;

    for (let i = 0; i < PAYE_RATES.length; i++) {
        if (annualSalary <= PAYE_RATES[i].max || i === PAYE_RATES.length - 1) {
            payeTax = (annualSalary - PAYE_RATES[i].min) * (PAYE_RATES[i].rate / 100);
            break;
        }
    }

    return payeTax / 12; // Convert annual PAYE to monthly PAYE
}

// Function to calculate NHIF Deductions
function calculateNHIF(grossSalary) {
    for (let i = 0; i < NHIF_RATES.length; i++) {
        if (grossSalary >= NHIF_RATES[i].min && grossSalary <= NHIF_RATES[i].max) {
            return NHIF_RATES[i].deduction;
        }
    }
    return 0; // Default to 0 if no match found
}

// Function to calculate NSSF Deductions
function calculateNSSF(grossSalary) {
    let nssfDeduction = 0;
    
    if (grossSalary <= NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS) {
        nssfDeduction = grossSalary * NSSF_CONTRIBUTION_RATE;
    } else if (grossSalary <= NSSF_TIER_II_LIMIT_FEB_2024_ONWARDS) {
        nssfDeduction = NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS * NSSF_CONTRIBUTION_RATE +
                        (grossSalary - NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS) * NSSF_CONTRIBUTION_RATE * 2;
    } else {
        nssfDeduction = NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS * NSSF_CONTRIBUTION_RATE +
                        (NSSF_TIER_II_LIMIT_FEB_2024_ONWARDS - NSSF_TIER_I_LIMIT_FEB_2024_ONWARDS) * NSSF_CONTRIBUTION_RATE * 2;
    }

    return nssfDeduction;
}

// Function to calculate Net Salary
function calculateNetSalary(grossSalary, benefits) {
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);

    let deductions = paye + nhif + nssf;
    let netSalary = grossSalary - deductions + benefits;

    return {
        grossSalary: grossSalary,
        paye: paye,
        nhif: nhif,
        nssf: nssf,
        deductions: deductions,
        benefits: benefits,
        netSalary: netSalary
    };
}