const paymentOptions = document.querySelectorAll('.payment-option');
        
                paymentOptions.forEach(option => {
                    option.addEventListener('click', () => {
                        // BỎ CHECK CÁC Ô KHÁC
                        paymentOptions.forEach(otherOption => {
                            if (otherOption !== option) {
                                otherOption.checked = false;
                            }
                        });
                    });
                });
const form = document.querySelector('form');
                    
form.addEventListener('submit', (event) => {
      // HÀM CHẠY KHI BẤM VÀO Ô SUBMIT
      event.preventDefault();
                
      // đỌC TÊN NHẬP VÀO TRONG FORM
      const name = document.querySelector('#name').value;
      alert(`Cảm ơn ${name} đã đặt hàng thành công!`);
        });