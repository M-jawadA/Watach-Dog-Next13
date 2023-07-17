import { Transaction ,  Collections } from "..";

export const data=[
    {
        TxnHash:'0x123Hei0001223dju...',
        Date:'15 days 4 hrs ago'
,        From : 'Null Address: 0x00...00',
To:'0x45ty7632skjdbcbu...',
TokenID:'10',
ProfitLoss:'+2.53 ETH',
Type:'ERC-721'
    }
]
export const tableData: Transaction[] = [
    {
      "TxnHash": "0xabc123def456ghi789jkl",
      "Date": "5 days",
      "From": "NullAddress0x00...00",
      "To": "0x987pqr654stu321vwx",
      "TokenID": "100",
      "ProfitLoss": "+1.23 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xdef123abc456ghi789jkl",
      "Date": "10 days",
      "From": "NullAddress0x00...00",
      "To": "0xzyx987wvu654tsr321",
      "TokenID": "200",
      "ProfitLoss": "+0.75 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xghi123def456abc789jkl",
      "Date": "2 days",
      "From": "NullAddress0x00...00",
      "To": "0x321tsr654wvu987zyx",
      "TokenID": "300",
      "ProfitLoss": "-0.50 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xjkl123def456ghi789abc",
      "Date": "20 days",
      "From": "NullAddress0x00...00",
      "To": "0x654wvu987zyx321tsr",
      "TokenID": "400",
      "ProfitLoss": "+3.15 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xxyz123def456abc789jkl",
      "Date": "8 days",
      "From": "NullAddress0x00...00",
      "To": "0x321tsr654wvu987zyx",
      "TokenID": "500",
      "ProfitLoss": "-2.10 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xabc123ghi456def789jkl",
      "Date": "12 days",
      "From": "NullAddress0x00...00",
      "To": "0xzyx987wvu654tsr321",
      "TokenID": "600",
      "ProfitLoss": "+0.85 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xabc123jkl456ghi789def",
      "Date": "3 days",
      "From": "NullAddress0x00...00",
      "To": "0x987pqr654stu321vwx",
      "TokenID": "700",
      "ProfitLoss": "-1.75 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xghi123abc456def789jkl",
      "Date": "18 days",
      "From": "NullAddress0x00...00",
      "To": "0xzyx987wvu654tsr321",
      "TokenID": "800",
      "ProfitLoss": "+2.50 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xdef123ghi456abc789jkl",
      "Date": "9 days",
      "From": "NullAddress0x00...00",
      "To": "0x321tsr654wvu987zyx",
      "TokenID": "900",
      "ProfitLoss": "-0.90 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xabc123def456ghi789jkl",
      "Date": "15 days",
      "From": "NullAddress0x00...00",
      "To": "0x987pqr654stu321vwx",
      "TokenID": "1000",
      "ProfitLoss": "+1.80 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xdef123abc456ghi789jkl",
      "Date": "10 days",
      "From": "NullAddress0x00...00",
      "To": "0xzyx987wvu654tsr321",
      "TokenID": "1100",
      "ProfitLoss": "+0.30 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xghi123def456abc789jkl",
      "Date": "2 days",
      "From": "NullAddress0x00...00",
      "To": "0x321tsr654wvu987zyx",
      "TokenID": "1200",
      "ProfitLoss": "-1.20 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xjkl123def456ghi789abc",
      "Date": "20 days",
      "From": "NullAddress0x00...00",
      "To": "0x654wvu987zyx321tsr",
      "TokenID": "1300",
      "ProfitLoss": "+4.25 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xxyz123def456abc789jkl",
      "Date": "8 days",
      "From": "Null Address: 0x00...00",
      "To": "0x321tsr654wvu987zyx",
      "TokenID": "1400",
      "ProfitLoss": "-3.60 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xabc123ghi456def789jkl",
      "Date": "12 days",
      "From": "NullAddress0x00...00",
      "To": "0xzyx987wvu654tsr321",
      "TokenID": "1500",
      "ProfitLoss": "+1.15 ETH",
      "Type": "ERC-721"
    },
    {
      "TxnHash": "0xabc123jkl456ghi789def",
      "Date": "3 days",
      "From": "NullAddress0x00...00",
      "To": "0x987pqr654stu321vwx",
      "TokenID": "1600",
      "ProfitLoss": "-2.85 ETH",
      "Type": "ERC-721"
    }
  ];
export const collectionData:Collections[] = [
  {
    "id": 123,
    "name": "Usama",
    "floorprice": {
      "price": 10.5,
      "profitLoss": "+4.3"
    },
    "profit": 2.8,
    "minted": 3.5,
    "totalId": 27
  },
  {
    "id": 456,
    "name": "John",
    "floorprice": {
      "price": 8.2,
      "profitLoss": "-2.5"
    },
    "profit": 1.6,
    "minted": 4.2,
    "totalId": 13
  },
  {
    "id": 789,
    "name": "Jane",
    "floorprice": {
      "price": 15.7,
      "profitLoss": "+1.8"
    },
    "profit": 3.2,
    "minted": 2.3,
    "totalId": 42
  },
  {
    "id": 789,
    "name": "Jane",
    "floorprice": {
      "price": 15.7,
      "profitLoss": "+1.8"
    },
    "profit": 3.2,
    "minted": 2.3,
    "totalId": 42
  },
  {
    "id": 456,
    "name": "John",
    "floorprice": {
      "price": 8.2,
      "profitLoss": "-2.5"
    },
    "profit": 1.6,
    "minted": 4.2,
    "totalId": 13
  }
]
export const donutChartData={
    "colors": ["#F19C44", "#D946AA", "#A510FF"],
    "series": [23, 12, 65]
  
}
export const chartData=[
  {
    "sampleA": [
      [16.4, 0],
      [21.7, 1],
      [25.4, 3],
      [19, 5],
      [10.9, 0],
      [13.6, 1],
      [10.9, 3],
      [10.9, 5]
    ],
    "color": "#A510FF"
  },
  {
    "sampleB": [
      [36.4, 0],
      [1.7, 1],
      [5.4, 3],
      [9, 5],
      [1.9, 0],
      [3.6, 1],
      [1.9, 3],
      [1.9, 5]
    ],
    "color": "#F19C44"
  }
]
export const chart=[
  {
    "sampleA": [
      [16.4, 0],
      [21.7, 1],
      [25.4, 3],
      [19, 5],
      [10.9, 0],
      [13.6, 1],
      [10.9, 3],
      [10.9, 5]
    ],
    "color": "#A510FF"
  },
  {
    "sampleB": [
      [36.4, 0],
      [1.7, 1],
      [5.4, 3],
      [9, 5],
      [1.9, 0],
      [3.6, 1],
      [1.9, 3],
      [1.9, 5]
    ],
    "color": "#F19C44"
  }
]
