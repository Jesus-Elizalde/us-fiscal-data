const getData = async () => {
  const response = await fetch(
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date,tot_pub_debt_out_amt"
  );
  const data = await response.json();
  return data;
};
