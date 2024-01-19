import jsPDF from "jspdf";

export const downloadAsPDF = async (invoiceData: any, index: number) => {
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.getWidth();
  const margin = 10;
  const maxWidth = pageWidth - margin * 2;

  pdf.setFontSize(20);
  pdf.text(`Invoice #${index + 1}`, margin, 10);

  pdf.setFontSize(12);
  let y = 20;
  const lineHeight = 10;

  y = addWrappedText({
    text: `Company Name: ${invoiceData.companyName}`,
    pdf,
    x: margin,
    y,
    maxWidth,
    lineHeight,
  });

  y = addWrappedText({
    text: `VAT Number: ${invoiceData.vatNumber}`,
    pdf,
    x: margin,
    y,
    maxWidth,
    lineHeight,
  });

  y = addWrappedText({
    text: `Purchase Value: ${invoiceData.purchaseValue}`,
    pdf,
    x: margin,
    y,
    maxWidth,
    lineHeight,
  });

  addWrappedText({
    text: `Description: ${invoiceData.description}`,
    pdf,
    x: margin,
    y: y + lineHeight,
    maxWidth,
    lineHeight: 7,
  });

  pdf.save(`invoice-${index + 1}.pdf`);
};

function addWrappedText({ text, pdf, x, y, maxWidth, lineHeight }: { text: string, pdf: any, x: number, y: number, maxWidth: number, lineHeight: number }) {
    const lines = pdf.splitTextToSize(text, maxWidth);
    pdf.text(x, y + lineHeight / 2, lines);
    return y + lineHeight / 2 + lines.length * lineHeight;
}
