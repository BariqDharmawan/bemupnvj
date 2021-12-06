const $node = $(".pdf-embed");

$node.each(function (index, pdfEl) {
  const pdfSrc = pdfEl.dataset.pdfSrc
  const pdfId = pdfEl.getAttribute('id')

  console.log(pdfSrc, pdfId)
  PDFObject.embed(pdfSrc, `#${pdfId}`);
})
