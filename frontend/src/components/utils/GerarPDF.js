import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

export const gerarPDF = async (elementToPrintId) => {
    const element = document.getElementById(elementToPrintId);
    if (!element) {
        throw new Error(`Element with id ${elementToPrintId} not found`);
    }
    const canvas = await html2canvas(element, { scale: 2 });
    const data = canvas.toDataURL("image/png");
    const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
    });
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth()+50;
    const pdfHeight = ((imgProperties.height * pdfWidth) / imgProperties.width) + 20;
    
    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save("Curriculo.pdf");
};
