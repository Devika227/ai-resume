import html2canvas from 'html2canvas'
import jsPDF from 'jspdf'

export default function DownloadReport(){
  async function download(){
    const el = document.getElementById('report')
    if(!el) return
    const canvas = await html2canvas(el)
    const img = canvas.toDataURL('image/png')
    const pdf = new jsPDF('p','pt','a4')
    const imgProps = pdf.getImageProperties(img)
    const pdfWidth = pdf.internal.pageSize.getWidth()
    const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width
    pdf.addImage(img, 'PNG', 0, 0, pdfWidth, pdfHeight)
    pdf.save('resume-report.pdf')
  }

  return (
    <button onClick={download} className="rounded-2xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 transition hover:bg-indigo-500">Download Report</button>
  )
}
