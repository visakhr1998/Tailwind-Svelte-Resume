<script>
    const downloadPDF = () => {
      const pdfPath = "./Visakh_Radhakrishnan_CV.pdf"; // Update the path based on your file location
      const link = document.createElement('a');
      link.href = pdfPath;
      link.download = 'Visakh_Radhakrishnan_CV.pdf';
      link.click();
    };
  </script>
  
  <button on:click={downloadPDF}>
    Download PDF
  </button>
  
  <style>
    /* Add styling for the button if needed */
    button {
      padding: 8px 16px;
      background-color: #a5af4c;
      color: #fff;
      cursor: pointer;
      border: none;
      border-radius: 4px;
      transition: background-color 0.3s, transform 0.3s;
    }
  
    button:hover {
      background-color: #45a149;
      transform: translateY(-2px);
    }
  </style>