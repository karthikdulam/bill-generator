import { useState, useEffect, useImperativeHandle, forwardRef } from 'react'
import { formatDate } from '../utils'

const FuelBillPreview = forwardRef(function FuelBillPreview({ data }, ref) {
  const [logoError, setLogoError] = useState(false)
  const [rotatedSideUrl, setRotatedSideUrl] = useState(null)
  const [wmOffset, setWmOffset] = useState(() => Math.floor(Math.random() * 300))
  const sideSrc = data.sideLogo || '/logos/side-logo.png'

  useImperativeHandle(ref, () => ({
    reloadWatermark() {
      setWmOffset(Math.floor(Math.random() * 300))
    }
  }))

  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = img.height
      canvas.height = img.width * 2
      const ctx = canvas.getContext('2d')
      ctx.translate(0, img.width)
      ctx.rotate(-Math.PI / 2)
      ctx.drawImage(img, 0, 0)
      setRotatedSideUrl(canvas.toDataURL())
    }
    img.src = sideSrc
  }, [sideSrc])

  return (
    <div className="fuel-receipt">
      {rotatedSideUrl && (
        <div
          className="fuel-side-strip"
          style={{
            backgroundImage: `url(${rotatedSideUrl})`,
            backgroundPositionY: `${wmOffset}px`,
          }}
        />
      )}

      <div className="fuel-content">
        <div className="fuel-logo-container">
          {!logoError ? (
            <img
              src={data.logo}
              alt=""
              onError={() => setLogoError(true)}
            />
          ) : (
            <div className="fuel-logo-placeholder">HP</div>
          )}
        </div>

        <div className="fuel-welcome">WELCOME!!!</div>
        <div className="fuel-gap" />

        <div className="fuel-station-info">
          {data.stationName.split('\n').map((line, i) => (
            <span key={i}>{line} </span>
          ))}
          {data.stationAddress}
        </div>

        <div className="fuel-line">Receipt No.: {data.receiptNo}</div>
        <div className="fuel-gap-lg" />

        <div className="fuel-block">
          <div className="fuel-line">PRODUCT: {data.product}</div>
          <div className="fuel-line">RATE/LTR: ₹ {data.rateLtr}</div>
          <div className="fuel-line">AMOUNT: ₹ {data.amount}</div>
          <div className="fuel-line">VOLUME(LTR.): {(Number(data.amount) / Number(data.rateLtr)).toFixed(2)} lt</div>
        </div>
        <div className="fuel-gap-lg" />

        <div className="fuel-block">
          <div className="fuel-line">VEH TYPE: {data.vehicleType}</div>
          <div className="fuel-line">VEH NO: {data.vehicleNo}</div>
          <div className="fuel-line">CUSTOMER NAME: {data.customerName}</div>
        </div>
        <div className="fuel-gap-lg" />

        <div className="fuel-datetime">
          <div className="fuel-dt-left">
            <span>Date: {formatDate(data.date).split(' ').slice(0, 2).join(' ')}</span>
            <br />
            <span>{formatDate(data.date).split(' ').slice(2).join(' ')}</span>
          </div>
          <div className="fuel-dt-right">
            <span>Time:</span>
            <br />
            <span>{data.time}</span>
          </div>
        </div>
        <div className="fuel-gap" />

        <div className="fuel-line">MODE: {data.mode}</div>
        <div className="fuel-gap-lg" />
        <div className="fuel-gap-lg" />

        <div className="fuel-footer">
          SAVE FUEL YAANI SAVE MONEY !! THANKS FOR FUELLING WITH US. YOU CAN NOW CALL US ON 323940 (TOLL-FREE) FOR QUERIES/COMPLAINTS.
        </div>
      </div>
    </div>
  )
})

export default FuelBillPreview
