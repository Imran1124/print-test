export const shopDemandReceipt = (
  printData,
  getAllotteeName,
  getMarketName,
) => {
  const text =
    '<img>' +
    printData?.keyData?.ulbLogo +
    '</img>\n' +
    printData?.keyData?.ulbName +
    '\n' +
    'Municipal Rental Receipt\n \n' +
    '*********************************************** \n' +
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
    'Amount: ' +
    printData?.keyData?.totalAmount +
    '\n' +
    '(In words): ' +
    printData?.keyData?.amountinWords +
    '\n' +
    'Demand Details: \n' +
    '[L]Period' +
    '[R]Amount' +
    '\n' +
    printData?.keyData?.shopDemand.map(
      item => item?.financial_year + '[R]' + item?.amount + '\n',
    ) +
    '\n' +
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
