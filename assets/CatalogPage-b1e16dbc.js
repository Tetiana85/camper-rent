import{u as o,r as d,a as m,j as t,b as p,c as g,d as j,e as b,f}from"./index-ee9941a3.js";import{s as C,C as y,I as v}from"./Car-4b704f41.js";const w=o.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
`,F=o.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;
`,$=o.button`
  width: 145px;
  height: 56px;

  margin: 0 auto;

  background-color: transparent;
  border: 1px solid ${e=>e.theme.colors.loadMoreBorderColor};
  border-radius: ${e=>e.theme.radius.xlg};

  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,S=()=>{const[e,i]=d.useState(4),r=m(C),c=()=>{i(s=>s+4)},a=e>=r.length;return t.jsxs(w,{children:[t.jsx(F,{children:r.map((s,l)=>t.jsx(y,{car:s.car,hidden:l>=e},s.id))}),!a&&t.jsx($,{onClick:c,disabled:a,children:"Load more"})]})},k=o.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 18px;

  width: 112px;
  height: 95px;

  font-size: 16px;
  line-height: 20px;
  font-weight: 500;

  border: 1px solid ${e=>e.theme.colors.borderColor};
  border-radius: ${e=>e.theme.radius.sm};
  background-color: transparent;
  transition: border ${e=>e.theme.transition.transitionDurAndFunc};

  &.isSelected {
    border: 1px solid ${e=>e.theme.colors.red};
  }
`,I=o.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  max-width: 80px;
`,n=({id:e,iconType:i,text:r})=>{const c=p(),[a,s]=d.useState(!1),l=()=>{c((i==="equipment"?g:j)(e.toLowerCase())),s(!a)};return t.jsx(k,{className:a?"isSelected":"",onClick:()=>l(),children:t.jsxs(I,{children:[t.jsx(v,{iconId:e,width:i==="equipment"?32:40,height:i==="equipment"?32:28}),t.jsx("p",{children:r})]})})},T=o.p`
  color: rgba(16, 24, 40, 0.6);
  margin-bottom: 8px;
`,q=o.p`
  margin-top: 32px;
  margin-bottom: 14px;
  color: rgba(71, 84, 103, 1);
`,x=o.p`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 24px;
`,h=o.div`
  width: 360px;
  height: 1px;
  margin-bottom: 24px;
  background-color: rgba(16, 24, 40, 0.1);
`,u=o.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  width: 360px;

  margin-bottom: 32px;
`,L=o.button`
  width: 173px;
  height: 56px;
  margin-top: 32px;

  background-color: ${e=>e.theme.colors.red};
  border-radius: ${e=>e.theme.radius.xlg};
  border: none;
  color: ${e=>e.theme.colors.buttonText};

  transition: background-color ${e=>e.theme.transition.transitionDurAndFunc};

  &:hover {
    background-color: ${e=>e.theme.colors.hoverColor};
  }
`,A=o.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 360px;
  height: 56px;
`,V=o.input`
  width: 100%;
  height: 100%;
  padding: 18px 18px 18px 40px;
  border: none;
  border-radius: ${e=>e.theme.radius.sm};
  background-color: ${e=>e.theme.colors.white};
  outline: none;
`,B=({iconId:e,width:i,height:r,className:c})=>t.jsx("svg",{className:c,width:i,height:r,children:t.jsx("use",{href:`./sprite.svg#${e}`})}),D=o(B)`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  z-index: 1;
`,E=()=>{const e=p();return t.jsxs("div",{children:[t.jsxs("div",{children:[t.jsx(T,{children:"Location"}),t.jsxs(A,{children:[t.jsx(D,{iconId:"map-pin"}),t.jsx(V,{onChange:i=>e(b(i.target.value)),name:"location",type:"text",placeholder:"Kyiv, Ukraine"})]})]}),t.jsx(q,{children:"Filters"}),t.jsxs("div",{children:[t.jsx(x,{children:"Vehicle equipment"}),t.jsx(h,{}),t.jsxs(u,{children:[t.jsx(n,{id:"airConditioner",iconType:"equipment",text:"AC"}),t.jsx(n,{id:"automatic",iconType:"equipment",text:"Automatic"}),t.jsx(n,{id:"kitchen",iconType:"equipment",text:"Kitchen"}),t.jsx(n,{id:"tv",iconType:"equipment",text:"TV"}),t.jsx(n,{id:"shower",iconType:"equipment",text:"Shower/WC"})]}),t.jsx(x,{children:"Vehicle type"}),t.jsx(h,{}),t.jsxs(u,{children:[t.jsx(n,{id:"paneltruck",iconType:"vehicle",text:"Van"}),t.jsx(n,{id:"fullyintegrated",iconType:"vehicle",text:"Fully Integrated"}),t.jsx(n,{id:"alcove",iconType:"vehicle",text:"Alcove"})]})]}),t.jsx(L,{children:"Search"})]})};function K(){const e=p();return d.useEffect(()=>{e(f())},[e]),t.jsxs("section",{className:"container",children:[t.jsx(E,{}),t.jsx(S,{})]})}export{K as default};
