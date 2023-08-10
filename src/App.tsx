import {useState, useEffect} from "react";
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import {getData, DataFormater} from "./utils"



function App() {


  const [data, setData] = useState([])


  useEffect(()=>{handelGetData()},[])

  const handelGetData = async() => {



    const apiData = await getData()
    setData(apiData)

  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="record_date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={DataFormater}
        />
        <Bar dataKey="tot_pub_debt_out_amt" fill="#adfa1d" radius={[0, 0, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default App;
