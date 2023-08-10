export const getData = async () => {
  const response = await fetch(
    "https://api.fiscaldata.treasury.gov/services/api/fiscal_service/v2/accounting/od/debt_to_penny?fields=record_date,tot_pub_debt_out_amt"
  );
  const data = await response.json();
  return data.data;
};

export const DataFormater = (number : number) => {
  if (number > 1000000000000) {
    return (number/1000000000000).toString() + 'T';
  }else if(number > 1000000000){
    return (number/1000000000).toString() + 'B';
  }else if(number > 1000000){
    return (number/1000000).toString() + 'M';
  }else if(number > 1000){
    return (number/1000).toString() + 'K';
  }else{
    return number.toString();
  }

  
}
