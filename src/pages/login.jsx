import React, { useRef, useState, useEffect } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../libs/firebase';
import { useNavigate } from 'react-router-dom';
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Toast, ToastContainer } from 'react-bootstrap';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const [copyAlert, setCopyAlert] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [textToCopy, setTextToCopy] = useState('This is the text to copy');

  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = 'Login';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log('user', user);
      navigate('/dashboard');
    } catch (error) {
      console.log(error);
      setErrorMessage(error.message);
    }
  };

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => {
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2000);
      })
      .catch(err => {
        alert('Failed to copy text');
        console.error('Failed to copy text: ', err);
      });
  };

  const handlePaste = (ref) => {
    navigator.clipboard.readText()
      .then(text => {
        ref.current.value = text;
      })
      .catch(err => {
        alert('Failed to paste text');
        console.error('Failed to paste text: ', err);
      });
  };

  return (
    <>
      <div className="container">
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" style={{ width: '150px', height: '150px' }} />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" style={{ width: '150px', height: '150px' }} />
          </a>
          <a href="https://firebase.google.com" target="_blank" rel="noopener noreferrer">
            <img src="https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_1080,q_100,w_1080/v1/gcs/platform-data-dsc/events/firebase_F8bg4TU.png" className="logo" alt="Firebase logo" style={{ width: '150px', height: '150px' }} />
          </a>
          <a href="https://getbootstrap.com" target="_blank" rel="noopener noreferrer">
            <img src="https://bootstrap-guide.com/images/bootstrap-social-logo.png" className="logo" alt="Bootstrap logo" style={{ width: '150px', height: '150px' }} />
          </a>
        </div>

        <form onSubmit={handleSubmit}>
          {copyAlert && (
            <div className="alert alert-success" role="alert">
              Copied to clipboard
            </div>
          )}

          <div className="card" style={{ marginBottom: '20px' }}>
            <div className="card-body">
              <h5 className="kanit-bold">โปรดล็อคอินด้วยเมล์นี้ !</h5>
              <p>Email: <strong>users@mail.com </strong>
                <button
                  type="button"
                  className="btn btn-warning btn-sm"
                  onClick={() => handleCopy('users@mail.com')}
                >
                  Copy
                </button>
              </p>
              <p>Password: <strong>123456789 </strong>
                <button
                  type="button"
                  className="btn btn-warning btn-sm"
                  onClick={() => handleCopy('123456789')}
                >
                  Copy
                </button>
              </p>
            </div>
          </div>

          <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <label htmlFor="email" style={{ flex: '0 0 25%', maxWidth: '25%', marginRight: '1rem' }} className='kanit-bold'>
              Email
            </label>

<div className="input-group mb-3">
      <button className="btn btn-outline-secondary" type="button"   onClick={() => handlePaste(emailRef)}>
      Paste
      </button>
      <input
              type="email"
              className="form-control"
              id="email"
              required
              ref={emailRef}
              style={{ flex: '1' }}
      />
    </div>


          </div>

          <div className="mb-3" style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
            <label htmlFor="inputPassword" style={{ flex: '0 0 25%', maxWidth: '25%', marginRight: '1rem' }} className='kanit-bold'>
              Password
            </label>


<div className="input-group mb-3">
      <button className="btn btn-outline-secondary" type="button" onClick={() => handlePaste(passwordRef)}>
      Paste
      </button>
      <input
              type="password"
              className="form-control"
              id="inputPassword"
              required
              ref={passwordRef}
              style={{ flex: '1' }}
      />
    </div>
          </div>

          <button type="submit" className="btn btn-primary">Login</button>

          {errorMessage && (
            <p className="alert alert-warning alert-dismissible fade show">
              {errorMessage}
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </p>
          )}
        </form>

        <div className="card" style={{ marginTop: '10px' }}>
          <div className="card-body">
            <h4 className='kanit-bold'> การสร้างระบบล็อกอินด้วย React, Vite, Firebase และ Bootstrap</h4>
            <p className='text-start kanit'>
              การสร้างระบบล็อกอินเป็นฟีเจอร์ที่สำคัญในหลายๆ แอปพลิเคชันเว็บ เพื่อให้ผู้ใช้สามารถเข้าสู่ระบบและเข้าถึงเนื้อหาหรือฟังก์ชันที่ต้องการ
              บทความนี้จะพาคุณไปเรียนรู้การสร้างระบบล็อกอินด้วยเทคโนโลยียอดนิยม ได้แก่ React, Vite, Firebase และ Bootstrap
            </p>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button kanit"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    ขั้นตอนที่ 1: ตั้งค่าโปรเจ็กต์
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <strong className='text-start kanit-bold'>1.1 สร้างโปรเจ็กต์ React ด้วย Vite</strong>
                    <p className='text-start kanit'>
                      Vite เป็นเครื่องมือที่ช่วยให้การสร้างโปรเจ็กต์ React ได้อย่างรวดเร็วและมีประสิทธิภาพ
                      ในการเริ่มต้นโปรเจ็กต์ React ใหม่ด้วย Vite ให้ใช้คำสั่งต่อไปนี้ที่ cmd : 
                      <br/>
                      <code>npm create vite@latest my-app --template react</code>
                       คำสั่งนี้จะสร้างโฟลเดอร์ใหม่ชื่อ my-app และตั้งค่าโปรเจ็กต์ React เบื้องต้นด้วย Vite
                    </p>

                    <strong className='text-start kanit-bold'>1.2 ติดตั้ง Bootstrap</strong>
                    <p className='text-start kanit'>
                    Bootstrap เป็นเฟรมเวิร์ก CSS ที่ช่วยให้การออกแบบ UI เป็นเรื่องง่ายและสวยงาม เพื่อติดตั้ง Bootstrap ให้ใช้คำสั่ง:
                      <code>npm install bootstrap</code>
                      หลังจากติดตั้งแล้ว ให้นำเข้า Bootstrap CSS ในไฟล์ src/main.jsx
                      <code>import 'bootstrap/dist/css/bootstrap.min.css';</code>
                    </p>

                    <strong className='text-start kanit-bold'>1.3 ติดตั้ง Firebase</strong>
                    <p className='text-start kanit'>
                    Firebase เป็นแพลตฟอร์มที่ให้บริการฐานข้อมูล, การตรวจสอบสิทธิ์, และบริการอื่นๆ สำหรับการพัฒนาแอปพลิเคชัน เพื่อติดตั้ง Firebase ให้ใช้คำสั่ง:
                      <code>npm install firebase</code>
                     
                    </p>

                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header kanit">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ขั้นตอนที่ 2: ตั้งค่า Firebase
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                  
                  <strong className='text-start kanit-bold'>2.1 สร้างโปรเจ็กต์ใน Firebase Console</strong>
                    <p className='text-start kanit'>
                    เข้าสู่ Firebase Console และสร้างโปรเจ็กต์ใหม่ หลังจากสร้างโปรเจ็กต์เสร็จแล้ว ให้ไปที่ส่วนการตั้งค่าโปรเจ็กต์เพื่อรับคอนฟิก Firebase ของคุณ
              
                    </p>
                  
                    <strong className='text-start kanit-bold'>2.2 สร้างไฟล์การตั้งค่า Firebase</strong>
                    <p className='text-start kanit'>
                    สร้างไฟล์ src/firebase.js และเพิ่มการตั้งค่า Firebase ของคุณ
                    </p>

                    </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header kanit">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   ขั้นตอนที่ 3: สร้างฟอร์มล็อกอิน
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">

                  <strong className='text-start kanit-bold'>3.1 สร้างคอมโพเนนต์ล็อกอิน</strong>
                    <p className='text-start kanit'>
                    สร้างไฟล์ src/components/Login.jsx และเพิ่มคอมโพเนนต์ล็อกอิน
                    </p>
                    
                     </div>
                </div>
              </div>

              <div className="accordion-item">
                <h2 className="accordion-header kanit">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsef"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                   ขั้นตอนที่ 4: ตั้งค่าการนำทาง (Routing)
                  </button>
                </h2>
                <div
                  id="collapsef"
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">

                  <strong className='text-start kanit-bold'>4.1 ติดตั้ง react-router-dom</strong>
                    <p className='text-start kanit'>
                    react-router-dom ช่วยในการจัดการการนำทางในแอปพลิเคชัน React ให้ใช้คำสั่ง: <code>npm install react-router-dom</code>
                    </p>

                    <strong className='text-start kanit-bold'>4.2 ตั้งค่า routing ใน src/main.jsx</strong>
                    <p className='text-start kanit'>
                    ตั้งค่าการนำทางโดยการแก้ไขไฟล์ src/main.jsx
                    </p>
                    
                    <strong className='text-start kanit-bold'>4.3 เรียกใช้งานโปรเจ็กต์</strong>
                    <p className='text-start kanit'>
                    เรียกใช้งานโปรเจ็กต์เพื่อทดสอบระบบล็อกอินของคุณด้วยคำสั่ง: <code>npm run dev</code>
                    </p>

                     </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <ToastContainer position="top-end">
  <Toast show={showToast} onClose={() => setShowToast(false)} delay={1000} autohide className="bg-success text-white">
    <Toast.Body>Text copied to clipboard!</Toast.Body>
  </Toast>
</ToastContainer>
    </>
  );
};

export default Login;
