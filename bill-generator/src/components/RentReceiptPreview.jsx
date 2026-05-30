import { formatDate } from '../utils'

export default function RentReceiptPreview({ data }) {
  const amountNum = Number(data.rentAmount)
  const amountWords = numberToWords(amountNum)

  return (
    <div className="rent-receipt">
      <div className="rent-header">Rent Receipt</div>
      <div className="rent-subheader">Original for Tenant</div>
      <hr className="rent-hr" />

      <div className="rent-meta-row">
        <div>
          <span className="rent-detail-label">Receipt No:</span> {data.receiptNo}
        </div>
        <div>
          <span className="rent-detail-label">Date:</span> {formatDate(data.date)}
        </div>
      </div>

      <div className="rent-body">
        <div className="rent-body-text">
          Received a sum of <span className="rent-highlight">₹ {data.rentAmount}</span>{' '}
          ({amountWords}) from{' '}
          <span className="rent-highlight">{data.tenantName}</span>{' '}
          towards rent for the period of{' '}
          <span className="rent-highlight">{data.rentPeriod}</span>{' '}
          for the property located at:
        </div>
      </div>

      <div className="rent-details-grid">
        <div className="label">Property Address:</div>
        <div>{data.propertyAddress}</div>

        <div className="label">Payment Mode:</div>
        <div>{data.paymentMode}</div>

        <div className="label">Landlord Name:</div>
        <div>{data.landlordName}</div>

        <div className="label">Landlord PAN:</div>
        <div>{data.landlordPan}</div>
      </div>

      <div className="rent-signature-area">
        <div className="rent-stamp">
          Revenue<br />Stamp
        </div>
        <div className="rent-signature">
          <div className="rent-signature-line"></div>
          <div className="rent-signature-text">Signature of Landlord</div>
          <div className="rent-signature-text" style={{ fontWeight: 600, color: '#333' }}>{data.landlordName}</div>
        </div>
      </div>

      <div className="rent-note">
        This receipt is generated for the purpose of claiming HRA exemption under Section 10(13A) of the Income Tax Act, 1961.
      </div>
    </div>
  )
}

function numberToWords(num) {
  if (isNaN(num) || num === 0) return 'Zero'
  const ones = ['', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine',
    'Ten', 'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']
  const tens = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety']

  function convert(n) {
    if (n < 20) return ones[n]
    if (n < 100) return tens[Math.floor(n / 10)] + (n % 10 ? ' ' + ones[n % 10] : '')
    if (n < 1000) return ones[Math.floor(n / 100)] + ' Hundred' + (n % 100 ? ' and ' + convert(n % 100) : '')
    if (n < 100000) return convert(Math.floor(n / 1000)) + ' Thousand' + (n % 1000 ? ' ' + convert(n % 1000) : '')
    if (n < 10000000) return convert(Math.floor(n / 100000)) + ' Lakh' + (n % 100000 ? ' ' + convert(n % 100000) : '')
    return convert(Math.floor(n / 10000000)) + ' Crore' + (n % 10000000 ? ' ' + convert(n % 10000000) : '')
  }

  return convert(Math.floor(num)) + ' Rupees Only'
}
