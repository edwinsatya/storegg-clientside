import {
  SideBar,
  TransactionDetailContent,
} from "../../../components/organisms";

export default function TransactionsDetail() {
  return (
    <section className="transactions-detail overflow-auto">
      <SideBar activeMenu="transactions" />
      <TransactionDetailContent />
    </section>
  );
}
