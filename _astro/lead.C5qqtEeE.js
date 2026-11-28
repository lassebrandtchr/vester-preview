var e=`v-lead`;function t(){try{let t=JSON.parse(sessionStorage.getItem(e)??`{}`),n=e=>Array.isArray(e)?e.filter(e=>typeof e==`string`):void 0;return{picks:n(t?.picks),calc:n(t?.calc)}}catch{return{}}}function n(n){try{sessionStorage.setItem(e,JSON.stringify({...t(),...n}))}catch{}}function r(){try{sessionStorage.removeItem(e)}catch{}}function i({picks:e,calc:t}){let n=[];return e?.length&&n.push(`Jeg er interesseret i:\n${e.map(e=>`- ${e}`).join(`
`)}`),t?.length&&n.push(`Fra beregneren (illustrativt estimat):\n${t.map(e=>`- ${e}`).join(`
`)}`),n.join(`

`)}export{n as i,i as n,t as r,r as t};