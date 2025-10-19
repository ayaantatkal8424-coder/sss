console.log("Pigeon Payments Script Injected - Full Version");
document.title = "Pigeon Booking Tab";

try {
    let pigeonFavIcon = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAACxAAAAsQHGLUmNAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA3xJREFUSImdlc9PXUUcxc/MvcDDR3+89Cm1QiMSGiJtl/oXgJHEVNK0kph2oa0LtQtrE1cu9E9oXLkxNSYmFkKpae3ChYsubFNQ4gIlbVFKoVggpZTH4935nuMCgQu819JOcnPnzuJz7vnOme84PGYcuaG9gXybZCehl41qoAlBGpf4dwi8ZIz7r7bXjlViuHKL7w6poVTi5ya8b2RECUaBFEwCSdjqXDShl+Jn19/YOfpEgaODOizTOZOyRuIJ8PTaIxmPD76V70vzfPrjnUGdlun8M8BBqS4AvW0X739S1kH3gLqM6jHJPwM89aYodv/V9eIPqwLd19VoTsMb/7zaCQ6AUvAlExYCK8FX5o+KFlrHjzbejQHAPL80YlNZPmyJ0V4fbQrBXCL8PFnCVyMFzBY3wWFUXUR8AeCEO3JDe428XS4tZ/bF6KiPKyUQt+YN3b9MY4FuvRsSJhnlm2KSXZWiKK3BvvtzFkNT88hla/HBgTzyNR7N2yJ05Eo4P+mgKE7DQSqikkNxIN+stKFpgaGpeVy5eR+oyaImk8Gn+7cDAF7NZ7E08Af87ibIRetCYESnp9RcKS3CmoJ8DNRkgZrn8Hxt1ep6ISEsGJJ7Y7CQpOACyVdiUrsrRTHt4Pj+F9DRvAs7qiO8ll8TuHJzCnIOpEEz94BcPQx+pVQvxfaYnKcdHMxV4WBuDSwAZ3+bwq+j/4LOLz8kODcDZHfCnAcpxiZNkmwpd4jSDkbmEkwvJlhIiH/mirg4PImBO9NrcBctv83AwkMosw0BbiImecuolnInVCmFs9dG8ePQKPQ/TM5thsOBPgIpsLgIVWdu+2C8XOn4pwxAwtbgcDBEoAArLf3kjXE/KSvXW9IlWoZuDS7nYQ6WVNde8Ffba8cCeK5cb0l7INxTwB3MRd/gZMu4A4DXL880BLhhSnXpxhWXCsD0HRgcFkqGJWKr8Hla1IpTrRMeAK517ho38JhRTDeuxSiD+e178KAYngLuReE9nGqdAFIXzu+d+QsmnTFS6/ahKgOXb4B8vBU4CX8aH7X1rHA3XZn7eqe6CH5rVF2qcSGUiggPZ0GhclmIY/i4rT/N8xsFRg7X9xUttMr4tUlhNb5RNZDNgT7eCGeA7yHdgY3wsg7SY8/3dxvJ5FAgOkk2mdTAEBCKhQl5P2rmLyWZTB9OtoxXYvwHJB0UzJWce+8AAAAASUVORK5CYII=`;
    var link = document.querySelectorAll("link[type='image/x-icon']");
    if (link.length > 0) {
        link[0].href = pigeonFavIcon;
        if (link.length > 1) {
            link[1].href = pigeonFavIcon;
        }
    }
} catch (error) {
    console.log("Icon update error:", error);
}

// Global Variables
var pigeonPaymentData = null;
var paymentInitiatedTime = null;
var paymentCompletedTime = null;
var passengerDetails = {
    name: "",
    age: "",
    gender: "",
    berth: "",
    mobileNumber: "",
    email: ""
};

// ==================== PASSENGER DETAILS SECTION ====================

function fillPassengerDetails() {
    console.log("Filling Passenger Details...");
    updatePigeonStatus("Filling Passenger Details...");
    
    setTimeout(() => {
        try {
            // Fill name field
            const nameInputs = document.querySelectorAll('input[placeholder*="Name"], input[name*="name"], input[placeholder*="name"]');
            if (nameInputs.length > 0) {
                nameInputs[0].value = pigeonPaymentData.passengerName || "John Doe";
                nameInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                nameInputs[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            // Fill age field
            const ageInputs = document.querySelectorAll('input[placeholder*="Age"], input[name*="age"], input[placeholder*="age"]');
            if (ageInputs.length > 0) {
                ageInputs[0].value = pigeonPaymentData.passengerAge || "25";
                ageInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                ageInputs[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            // Select gender
            const genderSelects = document.querySelectorAll('select[name*="gender"], select[name*="Gender"]');
            if (genderSelects.length > 0) {
                genderSelects[0].value = pigeonPaymentData.passengerGender || "M";
                genderSelects[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            // Fill mobile number
            const mobileInputs = document.querySelectorAll('input[placeholder*="Mobile"], input[name*="mobile"], input[type="tel"]');
            if (mobileInputs.length > 0) {
                mobileInputs[0].value = pigeonPaymentData.mobileNumber || "9876543210";
                mobileInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                mobileInputs[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            // Fill email
            const emailInputs = document.querySelectorAll('input[type="email"], input[placeholder*="Email"]');
            if (emailInputs.length > 0) {
                emailInputs[0].value = pigeonPaymentData.email || "user@example.com";
                emailInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                emailInputs[0].dispatchEvent(new Event('change', { bubbles: true }));
            }
            
            updatePigeonStatus("Passenger Details Filled Successfully");
            
            // Auto-click continue button
            setTimeout(() => {
                continueToPayment();
            }, 500);
            
        } catch (error) {
            console.log("Error filling passenger details:", error);
            updatePigeonStatus("Error filling details. Please fill manually.");
        }
    }, 300);
}

function continueToPayment() {
    console.log("Continuing to Payment Selection...");
    updatePigeonStatus("Moving to Payment Selection...");
    
    setTimeout(() => {
        const continueBtn = document.querySelector('button[type="submit"], button:contains("Continue"), button.continue-btn, .continue-payment, button[name="continue"]');
        if (continueBtn) {
            continueBtn.click();
            console.log("Continue button clicked");
        } else {
            console.log("Continue button not found");
        }
    }, 500);
}

// ==================== PAYMENT METHOD SELECTION SECTION ====================

function selectPaymentMethod() {
    console.log("Selecting Payment Methods...");
    updatePigeonStatus("Selecting Payment Methods...");
    
    setTimeout(() => {
        try {
            // Find all payment method options
            const paymentOptions = document.querySelectorAll(
                'input[type="radio"][data-payment], input[type="radio"][name*="payment"], ' +
                'input[type="checkbox"][data-payment], input[type="checkbox"][name*="payment"], ' +
                '.payment-option, [data-payment-method]'
            );
            
            console.log(`Found ${paymentOptions.length} payment options`);
            
            // Select multiple payment methods
            let selectedCount = 0;
            paymentOptions.forEach((option, index) => {
                if (index < 3 && selectedCount < 3) {
                    if (option.type === 'radio' || option.type === 'checkbox') {
                        option.checked = true;
                        option.dispatchEvent(new Event('change', { bubbles: true }));
                        option.dispatchEvent(new Event('click', { bubbles: true }));
                        selectedCount++;
                        console.log(`Selected payment option ${index}`);
                    }
                }
            });
            
            updatePigeonStatus("Multiple Payment Methods Selected");
            
            // Auto-select Paytm and proceed
            setTimeout(() => {
                selectPaytmMethod();
            }, 800);
            
        } catch (error) {
            console.log("Error selecting payment methods:", error);
        }
    }, 500);
}

function selectPaytmMethod() {
    console.log("Selecting Paytm Payment Method...");
    updatePigeonStatus("Selecting Paytm QR Payment...");
    
    setTimeout(() => {
        try {
            // Find Paytm payment option
            const paytmOptions = document.querySelectorAll(
                'input[value*="Paytm"], input[value*="PAYTM"], input[data-method="paytm"], ' +
                'input[data-payment*="paytm"], .paytm-option, button[data-method="paytm"]'
            );
            
            let paytmSelected = false;
            
            paytmOptions.forEach((option) => {
                if (option.type === 'radio' || option.type === 'checkbox') {
                    option.checked = true;
                    option.dispatchEvent(new Event('change', { bubbles: true }));
                    option.dispatchEvent(new Event('click', { bubbles: true }));
                    paytmSelected = true;
                    console.log("Paytm selected via radio/checkbox");
                } else if (option.tagName === 'BUTTON') {
                    option.click();
                    paytmSelected = true;
                    console.log("Paytm button clicked");
                }
            });
            
            if (paytmSelected) {
                updatePigeonStatus("Paytm Payment Method Selected");
                
                setTimeout(() => {
                    proceedToPayment();
                }, 600);
            } else {
                console.log("Paytm option not found, looking for generic proceed button");
                proceedToPayment();
            }
            
        } catch (error) {
            console.log("Error selecting Paytm:", error);
        }
    }, 500);
}

function proceedToPayment() {
    console.log("Proceeding to Payment...");
    updatePigeonStatus("Processing Paytm Payment...");
    
    setTimeout(() => {
        try {
            // Click proceed or pay button
            const proceedBtns = document.querySelectorAll(
                'button[type="submit"]:contains("Proceed"), button[type="submit"]:contains("Continue"), ' +
                'button.proceed-btn, button.pay-btn, button[data-action="pay"], ' +
                'button:contains("Pay"), button:contains("Continue"), .pay-button, ' +
                'button[class*="proceed"], button[class*="continue"], button[class*="pay"]'
            );
            
            if (proceedBtns.length > 0) {
                proceedBtns[0].click();
                console.log("Proceed button clicked");
                
                paymentInitiatedTime = new Date().toLocaleTimeString();
                updatePigeonStatus("Paytm Payment Initiated - Loading QR...");
                
                setTimeout(() => {
                    loadPaytmQR();
                }, 1200);
            } else {
                console.log("No proceed button found, searching alternative method");
                loadPaytmQR();
            }
            
        } catch (error) {
            console.log("Error proceeding to payment:", error);
            loadPaytmQR();
        }
    }, 500);
}

// ==================== PAYTM QR SECTION ====================

var pigeonPaytmQRIntervalId = null;

function loadPaytmQR() {
    console.log("Loading Paytm QR Code...");
    updatePigeonStatus("Paytm QR Loading Step 1/2...");
    
    if (pigeonPaytmQRIntervalId) clearInterval(pigeonPaytmQRIntervalId);
    
    document.querySelector('.pigeon-loader p').innerText = "Paytm QR is Loading...";
    
    pigeonPaytmQRIntervalId = setInterval(() => {
        try {
            // Look for QR code image
            let qrImage = document.querySelector('img[data-key="qr-code"]') || 
                         document.querySelector('img[src*="qr"]') ||
                         document.querySelector('img[class*="qr"]') ||
                         document.querySelector('[data-testid*="qr"] img') ||
                         document.querySelector('.qr-image img');
            
            if (qrImage && qrImage.src) {
                clearInterval(pigeonPaytmQRIntervalId);
                
                paymentInitiatedTime = new Date().toLocaleTimeString();
                updatePigeonStatus("Paytm QR Step 2/2 - Scan QR Code");
                
                // Display QR code
                const qrContainer = document.querySelector('.pigeon-qr img');
                if (qrContainer) {
                    qrContainer.src = qrImage.src;
                }
                
                document.querySelector('.pigeon-loader').style.display = "none";
                document.querySelector('.pigeon-qr').style.display = "flex";
                
                console.log("QR code loaded successfully");
                
                // Auto-confirm payment after timeout
                setTimeout(() => {
                    confirmPaymentAndBook();
                }, 8000); // Wait 8 seconds for user to scan
            }
        } catch (error) {
            console.log("Error loading QR:", error);
        }
    }, 100);
}

// ==================== BHIM UPI SECTION ====================

function bhimUPI() {
    console.log("Processing BHIM UPI...");
    updatePigeonStatus("BHIM UPI Payment Step 1/2...");
    
    document.querySelector('.pigeon-loader p').innerText = "BHIM UPI is Loading...";
    
    setTimeout(() => {
        try {
            // Fill UPI ID
            const upiInputs = document.querySelectorAll(
                'input[placeholder*="UPI"], input[placeholder*="upi"], ' +
                'input[name*="upi"], input[data-upi]'
            );
            
            if (upiInputs.length > 0 && pigeonPaymentData.paymentUpiId) {
                upiInputs[0].value = pigeonPaymentData.paymentUpiId;
                upiInputs[0].dispatchEvent(new Event('input', { bubbles: true }));
                upiInputs[0].dispatchEvent(new Event('change', { bubbles: true }));
                console.log("UPI ID filled");
            }
            
            // Look for pay button
            const payBtn = document.querySelector('button[data-method="bhim"], button:contains("Pay"), .pay-now-btn, button[type="submit"]');
            if (payBtn) {
                payBtn.click();
            }
            
            paymentInitiatedTime = new Date().toLocaleTimeString();
            updatePigeonStatus("BHIM UPI Step 2/2 - Check Your Phone");
            
            document.querySelector('.pigeon-loader').style.display = "none";
            document.querySelector('.pigeon-upi').style.display = "flex";
            
            setTimeout(() => {
                confirmPaymentAndBook();
            }, 6000);
            
        } catch (error) {
            console.log("Error processing BHIM UPI:", error);
        }
    }, 500);
}

// ==================== CONFIRMATION & BOOKING SECTION ====================

function confirmPaymentAndBook() {
    console.log("Confirming Payment and Booking...");
    updatePigeonStatus("Payment Confirmed - Booking Your Ticket...");
    paymentCompletedTime = new Date().toLocaleTimeString();
    
    setTimeout(() => {
        try {
            // Look for book/confirm button
            const bookBtns = document.querySelectorAll(
                'button:contains("Book"), button:contains("Confirm"), ' +
                'button[data-action="book"], button.book-btn, ' +
                '.confirm-booking, button[type="submit"]:contains("Book"), ' +
                'button[class*="book"], button[class*="confirm"]'
            );
            
            if (bookBtns.length > 0) {
                bookBtns[0].click();
                console.log("Book button clicked");
            }
            
            updatePigeonStatus("Booking Confirmed! Redirecting...");
            
            // Send confirmation message
            sendRuntimeMsg('confirmBooking', {
                paymentInitiatedTime: paymentInitiatedTime,
                paymentCompletedTime: paymentCompletedTime,
                paymentMethod: "PAYTM QR",
                status: "SUCCESS"
            });
            
            console.log("Booking confirmed at:", paymentCompletedTime);
            
        } catch (error) {
            console.log("Error confirming booking:", error);
        }
    }, 500);
}

// ==================== UTILITY FUNCTIONS ====================

function sendRuntimeMsg(msg_type, msg_body) {
    let senderName = "pigeon_payments_script";
    try {
        chrome.runtime.sendMessage({
            msg: {
                type: msg_type,
                data: msg_body,
            },
            sender: senderName,
            id: "pigeon",
        });
    } catch (error) {
        console.log("Runtime message error:", error);
    }
}

function updatePigeonStatus(msg) {
    try {
        if (document.querySelector(".status-msg")) {
            document.querySelector(".status-msg").innerText = msg;
        }
    } catch (error) {
        console.log("Status update error:", error);
    }
}

function autoCompleteBooking() {
    console.log("Starting Auto-Complete Booking Process...");
    updatePigeonStatus("Step 1/5 - Filling Passenger Details...");
    
    setTimeout(() => {
        fillPassengerDetails();
    }, 1000);
}

// ==================== UI MODAL SECTION ====================

var pigeonCnt = document.createElement('div');
pigeonCnt.id = 'pigeon-popup-cnt';
pigeonCnt.classList.add('pigeon-popup-cnt');
pigeonCnt.innerHTML = `
    <div class="pigeon-payment-modal" style="
        position: fixed; 
        top: 50%; 
        left: 50%; 
        transform: translate(-50%, -50%); 
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
        padding: 40px; 
        border-radius: 15px; 
        box-shadow: 0 8px 32px rgba(0,0,0,0.3); 
        z-index: 10000; 
        min-width: 450px; 
        color: white;
        font-family: 'Arial', sans-serif;
    ">
        <h2 style="margin: 0 0 20px 0; font-size: 24px; text-align: center;">Pigeon Payments</h2>
        
        <div class="status-msg" style="
            font-size: 16px; 
            font-weight: bold; 
            margin-bottom: 20px; 
            color: white;
            text-align: center;
            min-height: 24px;
        ">Ready to Process Booking</div>
        
        <div class="pigeon-loader" style="text-align: center; padding: 30px 0;">
            <p style="font-size: 14px; color: rgba(255,255,255,0.9); margin-bottom: 20px;">Processing your booking...</p>
            <div style="
                width: 50px; 
                height: 50px; 
                border: 5px solid rgba(255,255,255,0.3); 
                border-top: 5px solid white; 
                border-radius: 50%; 
                animation: spin 1s linear infinite; 
                margin: 0 auto;
            "></div>
        </div>
        
        <div class="pigeon-qr" style="display: none; text-align: center;">
            <p style="font-size: 14px; margin-bottom: 20px; color: rgba(255,255,255,0.95);">
                📱 Scan QR Code with Paytm App to Complete Payment
            </p>
            <div style="background: white; padding: 15px; border-radius: 10px; display: inline-block;">
                <img src="" alt="Payment QR" style="
                    max-width: 280px; 
                    border: 2px solid #ddd; 
                    padding: 10px; 
                    border-radius: 5px;
                    background: white;
                ">
            </div>
            <p style="font-size: 12px; margin-top: 15px; color: rgba(255,255,255,0.8);">
                Do not close this window
            </p>
        </div>
        
        <div class="pigeon-upi" style="display: none; text-align: center; padding: 40px 20px;">
            <p style="font-size: 14px; color: rgba(255,255,255,0.95); margin-bottom: 20px;">
                📲 UPI Request Sent to Your Phone
            </p>
            <p style="font-size: 12px; color: rgba(255,255,255,0.8);">
                Complete the payment on your UPI app
            </p>
        </div>
        
        <style>
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
            
            .pigeon-payment-modal {
                animation: slideIn 0.5s ease-out;
            }
            
            @keyframes slideIn {
                from {
                    transform: translate(-50%, -60%);
                    opacity: 0;
                }
                to {
                    transform: translate(-50%, -50%);
                    opacity: 1;
                }
            }
        </style>
    </div>
    
    <div style="
        position: fixed; 
        top: 0; 
        left: 0; 
        width: 100%; 
        height: 100%; 
        background: rgba(0,0,0,0.5); 
        z-index: 9999;
    "></div>
`;
document.body.appendChild(pigeonCnt);

console.log("Pigeon Payments UI Loaded");

// ==================== MESSAGE LISTENER ====================

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log("Payment script received message:", message);
    
    if (message.id !== "pigeon") {
        sendResponse({ success: false, message: "Invalid ID" });
        return;
    }
    
    const type = message.msg.type;
    const data = message.msg.data;
    
    if (type === "startAutoBooking") {
        pigeonPaymentData = data.bookingData || {};
        console.log('Auto Booking Initiated:', data.bookingData);
        
        if (document.querySelector('.status-msg')) {
            document.querySelector('.status-msg').classList.add('focus');
        }
        
        // Start the auto-booking process
        autoCompleteBooking();
    }
    else if (type === "selectPaymentMethod") {
        pigeonPaymentData = data.paymentData;
        console.log('Payment Data Received:', data.paymentData);
        
        const paymentMethod = data.paymentData.paymentMethod || "PAYTM QR";
        
        if (document.querySelector('.status-msg')) {
            document.querySelector('.status-msg').classList.add('focus');
        }
        
        switch (paymentMethod) {
            case "BHIM UPI":
                bhimUPI();
                break;
                
            case "PAYTM QR":
                selectPaymentMethod();
                break;
                
            case "RAZORPAY":
                updatePigeonStatus("RazorPay Coming Soon...");
                break;
            
            default:
                selectPaymentMethod();
                break;
        }
    }
    
    sendResponse({ success: true, message: "Processing" });
    return true;
});

// Auto-start if data exists in page
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM Content Loaded");
});

// Listen for page navigation
window.addEventListener("navigate", (e) => {
    console.log('Navigation detected - Page changed');
});

console.log("Pigeon Payments Script Ready - Full Version Loaded");