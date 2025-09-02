export const CURRENCY_PAIRS = [
  { symbol: "EURUSD", name: "Euro / US Dollar", category: "Major" },
  { symbol: "GBPUSD", name: "British Pound / US Dollar", category: "Major" },
  { symbol: "USDJPY", name: "US Dollar / Japanese Yen", category: "Major" },
  { symbol: "USDCHF", name: "US Dollar / Swiss Franc", category: "Major" },
  { symbol: "AUDUSD", name: "Australian Dollar / US Dollar", category: "Major" },
  { symbol: "USDCAD", name: "US Dollar / Canadian Dollar", category: "Major" },
  { symbol: "NZDUSD", name: "New Zealand Dollar / US Dollar", category: "Major" },
  { symbol: "EURGBP", name: "Euro / British Pound", category: "Cross" },
  { symbol: "EURJPY", name: "Euro / Japanese Yen", category: "Cross" },
  { symbol: "GBPJPY", name: "British Pound / Japanese Yen", category: "Cross" },
  { symbol: "EURCHF", name: "Euro / Swiss Franc", category: "Cross" },
  { symbol: "AUDJPY", name: "Australian Dollar / Japanese Yen", category: "Cross" },
]

export const ACCOUNT_TYPES = [
  { value: "demo", label: "Demo Account" },
  { value: "standard", label: "Standard Account" },
  { value: "premium", label: "Premium Account" },
  { value: "vip", label: "VIP Account" },
]

export const TIMEFRAMES = [
  { value: "1m", label: "1 Minute" },
  { value: "5m", label: "5 Minutes" },
  { value: "15m", label: "15 Minutes" },
  { value: "30m", label: "30 Minutes" },
  { value: "1h", label: "1 Hour" },
  { value: "4h", label: "4 Hours" },
  { value: "1d", label: "1 Day" },
  { value: "1w", label: "1 Week" },
  { value: "1M", label: "1 Month" },
]

export const TECHNICAL_INDICATORS = [
  { value: "sma", label: "Simple Moving Average" },
  { value: "ema", label: "Exponential Moving Average" },
  { value: "rsi", label: "Relative Strength Index" },
  { value: "macd", label: "MACD" },
  { value: "bollinger", label: "Bollinger Bands" },
  { value: "stochastic", label: "Stochastic Oscillator" },
  { value: "fibonacci", label: "Fibonacci Retracement" },
]

export const TRANSACTION_TYPES = [
  { value: "deposit", label: "Deposit", color: "text-green-600" },
  { value: "withdrawal", label: "Withdrawal", color: "text-red-600" },
  { value: "trade", label: "Trade", color: "text-blue-600" },
  { value: "bonus", label: "Bonus", color: "text-purple-600" },
  { value: "fee", label: "Fee", color: "text-orange-600" },
]

export const PAYMENT_METHODS = [
  { value: "credit_card", label: "Credit Card", icon: "CreditCard" },
  { value: "bank_transfer", label: "Bank Transfer", icon: "Building2" },
  { value: "paypal", label: "PayPal", icon: "Wallet" },
  { value: "skrill", label: "Skrill", icon: "Smartphone" },
  { value: "neteller", label: "Neteller", icon: "Globe" },
]
