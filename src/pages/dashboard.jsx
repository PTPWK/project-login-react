import React, { useEffect, useState } from 'react';
import { auth } from '../libs/firebase'; // Ensure the path to your firebase config is correct
import Navbar from '../components/Navbar'; // Adjust the path based on your project structure
import { useNavigate } from 'react-router-dom'; // Assuming you are using react-router-dom for navigation
import reactLogo from '../assets/react.svg';
import viteLogo from '/vite.svg';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Set the document title to "Dashboard"
    document.title = 'Dashboard';
  }, []);

  useEffect(() => {
    // Fetch the currently signed-in user
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        // Redirect to login if no user is signed in
        navigate('/login');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, [navigate]);



  return (
    <div>
      <Navbar />
      <div className="container mt-4">

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

        <h1>Dashboard

        <div className="btn-group">
          <button
            type="button"
            className="btn btn-danger dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
 
          </button>
         
        </div>
        </h1>
       
        {user ? (
          <p className='kanit mt-3'>Welcome, สวัสดี, {user.email}!</p>
        ) : (
<div className="spinner-border text-primary" role="status">
  <span className="visually-hidden">Loading...</span>
</div>

        )}
      </div>


      <div className="card" style={{ marginTop: '10px' }}>
          <div className="card-body">
            <h4 className='kanit-bold'> การสร้างระบบล็อกอินด้วย React, Vite, Firebase และ Bootstrap</h4>
            <p className='text-start kanit'>
              การสร้างระบบล็อกอินเป็นฟีเจอร์ที่สำคัญในหลายๆ แอปพลิเคชันเว็บ เพื่อให้ผู้ใช้สามารถเข้าสู่ระบบและเข้าถึงเนื้อหาหรือฟังก์ชันที่ต้องการ
              บทความนี้จะพาคุณไปเรียนรู้การสร้างระบบล็อกอินด้วยเทคโนโลยียอดนิยม ได้แก่ React, Vite, Firebase และ Bootstrap
            </p>

            <div className="accordion" id="accordionExample">
              <div className="accordion-item">
                <h2 className="accordion-header kanit">
                  <button
                    className="accordion-button collapsed"
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
                  className="accordion-collapse collapse"
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
  );
}

export default Dashboard;
