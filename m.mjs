(function() {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload"))
    return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    e(l);
  new MutationObserver((l) => {
    for (const t of l)
      if (t.type === "childList")
        for (const o of t.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && e(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function f(l) {
    const t = {};
    return l.integrity && (t.integrity = l.integrity), l.referrerpolicy && (t.referrerPolicy = l.referrerpolicy), l.crossorigin === "use-credentials" ? t.credentials = "include" : l.crossorigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t;
  }
  function e(l) {
    if (l.ep)
      return;
    l.ep = !0;
    const t = f(l);
    fetch(l.href, t);
  }
})();
const c = `:root{--instr-color-open: white;--instr-color-closed: black}body{font-family:sans-serif}div{font-size:2rem;font-weight:bolder;display:flex;align-items:center}div span{width:10rem}gt-flute svg{height:100px}gt-flute.D .L1A,gt-flute.D2 .L1A{fill:var(--instr-color-closed)}gt-flute.D .L1B,gt-flute.D2 .L1B{fill:var(--instr-color-closed)}gt-flute.D .L2,gt-flute.D2 .L2{fill:var(--instr-color-closed)}gt-flute.D .L3,gt-flute.D2 .L3{fill:var(--instr-color-closed)}gt-flute.D .L4,gt-flute.D2 .L4{fill:var(--instr-color-closed)}gt-flute.D .L5,gt-flute.D2 .L5{fill:var(--instr-color-open)}gt-flute.D .R2,gt-flute.D2 .R2{fill:var(--instr-color-closed)}gt-flute.D .R3,gt-flute.D2 .R3{fill:var(--instr-color-closed)}gt-flute.D .R4,gt-flute.D2 .R4{fill:var(--instr-color-closed)}gt-flute.D .R5,gt-flute.D2 .R5{fill:var(--instr-color-open)}gt-flute.Ds .L1A,gt-flute.Ef .L1A{fill:var(--instr-color-closed)}gt-flute.Ds .L1B,gt-flute.Ef .L1B{fill:var(--instr-color-closed)}gt-flute.Ds .L2,gt-flute.Ef .L2{fill:var(--instr-color-closed)}gt-flute.Ds .L3,gt-flute.Ef .L3{fill:var(--instr-color-closed)}gt-flute.Ds .L4,gt-flute.Ef .L4{fill:var(--instr-color-closed)}gt-flute.Ds .L5,gt-flute.Ef .L5{fill:var(--instr-color-open)}gt-flute.Ds .R2,gt-flute.Ef .R2{fill:var(--instr-color-closed)}gt-flute.Ds .R3,gt-flute.Ef .R3{fill:var(--instr-color-closed)}gt-flute.Ds .R4,gt-flute.Ef .R4{fill:var(--instr-color-closed)}gt-flute.Ds .R5,gt-flute.Ef .R5{fill:var(--instr-color-closed)}gt-flute.E .L1A{fill:var(--instr-color-closed)}gt-flute.E .L1B{fill:var(--instr-color-closed)}gt-flute.E .L2{fill:var(--instr-color-closed)}gt-flute.E .L3{fill:var(--instr-color-closed)}gt-flute.E .L4{fill:var(--instr-color-closed)}gt-flute.E .L5{fill:var(--instr-color-open)}gt-flute.E .R2{fill:var(--instr-color-closed)}gt-flute.E .R3{fill:var(--instr-color-closed)}gt-flute.E .R4{fill:var(--instr-color-open)}gt-flute.E .R5{fill:var(--instr-color-closed)}gt-flute.F .L1A{fill:var(--instr-color-closed)}gt-flute.F .L1B{fill:var(--instr-color-closed)}gt-flute.F .L2{fill:var(--instr-color-closed)}gt-flute.F .L3{fill:var(--instr-color-closed)}gt-flute.F .L4{fill:var(--instr-color-closed)}gt-flute.F .L5{fill:var(--instr-color-open)}gt-flute.F .R2{fill:var(--instr-color-closed)}gt-flute.F .R3{fill:var(--instr-color-open)}gt-flute.F .R4{fill:var(--instr-color-open)}gt-flute.F .R5{fill:var(--instr-color-closed)}gt-flute.Fs .L1A{fill:var(--instr-color-closed)}gt-flute.Fs .L1B{fill:var(--instr-color-closed)}gt-flute.Fs .L2{fill:var(--instr-color-closed)}gt-flute.Fs .L3{fill:var(--instr-color-closed)}gt-flute.Fs .L4{fill:var(--instr-color-closed)}gt-flute.Fs .L5{fill:var(--instr-color-open)}gt-flute.Fs .R2{fill:var(--instr-color-open)}gt-flute.Fs .R3{fill:var(--instr-color-open)}gt-flute.Fs .R4{fill:var(--instr-color-closed)}gt-flute.Fs .R5{fill:var(--instr-color-closed)}gt-flute.G .L1A{fill:var(--instr-color-closed)}gt-flute.G .L1B{fill:var(--instr-color-closed)}gt-flute.G .L2{fill:var(--instr-color-closed)}gt-flute.G .L3{fill:var(--instr-color-closed)}gt-flute.G .L4{fill:var(--instr-color-closed)}gt-flute.G .L5{fill:var(--instr-color-open)}gt-flute.G .R2{fill:var(--instr-color-open)}gt-flute.G .R3{fill:var(--instr-color-open)}gt-flute.G .R4{fill:var(--instr-color-open)}gt-flute.G .R5{fill:var(--instr-color-closed)}gt-flute.Gs .L1A{fill:var(--instr-color-closed)}gt-flute.Gs .L1B{fill:var(--instr-color-closed)}gt-flute.Gs .L2{fill:var(--instr-color-closed)}gt-flute.Gs .L3{fill:var(--instr-color-closed)}gt-flute.Gs .L4{fill:var(--instr-color-closed)}gt-flute.Gs .L5{fill:var(--instr-color-closed)}gt-flute.Gs .R2{fill:var(--instr-color-open)}gt-flute.Gs .R3{fill:var(--instr-color-open)}gt-flute.Gs .R4{fill:var(--instr-color-open)}gt-flute.Gs .R5{fill:var(--instr-color-closed)}gt-flute.A .L1A{fill:var(--instr-color-closed)}gt-flute.A .L1B{fill:var(--instr-color-closed)}gt-flute.A .L2{fill:var(--instr-color-closed)}gt-flute.A .L3{fill:var(--instr-color-closed)}gt-flute.A .L4{fill:var(--instr-color-open)}gt-flute.A .L5{fill:var(--instr-color-open)}gt-flute.A .R2{fill:var(--instr-color-open)}gt-flute.A .R3{fill:var(--instr-color-open)}gt-flute.A .R4{fill:var(--instr-color-open)}gt-flute.A .R5{fill:var(--instr-color-closed)}gt-flute.As .L1A{fill:var(--instr-color-closed)}gt-flute.As .L1B{fill:var(--instr-color-open)}gt-flute.As .L2{fill:var(--instr-color-closed)}gt-flute.As .L3{fill:var(--instr-color-open)}gt-flute.As .L4{fill:var(--instr-color-open)}gt-flute.As .L5{fill:var(--instr-color-open)}gt-flute.As .R2{fill:var(--instr-color-open)}gt-flute.As .R3{fill:var(--instr-color-open)}gt-flute.As .R4{fill:var(--instr-color-open)}gt-flute.As .R5{fill:var(--instr-color-closed)}gt-flute.B .L1A{fill:var(--instr-color-closed)}gt-flute.B .L1B{fill:var(--instr-color-closed)}gt-flute.B .L2{fill:var(--instr-color-closed)}gt-flute.B .L3{fill:var(--instr-color-open)}gt-flute.B .L4{fill:var(--instr-color-open)}gt-flute.B .L5{fill:var(--instr-color-open)}gt-flute.B .R2{fill:var(--instr-color-open)}gt-flute.B .R3{fill:var(--instr-color-open)}gt-flute.B .R4{fill:var(--instr-color-open)}gt-flute.B .R5{fill:var(--instr-color-closed)}gt-flute.C2 .L1A{fill:var(--instr-color-open)}gt-flute.C2 .L1B{fill:var(--instr-color-open)}gt-flute.C2 .L2{fill:var(--instr-color-closed)}gt-flute.C2 .L3{fill:var(--instr-color-open)}gt-flute.C2 .L4{fill:var(--instr-color-open)}gt-flute.C2 .L5{fill:var(--instr-color-open)}gt-flute.C2 .R2{fill:var(--instr-color-open)}gt-flute.C2 .R3{fill:var(--instr-color-open)}gt-flute.C2 .R4{fill:var(--instr-color-open)}gt-flute.C2 .R5{fill:var(--instr-color-closed)}gt-flute.Cs2 .L1A{fill:var(--instr-color-open)}gt-flute.Cs2 .L1B{fill:var(--instr-color-open)}gt-flute.Cs2 .L2{fill:var(--instr-color-open)}gt-flute.Cs2 .L3{fill:var(--instr-color-open)}gt-flute.Cs2 .L4{fill:var(--instr-color-open)}gt-flute.Cs2 .L5{fill:var(--instr-color-open)}gt-flute.Cs2 .R2{fill:var(--instr-color-open)}gt-flute.Cs2 .R3{fill:var(--instr-color-open)}gt-flute.Cs2 .R4{fill:var(--instr-color-open)}gt-flute.Cs2 .R5{fill:var(--instr-color-closed)}
`;
let i = document.createElement("style");
i.innerHTML = c;
document.head.append(i);
class n extends HTMLElement {
  constructor() {
    super(), this.innerHTML = `
        <svg version="1.2" baseProfile="tiny" class="Flute" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 253.8 64" overflow="visible"
            xml:space="preserve">
            <rect class="Body" x="8.4" y="24.3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="234.2"
                height="18.7" />
            <path class="Mouthpiece" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M22.8,20.3h42.6c2.8,0,5.1,2.3,5.1,5.1v12.7
        c0,5.7-4.6,10.3-10.3,10.3H27.9c-5.6,0-10.2-4.6-10.2-10.2V25.4C17.8,22.6,20,20.3,22.8,20.3z" />
            <ellipse class="Hole" stroke="#000000" stroke-miterlimit="10" cx="43.8" cy="34.4" rx="9.9" ry="6" />
            <circle class="L1A" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="88.8" cy="43" r="6.9" />
            <circle class="L2" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="125.1" cy="33.7" r="6.9" />
            <circle class="L3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="142.1" cy="33.7" r="6.9" />
            <circle class="L4" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="159.1" cy="33.7" r="6.9" />
            <circle class="R2" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="184" cy="33.7" r="6.9" />
            <circle class="R3" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="201" cy="33.7" r="6.9" />
            <circle class="R4" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" cx="218" cy="33.7" r="6.9" />
            <rect class="L1B" x="95.7" y="36.1" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" width="13.8"
                height="13.8" />
            <path class="L5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M172.2,32.3c0,0-0.4-14-3.6-21.6c-3.1-7.6-8.7-4.4-8.9,0
        c-0.2,4.4,3.1,4.4,5.1,4.2C167,17.6,169.7,20.5,172.2,32.3z" />
            <path class="R5" fill="#FFFFFF" stroke="#000000" stroke-miterlimit="10" d="M237.3,29.9c0,0-0.4,14-3.6,21.6s-8.7,4.4-8.9,0
        s3.1-4.4,5.1-4.2C232.2,44.6,234.9,41.7,237.3,29.9z" />
        </svg>
        `;
  }
}
customElements.define("gt-flute", n);
