// import banner from '../images/banner.jpeg';

// export default function Home({ onNavigate }) {
//   return (
//     <>
 
//     <section className="active">
      
//       <div className="hero">
//         <div>
//           {/* <div className="eyebrow-mark">Hello, I'm Jordan</div> */}
//           <h2 style={{fontSize:"40px"}}>Ensuring quality and precision across every stage of fabrication.</h2>
//           <p className="lede">
//            Delivering professional supervision across structural fabrication, welding, surface preparation, protective coating, and painting operations. Ensuring that each activity meets approved procedures, project specifications, quality requirements, and safety standards from fabrication through final inspection.
//           </p>
//           <div className="btn-row">
//             <button className="btn ghost" onClick={() => onNavigate('contact')}>
//              Contact Me
//             </button>
//             <button className="btn ghost" onClick={() => onNavigate('services')}>
//               Explore Services
//             </button>
//           </div>
         
//         </div>

//         <div className="hero-art" aria-hidden="true">
//          <div><img /></div>
//          <div><img /></div>
//          <div><img /></div>
//          <div><img /></div>
//         </div>
//       </div>
//     </section>
//        <div>
//         <img src={banner} />
//       </div>
//     </>
//   );
// }


// import banner from '../images/banner.jpeg';

// import fabrication from '../images/fabrication.jpg';
// import welding from '../images/welding.jpg';
// import painting from '../images/painting.jpg';
// import surface from '../images/surface.jpg';

// export default function Home({ onNavigate }) {
//   return (
//     <>
//       <section className="home-section">

//         <div className="container-fluid">

//           <div className="row align-items-center">

//             {/* LEFT SIDE - CONTENT */}
//             <div className="col-12 col-lg-6">

//               <div className="hero-content">

//                 <h2 style={{ fontSize: "40px" }}>
//                   Ensuring quality and precision across every stage of fabrication.
//                 </h2>

//                 <p className="lede">
//                   Delivering professional supervision across structural
//                   fabrication, welding, surface preparation, protective coating,
//                   and painting operations. Ensuring that each activity meets
//                   approved procedures, project specifications, quality
//                   requirements, and safety standards from fabrication through
//                   final inspection.
//                 </p>

//                 <div className="btn-row">

//                   <button
//                     className="btn ghost"
//                     onClick={() => onNavigate('contact')}
//                   >
//                     Contact Me
//                   </button>

//                   <button
//                     className="btn ghost"
//                     onClick={() => onNavigate('services')}
//                   >
//                     Explore Services
//                   </button>

//                 </div>

//               </div>

//             </div>


//             {/* RIGHT SIDE - IMAGES */}
//             <div className="col-12 col-lg-6">

//               <div className="image-grid">

//                 <div className="service-image">
//                   <img
//                     src={fabrication}
//                     alt="Fabrication work"
//                   />
//                 </div>

//                 <div className="service-image">
//                   <img
//                     src={welding}
//                     alt="Welding work"
//                   />
//                 </div>

//                 <div className="service-image">
//                   <img
//                     src={painting}
//                     alt="Painting work"
//                   />
//                 </div>

//                 <div className="service-image">
//                   <img
//                     src={surface}
//                     alt="Surface preparation"
//                   />
//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </section>


//       {/* Banner */}
//       <div className="banner-container">
//         <img
//           src={banner}
//           alt="Fabrication and painting services"
//         />
//       </div>

//     </>
//   );
// }


import banner from '../images/banner.jpeg';

import fabrication from '../images/fabrication.jpg';
import welding from '../images/welding.jpg';
import painting from '../images/painting.jpg';
import surface from '../images/surface.jpg';
import { useNavigate } from 'react-router-dom';


export default function Home({ onNavigate }) {
  const navigate = useNavigate();


  return (
    <>
      <section className="home-section">

        <div className="container-fluid">

          <div className="row align-items-center">

            {/* LEFT SIDE - CONTENT */}
            <div className="col-12 col-lg-6">

              <div className="hero-content">

                <h2 style={{ fontSize: "40px" }}>
                  Ensuring quality and precision across every stage of fabrication.
                </h2>

                <p className="lede">
                  Delivering professional supervision across structural
                  fabrication, welding, surface preparation, protective coating,
                  and painting operations. Ensuring that each activity meets
                  approved procedures, project specifications, quality
                  requirements, and safety standards from fabrication through
                  final inspection.
                </p>

                <div className="btn-row">

                  <button
                    className="btn ghost"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Us
                  </button>

                  <button
                    className="btn ghost"
                    onClick={() => navigate('/services')}
                  >
                    Explore Services
                  </button>

                </div>

              </div>

            </div>


            {/* RIGHT SIDE - IMAGES */}
            <div className="col-12 col-lg-6">

              <div className="image-grid">

                <div className="service-image">
                  <img
                    src={fabrication}
                    alt="Fabrication work"
                  />
                </div>

                <div className="service-image">
                  <img
                    src={welding}
                    alt="Welding work"
                  />
                </div>

                <div className="service-image">
                  <img
                    src={painting}
                    alt="Painting work"
                  />
                </div>

                <div className="service-image">
                  <img
                    src={surface}
                    alt="Surface preparation"
                  />
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* Banner */}
      <div className="banner-container">
        <img
          src={banner}
          alt="Fabrication and painting services"
        />
      </div>

    </>
  );
}
