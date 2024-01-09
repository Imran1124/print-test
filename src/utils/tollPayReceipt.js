export const tollPayReceipt = printData => {
  const text1 =
    '[C]<img>' +
    printData?.keyData?.ulbLogo +
    '</img>\n' +
    printData?.keyData?.ulbName +
    '\n' +
    printData?.keyData?.session +
    '\n' +
    'Date: ' +
    printData?.keyData?.datefrom +
    '\n' +
    '*********************************************** \n' +
    'Description: ' +
    printData?.keyData?.description +
    '\n' +
    'Transaction no: ' +
    printData?.keyData?.transaction_no +
    '\n' +
    'Toll No: ' +
    printData?.keyData?.toll_no +
    '\n' +
    'Vendor Name: ' +
    printData?.keyData?.vendor_name +
    '\n' +
    'Mobile No: ' +
    printData?.keyData?.mobile +
    '\n' +
    'Market: ' +
    printData?.keyData?.market_name +
    '\n' +
    'Circle: ' +
    printData?.keyData?.circle_name +
    '\n' +
    'Payment Date From: ' +
    printData?.keyData?.datefrom +
    '\n' +
    'Payment Date To: ' +
    printData?.keyData?.dateto +
    '\n' +
    'Amount: ' +
    printData?.keyData?.last_amount +
    '\n' +
    '(In Words): ' +
    printData?.keyData?.inWords +
    '\n \n' +
    '***********************************************' +
    '\n' +
    'Tc Name: ' +
    printData?.keyData?.tcName +
    '\n' +
    'Tc Mobile: ' +
    printData?.keyData?.tcMobile +
    '\n \n' +
    '*********************************************** \n' +
    '[C]For Details Please Visit: ' +
    '\n' +
    '[C]' +
    printData?.keyData?.website +
    ' \n' +
    '[C]' +
    printData?.keyData?.toll_free_no +
    '\n' +
    '\n' +
    '\n' +
    '\n' +
    '\n';
  return text1;
};
