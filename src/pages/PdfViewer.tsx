import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import styles from '../assets/styles/components/pdfViewer.module.css';

// Configuração do worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;

interface PdfViewerProps {
  pdfUrl: string;
  className?: string;
}

export const PdfViewer: React.FC<PdfViewerProps> = ({ pdfUrl, className }) => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const verifyPdf = async () => {
      try {
        const response = await fetch(pdfUrl);
        
        if (!response.ok) {
          throw new Error(`PDF não encontrado (Status: ${response.status})`);
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/pdf')) {
          throw new Error('O arquivo não é um PDF válido');
        }
        
        setLoading(false);
      } catch (err) {
        let errorMessage = 'Erro desconhecido ao carregar o PDF';
        
        if (err instanceof Error) {
          errorMessage = err.message;
        } else if (typeof err === 'string') {
          errorMessage = err;
        }
        
        setError(errorMessage);
        setLoading(false);
        console.error('Erro ao carregar PDF:', err);
      }
    };

    verifyPdf();
  }, [pdfUrl]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  function onDocumentLoadError(error: Error) {
    setError(`Falha ao renderizar o PDF: ${error.message}`);
    console.error('Erro no documento PDF:', error);
  }

  const goToPrevPage = () => setPageNumber(prev => Math.max(1, prev - 1));
  const goToNextPage = () => setPageNumber(prev => Math.min(numPages || 1, prev + 1));

  if (loading) return (
    <div className={styles.pdfLoading}>
      <div className={styles.spinner}></div>
      <p>Carregando PDF...</p>
    </div>
  );

  if (error) return (
    <div className={styles.pdfError}>
      <p>Erro ao carregar o PDF</p>
      <p className={styles.errorDetail}>{error}</p>
    </div>
  );

  return (
    <div className={`${styles.pdfViewer} ${className || ''}`}>
      <div className={styles.pdfDocument}>
        <Document
          file={pdfUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadError}
          loading={<div className={styles.pdfLoadingText}>Preparando documento...</div>}
        >
          <Page 
            pageNumber={pageNumber} 
            width={Math.min(window.innerWidth - 40, 800)}
            loading={<div className={styles.pdfLoadingText}>Carregando página...</div>}
          />
        </Document>
      </div>
      
      <div className={styles.pdfControls}>
        <button 
          onClick={goToPrevPage}
          disabled={pageNumber <= 1}
          aria-label="Página anterior"
          className={styles.navButton}
        >
          &larr; Anterior
        </button>
        
        <span className={styles.pageCounter}>
          Página {pageNumber} de {numPages || '--'}
        </span>
        
        <button 
          onClick={goToNextPage}
          disabled={!numPages || pageNumber >= numPages}
          aria-label="Próxima página"
          className={styles.navButton}
        >
          Próxima &rarr;
        </button>
      </div>
    </div>
  );
};