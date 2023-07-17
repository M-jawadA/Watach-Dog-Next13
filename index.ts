export interface Transaction {
    TxnHash: string;
    Date: string;
    From: string;
    To: string;
    TokenID: string;
    ProfitLoss: string;
    Type: string;
  }
 export interface Collections {
    id: number;
    name: string;
    floorprice: {
      price: number;
      profitLoss: string;
    };
    profit: number;
    minted: number;
    totalId: number;
  }
  export interface Donut {
    color:string []
    series : number []
  }
  export interface  Scatter {
    data?: [number, number][];
    color?: string;
  }