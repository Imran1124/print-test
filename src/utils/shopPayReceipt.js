export const shopPayReceipt = (
  printData,
  getAllotteeName,
  getMarketName,
  changeMode,
) => {
  const text =
    '<img>https://egov.modernulb.com/Uploads/Icon/akolall.png</img> \n' +
    printData?.keyData?.ulbName +
    '\n' +
    'Municipal Rental Receipt\n \n' +
    '*********************************************** \n' +
    'Transaction Date: ' +
    printData?.keyData?.paymentDate +
    '\n' +
    'Allottee Name: ' +
    getAllotteeName +
    '\n' +
    'Market: ' +
    getMarketName +
    '\n' +
    'Shop No: ' +
    printData?.keyData?.shopNo +
    '\n' +
    'Shop Category: ' +
    printData?.keyData?.shopType +
    '\n' +
    'Financial Year from: ' +
    printData?.keyData?.paidFrom +
    '\n' +
    'Financial Year to: ' +
    printData?.keyData?.paidTo +
    '\n' +
    'Amount: ' +
    printData?.keyData?.amount +
    '\n' +
    '(In words): ' +
    printData?.keyData?.amountInWords +
    '\n' +
    changeMode() +
    '\n' +
    'Payment Status: ' +
    printData?.keyData?.paymentStatus +
    '\n' +
    '***********************************************' +
    '\n' +
    'Tc Name: ' +
    printData?.keyData?.receiverName +
    '\n' +
    'Tc Mobile: ' +
    printData?.keyData?.receiverMobile +
    '\n \n' +
    '*********************************************** \n' +
    '[C]For Details Please Visit: ' +
    '\n' +
    '[C]' +
    printData?.keyData?.website +
    ' \n' +
    '[C]' +
    printData?.keyData?.tollFreeNo +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n';
  return text;
};
