import { useState } from "react"

export default function QRCodeGenerator() {
  const [qrCodeUrl, setQrCodeUrl] = useState("")
  const flyerUrl = window.location.origin + "/flyer"

  const generateQRCode = () => {
    // Using QR Server API for QR code generation
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(flyerUrl)}`
    setQrCodeUrl(qrUrl)
  }

  const downloadQRCode = () => {
    const link = document.createElement("a")
    link.href = qrCodeUrl
    link.download = "meryls-kitchen-qr-code.png"
    link.click()
  }

  return (
    <div className="qr-generator">
      <div className="qr-container">
        <h2 className="qr-title">QR Code for Digital Flyer</h2>
        <p className="qr-description">Generate a QR code that guests can scan to view Meryl's Kitchen digital flyer</p>

        <div className="qr-url-display">
          <label className="url-label">Flyer URL:</label>
          <input type="text" value={flyerUrl} readOnly className="url-input" />
        </div>

        <button onClick={generateQRCode} className="generate-btn">
          Generate QR Code
        </button>

        {qrCodeUrl && (
          <div className="qr-result">
            <div className="qr-code-container">
              <img src={qrCodeUrl || "/placeholder.svg"} alt="QR Code for Meryl's Kitchen" className="qr-code-image" />
            </div>
            <div className="qr-actions">
              <button onClick={downloadQRCode} className="download-btn">
                Download QR Code
              </button>
              <p className="qr-instructions">
                Print this QR code and place it on tables, menus, or promotional materials. Guests can scan it to view
                the digital flyer.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
