"use client";
import { useGetUserTransactions } from "@/core/services/queries";
import styles from "../../styles/MyTransactionPage.module.css";
import { convertToPersianDate } from "@/core/utils/formatDate";
import { convertToPersianNumber } from "@/core/utils/convertToPersianNumber";

function MyTransactionPage() {
  const { data } = useGetUserTransactions();

  if (!data) return;

  return (
    <div className={styles.container}>
      <table>
        <thead>
          <tr>
            {data.data.length === 0 ? (
              <th style={{ textAlign: "center" }}>تراکنشی وجود ندارد</th>
            ) : (
              <>
                <th>تاریخ و ساعت</th>
                <th>مبلغ (تومان)</th>
                <th>نوع تراکنش</th>
                <th>شماره سفارش</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          <>
            {data.data.map((transaction) => (
              <tr key={transaction.id}>
                <td className={styles.date}>
                  {convertToPersianNumber(
                    convertToPersianDate(transaction.createdAt)
                  )}
                </td>
                <td>
                  {`${new Intl.NumberFormat("fa-IR").format(
                    transaction.amount
                  )}٬۰۰۰`}
                </td>
                <td>
                  {transaction.type === "Purchase"
                    ? "ثبت نام در تور گردشگری"
                    : "غیره"}
                </td>
                <td>{`سفارش ${convertToPersianNumber(12054902)}`}</td>
              </tr>
            ))}
          </>
        </tbody>
      </table>
    </div>
  );
}

export default MyTransactionPage;
