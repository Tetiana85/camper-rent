import{u as r,t as o,j as e,L as n}from"./index-b10f9492.js";const a=r.div`
  display: flex;
  justify-content: flex-end;
  background-image: url('/hero.webp');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 30px;
`,i=r.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  color: ${o.colors.buttonText};
  max-width: 700px;
  text-align: center;
  align-items: center;
  gap: 30px;
`,s=r.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`,c=r.h1`
  font-size: 40px;
  color: ${o.colors.hoverColor};
  text-align: center;
  text-shadow:
    -0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px -0.5px 0 rgba(255, 255, 255, 0.5),
    -0.5px 0.5px 0 rgba(255, 255, 255, 0.5),
    0.5px 0.5px 0 rgba(255, 255, 255, 0.5);
`,d=r.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
`,t=r.p`
  text-align: start;
  font-size: 20px;
`,l=r.button`
  width: 160px;
  height: 56px;
  border-radius: 200px;
  background-color: ${o.colors.red};
  color: rgba(255, 255, 255, 1);
  letter-spacing: -0.5%;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  border: none;
  transition: transform 0.5s ease-in-out;

  &:hover,
  &:focus {
    background-color: ${o.colors.red};
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,p=()=>e.jsx(a,{children:e.jsxs(i,{children:[e.jsxs(s,{children:[e.jsx(c,{children:"Camper Rent Ukraine"}),e.jsxs(d,{children:[e.jsx(t,{children:"Welcome to Camper Rent Ukraine, where your adventure begins! At Camper Rent Ukraine, we believe that travel is not just about destinations but about journeys and new experiences. Our mission is to make it easier and more affordable for everyone to explore the great outdoors."}),e.jsx(t,{children:"With our wide selection of top-quality campers, you can hit the road on your terms, without breaking the bank. Renting a camper from us is quick, straightforward, and designed with your convenience in mind. Whether you're planning a weekend getaway or a cross-country tour, we provide fully-equipped campers to meet all your travel needs."}),e.jsx(t,{children:"Join us in embracing the spirit of adventure—where freedom, flexibility, and the open road await. Book your camper today and start your journey with Camper Rent Ukraine!"})]})]}),e.jsx(n,{to:"/catalog",children:e.jsx(l,{children:"Book now"})})]})});function x(){return e.jsx("section",{style:{paddingTop:"20px"},className:"container",children:e.jsx(p,{})})}export{x as default};
