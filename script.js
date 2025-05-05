function generateInvoice() {
    window.scrollTo(0, 0);

    const invoiceNumber = document.getElementById('invoiceNumber').value;
    const invoiceDate = document.getElementById('invoiceDate').value;
    const clientName = document.getElementById('clientName').value;
    const clientAddress = document.getElementById('clientAddress').value;
    const clientVAT = document.getElementById('clientVAT').value;
    const clientEmail = document.getElementById('clientEmail').value;
    const description = document.getElementById('description').value;
    const rate = parseFloat(document.getElementById('rate').value);
    const quantity = parseInt(document.getElementById('quantity').value);
    const amount = (rate * quantity).toFixed(2);
    const note = document.getElementById('invoiceNote').value;


    const invoiceHTML = `
    <div style="font-family: Arial, sans-serif; width: 800px; margin: -25px;">
      <div style="font-family: Arial, sans-serif; padding: 40px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start;">
            <div>
                <h2 style="margin: 0; color: #A82424;">DevIgnite</h2>
                <img src="logo.png" alt="DevIgnite Logo" style="height: 100px; margin-bottom: 5px;" />
                <p style="margin: 4px 0;"><a>devignite.co.za</a></p>
                <p style="margin: 4px 0;">devignite3@gmail.com</p>
            </div>
            <div style="text-align: right;">
                <h1 style="margin: 0; font-size: 28px;">INVOICE</h1>
                <p><strong>Invoice #:</strong> ${invoiceNumber}</p>
                <p><strong>Date:</strong> ${invoiceDate}</p>
                <p><strong>Due:</strong> On Receipt</p>
                <p><strong>Balance Due:</strong> ZAR R${amount}</p>
            </div>
        </div>

        <hr style="margin: 30px 0;">
  
        <div style="margin-bottom: 30px;">
            <h3 style="margin-bottom: 5px;">Bill To:</h3>
            <h4 style="white-space: pre-line;">${clientName}</h4>
            <p style="white-space: pre-line;">${clientAddress}</p>
            <p style="white-space: pre-line;">VAT No: ${clientVAT}</p>
            <p style="white-space: pre-line;">${clientEmail}</p>
        </div>
  
        <table style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
            <thead>
                <tr style="background: #f2f2f2;">
                    <th style="text-align: left; padding: 10px;">Description</th>
                    <th style="text-align: right; padding: 10px;">Rate</th>
                    <th style="text-align: right; padding: 10px;">Qty</th>
                    <th style="text-align: right; padding: 10px;">Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px;">${description}</td>
                    <td style="padding: 10px; text-align: right;">R${rate.toFixed(2)}</td>
                    <td style="padding: 10px; text-align: right;">${quantity}</td>
                    <td style="padding: 10px; text-align: right;">R${amount}</td>
                </tr>
            </tbody>
        </table>
  
        <div style="text-align: right; margin-bottom: 40px;">
            <h3 style="margin: 0;">TOTAL: ZAR R${amount}</h3>
        </div>
  
        <div style="border-top: 1px solid #ccc; padding-top: 20px;">
            <p style="margin-top: 20px; white-space: pre-wrap;"><strong>Note:</strong> ${note}</p>
        </div>
    </div>
    `;

    document.getElementById('invoice-preview').innerHTML = invoiceHTML;
    document.getElementById('download-btn').style.display = 'inline-block';
}


function downloadPDF() {
    const invoice = document.getElementById('invoice-preview');
    const opt = {
        margin: 0,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, scrollY: 0 },  // Ensures no top padding
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(invoice).save();
}

