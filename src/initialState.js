
const user = JSON.parse(localStorage.getItem('profile'))

export const initialState = {
    items: [
        {itemName: '', unitPrice: '', quantity: '', date: ''},
    ],
    total: 0,
    notes: user?.userProfile?.paymentDetails,
    rates: '',
    vat: 0,
    delivery: 0,
    currency: '',
    invoiceNumber: Math.floor(Math.random() * 100000),
    status: '',
    type: 'Invoice',
    creator: '',
}
