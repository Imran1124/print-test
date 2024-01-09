import {NativeModules} from 'react-native';
import {PINELAB_APP_ID_KEY} from '@env';

const {PineLab} = NativeModules;

// for payment type
export const paymentForPineLab = async ({
  BillingRefNo,
  PaymentAmount,
  TransactionType,
  UserId,
  MethodId,
  VersionNo,
}) => {
  const res = await PineLab.onPaymentStart(
    JSON.stringify({
      Detail: {
        BillingRefNo: BillingRefNo,
        PaymentAmount: PaymentAmount * 100,
        // TransactionType: 5120, // for UPI
        // TransactionType: 4001, // for CARD
        TransactionType: TransactionType,
      },
      Header: {
        ApplicationId: PINELAB_APP_ID_KEY,
        UserId: UserId,
        MethodId: MethodId,
        VersionNo: VersionNo,
      },
    }),
  );
  return res;
};

//  form print receipt
export const printForPineLab = async ({
  printReceiptData,
  UserId,
  MethodId,
  SavePrintData,
  VersionNo,
}) => {
  const res = await PineLab.onPaymentStart(
    JSON.stringify({
      Detail: {
        PrintRefNo:
          printReceiptData?.PrintRefNo ||
          Math.random(100000000000000, 999999999999999).toString(),
        SavePrintData: SavePrintData,
        Data: printReceiptData?.Data?.map(item => item),
      },
      Header: {
        ApplicationId: PINELAB_APP_ID_KEY,
        UserId: UserId,
        MethodId: MethodId,
        VersionNo: VersionNo,
      },
    }),
  );
  return res;
};
