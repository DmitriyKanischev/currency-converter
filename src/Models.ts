export interface ICurrency {
    "Date": string,
    "PreviousDate": string,
    "PreviousURL": string,
    "Timestamp": string,
    "Valute": IValute
}

export interface IValute {
    "ID": string,
    "NumCode": string,
    "CharCode": string,
    "Nominal": number,
    "Name": string,
    "Value": number,
    "Previous": number
}
