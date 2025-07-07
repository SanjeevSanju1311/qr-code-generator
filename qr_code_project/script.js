 function generateQRCode() {
            const text = document.getElementById('textInput').value;
            const canvas = document.getElementById('qrCanvas');
            const downloadBtn = document.getElementById('downloadBtn');
            const clearBtn = document.getElementById('clearBtn');

            if (text.trim() === '') {
                alert('Please enter some text.');
                return;
            }

            
            QRCode.toCanvas(canvas, text, { width: 300 }, function (error) {
                if (error) {
                    console.error('Error generating QR Code:', error);
                    alert('Failed to generate QR Code. Please try again.');
                } else {
                    console.log('QR Code generated successfully!');
                }
            });

           
            canvas.style.display = 'block';
            downloadBtn.style.display = 'inline-block';
            clearBtn.style.display = 'inline-block';
        }

       
        function downloadQRCode() {
            const canvas = document.getElementById('qrCanvas');
            if (canvas.toDataURL === undefined || canvas.toDataURL() === '') {
                alert('No QR Code to download. Please generate one first.');
                return;
            }
            const link = document.createElement('a');
            link.href = canvas.toDataURL(); 
            link.download = 'qrcode.png'; 
            link.click(); 
        }

       
        function clearFields() {
            const textInput = document.getElementById('textInput');
            const canvas = document.getElementById('qrCanvas');
            const downloadBtn = document.getElementById('downloadBtn');
            const clearBtn = document.getElementById('clearBtn');
           
            
            textInput.value = '';
            const context = canvas.getContext('2d');
            context.clearRect(0, 0, canvas.width, canvas.height);

            
            canvas.style.display = 'none';
            downloadBtn.style.display = 'none';
            clearBtn.style.display = 'none';
        }