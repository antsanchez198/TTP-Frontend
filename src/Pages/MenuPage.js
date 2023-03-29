import menuPDF from "../images/Menu.pdf";

export default function MenuPage() {
  return (
    <object data={menuPDF} type="application/pdf" style={{ minHeight: "90vh", width: "100%" }}></object>
  )
}